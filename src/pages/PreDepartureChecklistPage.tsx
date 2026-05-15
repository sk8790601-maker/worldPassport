import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Search, User, Send } from 'lucide-react';
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
    text: 'Confirm housing details-university dorms or private rentals-before departure.',
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

function Sidebar() {
  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex overflow-hidden rounded-full bg-white shadow-xl shadow-gray-200/60 border border-gray-100"
      >
        <input
          type="text"
          placeholder="Search"
          className="min-w-0 flex-1 px-7 py-5 text-gray-600 outline-none"
        />
        <button className="w-16 bg-gradient-to-r from-red-600 to-red-500 text-white flex items-center justify-center">
          <Search size={24} />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white p-8 shadow-2xl shadow-gray-200/60 border border-gray-100"
      >
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Recent Posts</h3>
        <div className="h-1 w-12 bg-red-500 rounded-full mb-7" />
        <div className="space-y-7">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
            >
              <Link to={post.to} className="group grid grid-cols-[120px_1fr] gap-5 items-center">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-24 w-full rounded-lg object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs font-bold text-red-500 mt-2 uppercase tracking-wide">{post.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </aside>
  );
}

export default function PreDepartureChecklistPage() {
  const [comment, setComment] = useState({ name: '', email: '', text: '' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleComment = (event: React.FormEvent) => {
    event.preventDefault();
    const error = validateCommentForm(comment);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success('Comment submitted successfully!');
    setComment({ name: '', email: '', text: '' });
  };

  return (
    <main className="min-h-screen bg-white pt-20 overflow-hidden">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://worldpassport.in/wp-content/uploads/2025/08/126197-740x474.jpg"
            alt="Essential Pre-Departure Checklist"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-red-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-bold uppercase tracking-widest mb-6">
              <Calendar size={16} className="text-red-300" /> August 20, 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Essential Pre-Departure Checklist for Students Going Abroad
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 leading-8 max-w-3xl">
              Preparing to study abroad is exciting, but it can feel overwhelming. A clear checklist helps you travel with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
          <article>
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://worldpassport.in/wp-content/uploads/2025/08/126197-740x474.jpg"
              alt="Students checking pre-departure documents"
              className="w-full rounded-3xl shadow-2xl shadow-gray-200/70 mb-10 object-cover max-h-[620px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-sm font-extrabold uppercase text-red-600 tracking-wider mb-2">August 20, 2025</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight mb-7">
                Essential Pre-Departure Checklist for Students Going Abroad
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h3>
              <p className="text-xl leading-9 text-gray-600">
                Preparing to study abroad is exciting, but it can feel overwhelming. A pre-departure checklist helps ensure you don’t miss anything important.
              </p>
            </motion.div>

            <div className="space-y-8">
              {checklist.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100/80"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-lg leading-8 text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Conclusion</h3>
              <p className="text-xl leading-9 text-gray-600">
                A well-prepared student experiences less stress and more excitement abroad. At World Passport, we provide pre-departure orientation and support to ensure a confident start.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-b border-t border-gray-100 py-8">
              <span className="text-2xl font-bold text-blue-800 mr-2">Share:</span>
              {['FACEBOOK', 'TWITTER', 'PINTEREST', 'LINKEDIN'].map((item) => (
                <a
                  key={item}
                  href={item === 'LINKEDIN' ? 'https://www.linkedin.com' : '#'}
                  target={item === 'LINKEDIN' ? '_blank' : undefined}
                  rel={item === 'LINKEDIN' ? 'noreferrer' : undefined}
                  className="rounded-full border border-blue-700 px-5 py-2 text-sm font-bold text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="py-8 border-b border-gray-100 flex items-center gap-6">
              <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={56} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">worldpass</h4>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleComment}
              className="mt-12"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Make a Comment</h2>
              <div className="h-1.5 w-16 rounded-full bg-red-500 mb-10" />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Name*"
                  value={comment.name}
                  onChange={(event) => setComment({ ...comment, name: event.target.value })}
                  required
                  pattern={patterns.name.source}
                  title="Use letters, spaces, apostrophes, periods or hyphens only."
                  minLength={2}
                  maxLength={80}
                  className="rounded-full bg-gray-100 px-8 py-5 outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="E-mail Address*"
                  value={comment.email}
                  onChange={(event) => setComment({ ...comment, email: event.target.value })}
                  required
                  pattern={patterns.email.source}
                  title="Enter a valid email address."
                  className="rounded-full bg-gray-100 px-8 py-5 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <textarea
                placeholder="Text*"
                value={comment.text}
                onChange={(event) => setComment({ ...comment, text: event.target.value })}
                required
                minLength={10}
                maxLength={1000}
                rows={6}
                className="w-full rounded-[32px] bg-gray-100 px-8 py-6 outline-none focus:ring-2 focus:ring-red-500 resize-none mb-8"
              />

              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-10 py-4 font-extrabold text-white shadow-xl shadow-red-500/30 hover:-translate-y-1 hover:shadow-2xl transition-all">
                Make Comment
                <Send size={18} />
              </button>
            </motion.form>
          </article>

          <Sidebar />
        </div>
      </section>
    </main>
  );
}