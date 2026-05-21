import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Handshake, Send, CheckCircle, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import { useData } from '../context/DataContext';
import { patterns, validatePartnerForm } from '../utils/validation';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function PartnerSection() {
  const { addPartner } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    address: '',
    pincode: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validatePartnerForm(formData);
    if (error) {
      toast.error(error);
      return;
    }
    addPartner({
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    });
    setSubmitted(true);
    toast.success('Partner application submitted successfully!');
    setFormData({ name: '', email: '', phone: '', organization: '', address: '', pincode: '', message: '' });
  };

  const particles = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5,
      drift: (Math.random() - 0.5) * 45,
    })), []);

  return (
    <section id="partner" className="py-24 relative overflow-hidden border-b border-white/5">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        {/* Local floating particles */}
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -100, 0], x: [0, p.drift, 0], opacity: [0, 0.45, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
            >
              <Handshake size={16} className="text-red-400" />
              <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">BECOME A PARTNER</span>
            </motion.div>

            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Join Our Global{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Network</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-xl -z-10 rounded-full" />
              </span>
            </motion.h2>

            <motion.p variants={fadeUpVariant} className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
              Partner with World Passport and help students achieve their dreams of studying abroad. 
              We offer attractive commission structures and comprehensive support for our partners.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                'Attractive commission structure',
                'Marketing support and materials',
                'Dedicated partner manager',
                'Training and certification',
                'Real-time application tracking',
                'Regular payouts'
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariant}
                  whileHover={{ x: 8, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                  className="flex items-center gap-3 p-3.5 bg-white/5 border border-white/10 rounded-2xl transition-all cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 border border-red-400/30">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-slate-300 font-bold text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 text-center border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30"
                >
                  <CheckCircle size={40} className="text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Thank You!</h3>
                <p className="text-slate-400 font-medium mb-6">Your partner application has been submitted successfully. We'll contact you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all border border-red-500/30"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 space-y-4 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
                
                <h3 className="text-2xl font-extrabold text-white mb-6 relative z-10">Partner Application</h3>
                
                <div className="relative z-10 space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    pattern={patterns.name.source}
                    title="Use letters, spaces, apostrophes, periods or hyphens only."
                    minLength={2}
                    maxLength={80}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    pattern={patterns.email.source}
                    title="Enter a valid email address."
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    required
                    pattern={patterns.phone.source}
                    title="Enter exactly 10 digits."
                    minLength={10}
                    maxLength={10}
                    inputMode="numeric"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    required
                    pattern={patterns.organization.source}
                    title="Enter a valid organization name."
                    minLength={2}
                    maxLength={120}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    required
                    pattern={patterns.address.source}
                    title="Enter a valid address."
                    minLength={5}
                    maxLength={200}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                    required
                    pattern={patterns.pincode.source}
                    title="Enter a valid 6 digit pincode."
                    inputMode="numeric"
                    maxLength={6}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                  />
                  <textarea
                    placeholder="Tell us about yourself"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={3}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-lg border border-red-500/30"
                  >
                    <Send size={18} /> Submit Application
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
