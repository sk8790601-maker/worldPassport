import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowRight, Check, Globe, MapPin, Star, Sparkles } from 'lucide-react';

const featuredJourneyServices = [
  {
    title: 'Career Counseling & Guidance',
    description:
      'Get personalized advice to choose the right destination, course, and career pathway that matches your academic background and long-term goals.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    accent: 'from-red-500 to-red-700',
    border: 'border-red-500/30',
  },
  {
    title: 'Application Assistance',
    description:
      'Receive complete support for preparing documents, filling applications, tracking submissions, and meeting deadlines with confidence.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    accent: 'from-blue-600 to-blue-800',
    border: 'border-blue-500/30',
  },
  {
    title: 'University & Course Selection',
    description:
      'Explore the best universities and academic programs based on affordability, quality education, career prospects, and global exposure.',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80',
    accent: 'from-red-600 to-red-700',
    border: 'border-red-500/30',
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function StudyAbroadSection() {
  const { countries } = useData();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCountry = countries[activeIndex];

  return (
    <section id="study-abroad" className="py-28 pt-36 relative overflow-hidden border-b border-white/5">
      {/* Subtle glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUpVariant}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
          >
            <Sparkles size={16} className="text-red-400" />
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">OUR SERVICES</span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
            Comprehensive Services for
            <br className="hidden sm:block" />{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Your Global Education Journey</span>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
            </span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Explore our wide range of study destinations with world-class education and career opportunities
          </motion.p>
          <motion.div variants={fadeUpVariant} className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Featured Service Cards — glassmorphic dark */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-10"
        >
          {featuredJourneyServices.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUpVariant}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border ${item.border} transition-all duration-500 group-hover:bg-white/10 h-full shadow-[0_0_30px_rgba(0,0,0,0.3)]`}>
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: "easeOut" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-7 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <Link
            to="/viewallservices"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-white text-lg font-bold shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] hover:-translate-y-1 transition-all duration-300 border border-red-500/30"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Country Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {countries.map((country, index) => (
            <motion.button
              key={country.id}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_25px_rgba(239,68,68,0.3)] border border-red-500/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-7 h-7 rounded-full object-cover border-2 border-white/20 shadow-sm"
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
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative"
                style={{ perspective: 1000 }}
              >
                <div className="absolute -inset-10 bg-gradient-to-tr from-red-600/20 to-blue-600/20 rounded-full blur-[80px] animate-pulse" />
                <div className="relative rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <div className="relative rounded-[1.5rem] overflow-hidden group">
                    <img
                      src={activeCountry.image}
                      alt={activeCountry.name}
                      className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={16} className="text-red-400" />
                        <span className="text-sm font-bold text-slate-300 tracking-wide">Study Destination</span>
                      </div>
                      <h3 className="text-3xl font-extrabold">{activeCountry.name}</h3>
                    </div>
                    {activeCountry.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm font-bold flex items-center gap-1 shadow-lg border border-red-400/30"
                      >
                        <Star size={14} className="fill-current" /> Featured
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-sm font-bold text-red-400 mb-2 block uppercase tracking-widest">
                  {activeCountry.featured && '★ Featured Destination'}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Study in <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">{activeCountry.name}</span>
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg font-medium">
                  {activeCountry.description}
                </p>

                {/* Services List */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {activeCountry.services.map((service: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                      className="flex items-center gap-3 p-3.5 bg-white/5 rounded-xl border border-white/10 transition-colors cursor-default"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-red-400/30">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-300 font-bold">{service}</span>
                    </motion.div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] transition-all duration-300 hover:-translate-y-1 group text-lg border border-red-500/30"
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
