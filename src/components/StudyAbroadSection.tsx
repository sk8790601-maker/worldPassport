import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowRight, Check, Globe, MapPin, Star } from 'lucide-react';

const featuredJourneyServices = [
  {
    title: 'Career Counseling & Guidance',
    description:
      'Get personalized advice to choose the right destination, course, and career pathway that matches your academic background and long-term goals.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    accent: 'from-red-500 to-red-700',
  },
  {
    title: 'Application Assistance',
    description:
      'Receive complete support for preparing documents, filling applications, tracking submissions, and meeting deadlines with confidence.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    accent: 'from-blue-600 to-blue-800',
  },
  {
    title: 'University & Course Selection',
    description:
      'Explore the best universities and academic programs based on affordability, quality education, career prospects, and global exposure.',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80',
    accent: 'from-red-600 to-red-700',
  },
];

export default function StudyAbroadSection() {
  const { countries } = useData();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCountry = countries[activeIndex];

  return (
    <section id="study-abroad" className="py-28 bg-white pt-36 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 bg-red-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-4 border border-red-100 shadow-sm"
          >
            <Globe size={16} /> OUR SERVICES
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Comprehensive Services for
            <br className="hidden sm:block" />{' '}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Your Global Education Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of study destinations with world-class education and career opportunities
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Featured Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {featuredJourneyServices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-[28px] overflow-hidden shadow-xl shadow-gray-200/60 border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-red-100/50 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-extrabold text-blue-700 mb-3 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-7 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-16"
        >
          <Link
            to="/viewallservices"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-white text-lg font-bold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Country Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {countries.map((country, index) => (
            <motion.button
              key={country.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl shadow-red-500/30'
                  : 'bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200'
              }`}
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-sm"
              />
              {country.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Country Content */}
        <AnimatePresence mode="wait">
          {activeCountry && (
            <motion.div
              key={activeCountry.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-14 items-center"
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={activeCountry.image}
                    alt={activeCountry.name}
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-red-400" />
                      <span className="text-sm font-medium">Study Destination</span>
                    </div>
                    <h3 className="text-3xl font-extrabold">{activeCountry.name}</h3>
                  </div>
                  {activeCountry.featured && (
                    <div className="absolute top-6 right-6 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                      <Star size={14} className="fill-current" /> Featured
                    </div>
                  )}
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full -z-10" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-sm font-bold text-red-600 mb-2 block uppercase tracking-wider">
                  {activeCountry.featured && '★ Featured Destination'}
                </span>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                  Study in {activeCountry.name}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {activeCountry.description}
                </p>

                {/* Services List */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {activeCountry.services.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-red-50 to-blue-50 rounded-xl border border-red-100/50"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:-translate-y-1 group text-lg"
                >
                  Apply Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
