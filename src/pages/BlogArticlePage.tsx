import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Send, User } from 'lucide-react';
import toast from 'react-hot-toast';
import { patterns, validateCommentForm } from '../utils/validation';

export interface BlogArticle {
  title: string;
  date: string;
  image: string;
  intro: string;
  sections: Array<{ title: string; text: string }>;
  conclusion: string;
}

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
    to: '/blogs/scholarships-every-international-student-should-know-about',
  },
  {
    title: 'How to Choose the Right Country to Study Abroad',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/32630-740x474.jpg',
    date: 'AUGUST 20, 2025',
    to: '/blogs/how-to-choose-the-right-country-to-study-abroad',
  },
  {
    title: 'Top 5 Benefits of Studying Abroad',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/Top-5-Benefits-of-Studying-Abroad-740x474.jpg',
    date: 'AUGUST 20, 2025',
    to: '/blogs/top-5-benefits-of-studying-abroad',
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
        <input type="text" placeholder="Search" className="min-w-0 flex-1 px-7 py-5 text-gray-600 outline-none" />
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
                <img src={post.image} alt={post.title} className="h-24 w-full rounded-lg object-cover shadow-md group-hover:scale-105 transition-transform duration-300" />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors">{post.title}</h4>
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

export default function BlogArticlePage({ article }: { article: BlogArticle }) {
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
      <section className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
          <article>
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              src={article.image}
              alt={article.title}
              className="w-full rounded-3xl shadow-2xl shadow-gray-200/70 mb-10 object-cover max-h-[620px]"
            />

            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
              <p className="text-sm font-extrabold uppercase text-red-600 tracking-wider mb-2">{article.date}</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight mb-7">{article.title}</h1>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-xl leading-9 text-gray-600">{article.intro}</p>
            </motion.div>

            <div className="space-y-8">
              {article.sections.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100/80"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{index + 1}. {item.title}</h3>
                  <p className="text-lg leading-8 text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Conclusion</h3>
              <p className="text-xl leading-9 text-gray-600">{article.conclusion}</p>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-b border-t border-gray-100 py-8">
              <span className="text-2xl font-bold text-blue-800 mr-2">Share:</span>
              {['FACEBOOK', 'TWITTER', 'PINTEREST', 'LINKEDIN'].map((item) => (
                <a key={item} href={item === 'LINKEDIN' ? 'https://www.linkedin.com' : '#'} target={item === 'LINKEDIN' ? '_blank' : undefined} rel={item === 'LINKEDIN' ? 'noreferrer' : undefined} className="rounded-full border border-blue-700 px-5 py-2 text-sm font-bold text-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
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

            <motion.form initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleComment} className="mt-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Make a Comment</h2>
              <div className="h-1.5 w-16 rounded-full bg-red-500 mb-10" />
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="Name*" value={comment.name} onChange={(event) => setComment({ ...comment, name: event.target.value })} required pattern={patterns.name.source} minLength={2} maxLength={80} title="Use letters, spaces, apostrophes, periods or hyphens only." className="rounded-full bg-gray-100 px-8 py-5 outline-none focus:ring-2 focus:ring-red-500" />
                <input type="email" placeholder="E-mail Address*" value={comment.email} onChange={(event) => setComment({ ...comment, email: event.target.value })} required pattern={patterns.email.source} title="Enter a valid email address." className="rounded-full bg-gray-100 px-8 py-5 outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <textarea placeholder="Text*" value={comment.text} onChange={(event) => setComment({ ...comment, text: event.target.value })} required minLength={10} maxLength={1000} rows={6} className="w-full rounded-[32px] bg-gray-100 px-8 py-6 outline-none focus:ring-2 focus:ring-red-500 resize-none mb-8" />
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