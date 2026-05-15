import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, MessageCircle } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Essential Pre-Departure Checklist for Students Going Abroad',
    excerpt:
      "Preparing to study abroad is exciting, but it can feel overwhelming. A pre-departure checklist helps ensure you don't miss any critical steps...",
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/126197-740x474.jpg',
    date: 'March 15, 2024',
    author: 'Admin',
    to: '/blogs/essential-pre-departure-checklist-for-students-going-abroad',
  },
  {
    id: 2,
    title: 'Scholarships Every International Student Should Know About',
    excerpt:
      'One of the biggest concerns for students is funding their education. Explore various scholarship opportunities that can make your dreams affordable...',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/2148499023-740x474.jpg',
    date: 'March 12, 2024',
    author: 'Admin',
    to: '/blogs/scholarships-every-international-student-should-know-about',
  },
  {
    id: 3,
    title: 'How to Choose the Right Country to Study Abroad',
    excerpt:
      'With so many options available, selecting the right study destination is crucial for your future career and personal growth...',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/32630-740x474.jpg',
    date: 'March 10, 2024',
    author: 'Admin',
    to: '/blogs/how-to-choose-the-right-country-to-study-abroad',
  },
  {
    id: 4,
    title: 'Top 5 Benefits of Studying Abroad',
    excerpt:
      'Studying abroad is more than just a degree—it’s a life-changing journey. It builds knowledge, skills, and confidence while opening doors...',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/Top-5-Benefits-of-Studying-Abroad-740x474.jpg',
    date: 'March 08, 2024',
    author: 'Admin',
    to: '/blogs/top-5-benefits-of-studying-abroad',
  },
];

export default function RecentBlogsSection() {
  return (
    <section id="blogs" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -ml-48 -mb-48 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-red-100"
          >
            <MessageCircle size={16} />
            Recent Blogs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Read Our Recent Articles On <br />
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              International Education Trends
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-red-100/30 transition-all duration-500"
            >
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover min-h-[250px] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5 text-red-500">
                      <Calendar size={14} /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} /> {blog.author}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors line-clamp-2 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                    {blog.excerpt}
                  </p>
                </div>

                <Link
                  to={blog.to}
                  className="inline-flex items-center gap-2 text-red-600 font-extrabold text-sm uppercase tracking-wider group/btn transition-all duration-300 hover:gap-4"
                >
                  View More
                  <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:text-white transition-all duration-300">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/study-abroad"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Browse All Articles
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}