import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Globe, MapPin, Phone, Mail, Sparkles } from 'lucide-react';

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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.8,
      duration: 8 + Math.random() * 7,
      delay: Math.random() * 6,
      drift: (Math.random() - 0.5) * 60,
    })), []);

  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden border-b border-white/5">
      {/* Dark background with rotating orbs — AboutUs style */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020617]" />
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        />
        {/* Cyber grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        {/* Floating Particles */}
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -120, 0], x: [0, p.drift, 0], opacity: [0, 0.6, 0], scale: [0, 1.4, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative max-w-7xl mx-auto px-4 py-20 lg:py-24 z-10"
      >
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
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-8 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
              >
                <Sparkles size={16} className="text-red-400" />
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">WELCOME TO WORLD PASSPORT</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tighter"
              >
                {slides[current].title.split(' ').map((word, i) => (
                  <motion.span
                    key={`${current}-${i}`}
                    initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.3 + i * 0.09, duration: 0.45, ease: [0.25,0.46,0.45,0.94] }}
                    className={`inline-block mr-[0.22em] ${i === 0 || i === 1 ? '' : ''}`}
                  >
                    {i === 0 || i === 1 ? (
                      <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">{word}</span>
                        <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-xl -z-10 rounded-full" />
                      </span>
                    ) : word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
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
                  className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-lg border border-red-500/30"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#study-abroad"
                  className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
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
                    'https://flagcdn.com/w160/sg.png',
                    'https://flagcdn.com/w160/nz.png',
                  ].map((flag, i) => (
                    <motion.img
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      src={flag}
                      alt="Country"
                      className="w-10 h-10 rounded-full border-2 border-white/20 shadow-lg object-cover"
                    />
                  ))}
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white relative z-10"
                  >
                    +1
                  </motion.span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-left">
                  <p className="text-white font-bold text-sm">2500+ Students</p>
                  <p className="text-slate-500 text-xs">Successfully Placed</p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full blur-[80px] scale-75" />
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
                
                {/* Floating cards — glassmorphic dark style */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-8 right-0 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                      <GraduationCap size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Visa Approved</p>
                      <p className="font-extrabold text-sm text-white">2,500+ Students</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-16 left-0 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Destinations</p>
                      <p className="font-extrabold text-sm text-white">3+ Countries</p>
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
            className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current ? 'w-10 bg-gradient-to-r from-red-500 to-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent(prev => (prev + 1) % slides.length)}
            className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>

      {/* Call Banner — glassmorphic dark */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto -mb-20 z-10 px-4"
      >
        <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/10">
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
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="flex items-center gap-4 p-2 rounded-xl transition-colors cursor-default"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 border border-white/10`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.label}</p>
                  <p className="font-bold text-white text-sm">{item.value}</p>
                </div>
              </motion.div>

            ))}
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
