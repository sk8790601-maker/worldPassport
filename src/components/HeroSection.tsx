import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Globe, MapPin, Phone, Mail } from 'lucide-react';

const slides = [
  {
    title: 'Study in Malta, Europe\'s Rising Destination',
    subtitle: 'Affordable EU education, English-speaking environment, global exposure, and excellent career opportunities await.',
    image: 'https://worldpassport.in/wp-content/uploads/2023/11/studen-1.png',
  },
  {
    title: 'We Ensure Great Lifestyle For Your Family',
    subtitle: 'We provide a complete immigration & visa services for USA Canada & Australia for travel & education',
    image: 'https://worldpassport.in/wp-content/uploads/2023/11/slide-img-h2-2.png',
  },
  {
    title: 'Immigration & Visa Solutions the Easy Way',
    subtitle: 'We provide a complete immigration & visa services for USA Canada & Australia for travel & education',
    image: 'https://worldpassport.in/wp-content/uploads/2023/11/slide-img-h2-3-1060x758.png',
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      {/* Background with diagonal design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-red-600/20 to-transparent" />
        {/* Geometric patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        {/* Floating orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-[10%] w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-[10%] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-red-300 rounded-full text-sm font-semibold mb-6 border border-white/10"
              >
                <Globe size={16} />
                WELCOME TO World Passport
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]"
              >
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 || i === 1 ? 'text-red-400' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-blue-100/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {slides[current].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-lg"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#study-abroad"
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                >
                  Explore Programs
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
              >
                <div className="flex -space-x-3">
                  {[
                    'https://worldpassport.in/wp-content/uploads/2023/10/malta-flag-34x34.jpg',
                    'https://worldpassport.in/wp-content/uploads/2025/08/malaysia-flag-34x34.jpg',
                    'https://worldpassport.in/wp-content/uploads/2025/08/korea-420x420-1-34x34.jpg',
                  ].map((flag, i) => (
                    <motion.img
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      src={flag}
                      alt="Country"
                      className="w-10 h-10 rounded-full border-3 border-blue-900 shadow-lg"
                    />
                  ))}
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1 }}
                    className="w-10 h-10 rounded-full bg-red-500 border-3 border-blue-900 flex items-center justify-center text-xs font-bold text-white"
                  >
                    +3
                  </motion.span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-left">
                  <p className="text-white font-bold text-sm">2500+ Students</p>
                  <p className="text-blue-200 text-xs">Successfully Placed</p>
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex-1 relative"
            >
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full blur-3xl scale-75" />
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <img
                    src={slides[current].image}
                    alt="Student"
                    className="w-full max-w-lg mx-auto drop-shadow-2xl"
                  />
                </motion.div>
                
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-8 right-0 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-red-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                      <GraduationCap size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Visa Approved</p>
                      <p className="font-extrabold text-sm text-gray-900">2,500+ Students</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-16 left-0 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-blue-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Destinations</p>
                      <p className="font-extrabold text-sm text-gray-900">3+ Countries</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => setCurrent(prev => (prev - 1 + slides.length) % slides.length)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current ? 'w-10 bg-red-500' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent(prev => (prev + 1) % slides.length)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Call Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto -mb-20 z-10 px-4"
      >
        <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-gray-200/50 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Phone, label: 'Call For Consultation', value: '+91 92050 31277', color: 'from-red-500 to-red-600' },
              { icon: Mail, label: 'Email Us', value: 'bm@worldpassport.in', color: 'from-blue-600 to-blue-700' },
              { icon: MapPin, label: 'Visit Us', value: 'Kandamkulathy Tower Ernakulam, Kerala', color: 'from-red-600 to-red-700' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.label}</p>
                  <p className="font-bold text-gray-900 text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
