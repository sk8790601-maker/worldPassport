import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { seedData } from './seedData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-production';
const MONGODB_URI = process.env.MONGODB_URI;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI in environment. Add it to server/.env');
  process.exit(1);
}

app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json({ limit: '2mb' }));

const dataSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'admin' },
}, { timestamps: true }));

const models = {
  countries: mongoose.model('Country', dataSchema, 'countries'),
  programs: mongoose.model('Program', dataSchema, 'programs'),
  services: mongoose.model('Service', dataSchema, 'services'),
  partners: mongoose.model('Partner', dataSchema, 'partners'),
  contacts: mongoose.model('Contact', dataSchema, 'contacts'),
  testimonials: mongoose.model('Testimonial', dataSchema, 'testimonials'),
};

const normalizeDoc = (doc) => {
  const obj = doc.toObject ? doc.toObject() : doc;
  const { _id, __v, ...rest } = obj;
  return { ...rest, id: String(_id) };
};

function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

async function seedDatabase() {
  const adminEmail = (process.env.ADMIN_EMAIL || 'admin@worldpassport.in').toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const existingAdmin = await User.findOne({ email: adminEmail });
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(adminPassword, 12);
    await User.create({ email: adminEmail, passwordHash, role: 'admin' });
    console.log(`Seeded admin user: ${adminEmail}`);
  }

  for (const [key, values] of Object.entries(seedData)) {
    const count = await models[key].countDocuments();
    if (count === 0 && values.length) {
      await models[key].insertMany(values);
      console.log(`Seeded ${key}`);
    }
  }
}

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: String(email || '').toLowerCase() });
  if (!user) return res.status(401).json({ message: 'Invalid email or password' });
  const ok = await bcrypt.compare(password || '', user.passwordHash);
  if (!ok) return res.status(401).json({ message: 'Invalid email or password' });
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { email: user.email, role: user.role } });
});

app.get('/api/auth/me', auth, (req, res) => {
  res.json({ user: { email: req.user.email, role: req.user.role } });
});

app.get('/api/content', async (_req, res) => {
  const result = {};
  for (const [key, Model] of Object.entries(models)) {
    const docs = await Model.find().sort({ createdAt: 1 });
    result[key] = docs.map(normalizeDoc);
  }
  res.json(result);
});

app.get('/api/:resource', async (req, res) => {
  const Model = models[req.params.resource];
  if (!Model) return res.status(404).json({ message: 'Unknown resource' });
  const docs = await Model.find().sort({ createdAt: 1 });
  res.json(docs.map(normalizeDoc));
});

app.post('/api/:resource', async (req, res) => {
  const Model = models[req.params.resource];
  if (!Model) return res.status(404).json({ message: 'Unknown resource' });
  const protectedResources = ['countries', 'programs', 'services', 'testimonials'];
  if (protectedResources.includes(req.params.resource)) return auth(req, res, async () => {
    const doc = await Model.create(req.body);
    res.status(201).json(normalizeDoc(doc));
  });
  const doc = await Model.create(req.body);
  res.status(201).json(normalizeDoc(doc));
});

app.put('/api/:resource/:id', auth, async (req, res) => {
  const Model = models[req.params.resource];
  if (!Model) return res.status(404).json({ message: 'Unknown resource' });
  const doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!doc) return res.status(404).json({ message: 'Not found' });
  res.json(normalizeDoc(doc));
});

app.delete('/api/:resource/:id', auth, async (req, res) => {
  const Model = models[req.params.resource];
  if (!Model) return res.status(404).json({ message: 'Unknown resource' });
  const doc = await Model.findByIdAndDelete(req.params.id);
  if (!doc) return res.status(404).json({ message: 'Not found' });
  res.json({ ok: true });
});

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await seedDatabase();
    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });