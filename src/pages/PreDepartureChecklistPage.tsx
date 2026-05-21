import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Search, Send, User } from 'lucide-react';
import toast from 'react-hot-toast';
import { patterns, validateCommentForm } from '../utils/validation';

const recentPosts = [
  {
    title: 'Essential Pre-Departure Checklist for Students Going Abroad',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/126197-740x474.jpg',
    date: 'AUGUST 20, 2025',
    to: '/blogs/essential-pre-departure-checklist-for-students-going-abroad',
  },
  {
    title: 'Scholarships Every International Student Should Know About',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/2148499023-740x474.jpg',
    date: 'AUGUST 20, 2025',
    to: '/#blogs',
  },
  {
    title: 'How to Choose the Right Country to Study Abroad',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/32630-740x474.jpg',
    date: 'AUGUST 20, 2025',
    to: '/#blogs',
  },
];

const checklist = [
  {
    title: 'Travel Documents',
    text: 'Keep passport, visa, admission letters, and insurance ready and secure.',
  },
  {
    title: 'Finances',
    text: 'Arrange tuition payment, open an international bank account, and carry initial living expenses.',
  },
  {
    title: 'Accommodation',
    text: 'Confirm housing details—university dorms or private rentals—before departure.',
  },
  {
    title: 'Health and Safety',
    text: 'Get medical checkups, vaccinations, and health insurance coverage. Pack essential medicines.',
  },
  {
    title: 'Packing Essentials',
    text: 'Carry clothes suitable for the destination climate, gadgets, chargers, and personal items.',
  },
  {
    title: 'Cultural Preparation',
    text: 'Learn about local customs, language basics, and transportation options for smoother adjustment.',
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function Sidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg"
      >
        <input
          type="text"
          placeholder="Search articles..."
          className="min-w-0 flex-1 px-6 py-4 bg-transparent text-slate-300 placeholder-slate-500 outline-none text-sm font-medium"
        />
        <button className="px-5 bg-gradient-to-r from-red-600 to-red-500 text-white flex items-center justify-center border-l border-white/10 hover:from-red-500 hover:to-red-400 transition-all">
          <Search size={20} />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-extrabold text-white mb-2">Recent Posts</h3>
        <div className="h-0.5 w-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mb-6" />
        <div className="space-y-5">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-white/5 pb-5 last:border-b-0 last:pb-0"
            >
              <Link to={post.to} className="group grid grid-cols-[90px_1fr] gap-4 items-center">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-16 w-full rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-300 leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-[10px] font-bold text-red-400/70 mt-1.5 uppercase tracking-wider">{post.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </aside>
  );
}

const renderTitle = (title: string) => {
  const words = title.split(' ');
  if (words.length <= 1) return title;
  const lastWord = words.pop();
  const mainPart = words.join(' ');
  return (
    <>
      {mainPart}{' '}
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">
          {lastWord}
        </span>
        <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
      </span>
    </>
  );
};

export default function PreDepartureChecklistPage() {
  const [comment, setComment] = useState({ name: '', email: '', text: '' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.6,
      duration: 8 + Math.random() * 7,
      delay: Math.random() * 5,
      drift: (Math.random() - 0.5) * 40,
    })), []);

  const handleComment = (event: React.FormEvent) => {
    event.preventDefault();
    const error = validateCommentForm(comment);
    if (error) { toast.error(error); return; }
    toast.success('Comment submitted successfully!');
    setComment({ name: '', email: '', text: '' });
  };

  return (
    <div className="bg-[#020617] min-h-screen relative overflow-hidden pb-24 selection:bg-red-500 selection:text-white text-slate-200">

      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-screen"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]" />
      </div>

      {/* Orbs & Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 -left-32 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-[110px] mix-blend-screen"
        />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -90, 0], x: [0, p.drift, 0], opacity: [0, 0.45, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <main className="relative z-10 pt-24">
        {/* Hero Banner */}
        <section className="relative overflow-hidden border-b border-white/5 mb-16">
          <div className="absolute inset-0 opacity-15">
            <img
              src="https://worldpassport.in/wp-content/uploads/2025/08/126197-740x474.jpg"
              alt="Essential Pre-Departure Checklist"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/60 via-[#020617]/80 to-[#020617]" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative mx-auto max-w-4xl px-6 py-20 text-center"
          >
            <motion.div
              variants={fadeUpVariant}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest mb-6"
            >
              <Calendar size={13} className="text-red-400" />
              August 20, 2025
            </motion.div>
            <motion.h1
              variants={fadeUpVariant}
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
            >
              {renderTitle('Essential Pre-Departure Checklist for Students Going Abroad')}
            </motion.h1>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
            <article>
              {/* Cover Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[2rem] overflow-hidden border border-white/10 mb-10 shadow-2xl"
              >
                <img
                  src="https://worldpassport.in/wp-content/uploads/2025/08/126197-740x474.jpg"
                  alt="Students checking pre-departure documents"
                  className="w-full object-cover max-h-[520px]"
                />
              </motion.div>

              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10"
              >
                <p className="text-sm font-extrabold uppercase text-red-400 tracking-widest mb-3">August 20, 2025</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
                  {renderTitle('Essential Pre-Departure Checklist for Students Going Abroad')}
                </h2>
                <h3 className="text-xl font-bold text-slate-200 mb-3">Introduction</h3>
                <div className="h-0.5 w-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mb-5" />
                <p className="text-lg leading-relaxed text-slate-400 font-medium">
                  Preparing to study abroad is exciting, but it can feel overwhelming. A pre-departure checklist helps ensure you don't miss anything important.
                </p>
              </motion.div>

              {/* Checklist Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="space-y-5 mb-10"
              >
                {checklist.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUpVariant}
                    className="rounded-[1.5rem] bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 p-6 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10 rounded-[1.5rem] bg-gradient-to-br from-red-500/5 to-blue-500/5 border border-white/10 p-6"
              >
                <h3 className="text-xl font-extrabold text-white mb-3">Conclusion</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  A well-prepared student experiences less stress and more excitement abroad. At World Passport, we provide pre-departure orientation and support to ensure a confident start.
                </p>
              </motion.div>

              {/* Share */}
              <div className="flex flex-wrap items-center gap-3 border-t border-b border-white/5 py-6 mb-8">
                <span className="text-base font-bold text-slate-300 mr-1">Share:</span>
                {['FACEBOOK', 'TWITTER', 'PINTEREST', 'LINKEDIN'].map((item) => (
                  <a
                    key={item}
                    href={item === 'LINKEDIN' ? 'https://www.linkedin.com' : '#'}
                    target={item === 'LINKEDIN' ? '_blank' : undefined}
                    rel={item === 'LINKEDIN' ? 'noreferrer' : undefined}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold text-slate-400 hover:border-red-500/40 hover:text-red-400 hover:bg-red-500/5 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Author */}
              <div className="py-6 border-b border-white/5 flex items-center gap-5 mb-12">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <User size={28} className="text-slate-400" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white">worldpass</h4>
                  <p className="text-sm text-slate-500">World Passport Team</p>
                </div>
              </div>

              {/* Comment Form */}
              <motion.form
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleComment}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Make a Comment</h2>
                <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-red-500 to-blue-500 mb-8" />
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <input
                    type="text"
                    placeholder="Name *"
                    value={comment.name}
                    onChange={(e) => setComment({ ...comment, name: e.target.value })}
                    required
                    pattern={patterns.name.source}
                    title="Use letters, spaces, apostrophes, periods or hyphens only."
                    minLength={2}
                    maxLength={80}
                    className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/40 transition-all text-sm font-medium"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={comment.email}
                    onChange={(e) => setComment({ ...comment, email: e.target.value })}
                    required
                    pattern={patterns.email.source}
                    title="Enter a valid email address."
                    className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/40 transition-all text-sm font-medium"
                  />
                </div>
                <textarea
                  placeholder="Your comment *"
                  value={comment.text}
                  onChange={(e) => setComment({ ...comment, text: e.target.value })}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={5}
                  className="w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/40 resize-none mb-6 transition-all text-sm font-medium"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-3.5 font-extrabold text-white text-sm shadow-[0_0_25px_rgba(239,68,68,0.25)] hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] border border-red-500/30 transition-all duration-300"
                >
                  Post Comment
                  <Send size={16} />
                </button>
              </motion.form>
            </article>

            <Sidebar />
          </div>
        </section>
      </main>
    </div>
  );
}