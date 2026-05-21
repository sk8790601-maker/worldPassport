import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, MessageCircle, Sparkles } from 'lucide-react';

const blogs = [
  { id: 1, title: 'Essential Pre-Departure Checklist for Students Going Abroad', excerpt: "Preparing to study abroad is exciting, but it can feel overwhelming. A pre-departure checklist helps ensure you don't miss any critical steps...", image: 'https://worldpassport.in/wp-content/uploads/2025/08/126197-740x474.jpg', date: 'March 15, 2024', author: 'Admin', to: '/blogs/essential-pre-departure-checklist-for-students-going-abroad' },
  { id: 2, title: 'Scholarships Every International Student Should Know About', excerpt: 'One of the biggest concerns for students is funding their education. Explore various scholarship opportunities that can make your dreams affordable...', image: 'https://worldpassport.in/wp-content/uploads/2025/08/2148499023-740x474.jpg', date: 'March 12, 2024', author: 'Admin', to: '/blogs/scholarships-every-international-student-should-know-about' },
  { id: 3, title: 'How to Choose the Right Country to Study Abroad', excerpt: 'With so many options available, selecting the right study destination is crucial for your future career and personal growth...', image: 'https://worldpassport.in/wp-content/uploads/2025/08/32630-740x474.jpg', date: 'March 10, 2024', author: 'Admin', to: '/blogs/how-to-choose-the-right-country-to-study-abroad' },
  { id: 4, title: 'Top 5 Benefits of Studying Abroad', excerpt: "Studying abroad is more than just a degree—it's a life-changing journey. It builds knowledge, skills, and confidence while opening doors...", image: 'https://worldpassport.in/wp-content/uploads/2025/08/Top-5-Benefits-of-Studying-Abroad-740x474.jpg', date: 'March 08, 2024', author: 'Admin', to: '/blogs/top-5-benefits-of-studying-abroad' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function RecentBlogsSection() {
  return (
    <section id="blogs" className="py-24 relative overflow-hidden border-b border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default">
            <Sparkles size={16} className="text-red-400" />
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">RECENT BLOGS</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tighter">
            Read Our Recent Articles On <br />
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">International Education Trends</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group flex flex-col md:flex-row bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <div className="md:w-2/5 relative overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover min-h-[250px] group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5 text-red-400"><Calendar size={14} /> {blog.date}</span>
                    <span className="flex items-center gap-1.5 text-slate-500"><User size={14} /> {blog.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors line-clamp-2 leading-tight">{blog.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">{blog.excerpt}</p>
                </div>
                <Link to={blog.to} className="inline-flex items-center gap-2 text-red-400 font-extrabold text-sm uppercase tracking-wider group/btn transition-all duration-300 hover:gap-4">
                  View More
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-red-500 group-hover/btn:text-white transition-all duration-300 border border-white/10">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 text-center">
          <Link to="/study-abroad" className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] hover:-translate-y-1 transition-all duration-300 border border-red-500/30">
            Browse All Articles <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}