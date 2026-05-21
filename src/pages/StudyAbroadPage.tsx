import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowRight, ChevronLeft, ChevronRight, Check, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const featuredCountryConfig: Record<
  string,
  { label: string; image: string; previewServices: string[] }
> = {
  'New Zealand': {
    label: 'New Zealand',
    image: 'https://flagcdn.com/w320/nz.png',
    previewServices: [
      'Student Visa & University Admission',
      'Visitor Visa Guidance',
      'Business Visa Support',
      'Skill Development',
    ],
  },
  Mauritius: {
    label: 'Mauritius',
    image: 'https://flagcdn.com/w320/mu.png',
    previewServices: [
      'Student Visa & University Admission',
      'Visitor Visa Guidance',
      'Business Visa Support',
      'Skill Development',
    ],
  },
  Malta: {
    label: 'Malta',
    image: 'https://flagcdn.com/w320/mt.png',
    previewServices: [
      'Student Visa & Admission Support',
      'Visitor Visa Processing',
      'Work Visa & Internship Guidance',
      'Business Visa Applications',
    ],
  },
  Malaysia: {
    label: 'Malaysia',
    image: 'https://flagcdn.com/w320/my.png',
    previewServices: [
      'Student Visa & Admission Assistance',
      'Visitor Visa Guidance',
      'Scholarship & Financial Assistance',
      'Work Visa & Internship Opportunities',
    ],
  },
  Singapore: {
    label: 'Singapore',
    image: 'https://flagcdn.com/w320/sg.png',
    previewServices: [
      'Student Visa & University Admission',
      'Visitor Visa Guidance',
      'Business Visa Support',
      'Skill Development',
    ],
  },
};

const orderedCountries = ['New Zealand', 'Mauritius', 'Malta', 'Malaysia', 'Singapore'];

const countryRoutes: Record<string, string> = {
  'New Zealand': '/new-zealand',
  Mauritius: '/mauritius',
  Malta: '/malta',
  Malaysia: '/malaysia',
  Singapore: '/singapore',
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function StudyAbroadPage() {
  const { countries } = useData();
  const detailRef = useRef<HTMLDivElement | null>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCountryName, setSelectedCountryName] = useState('New Zealand');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const updateVisibleCards = () => {
      if (window.innerWidth >= 1200) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const studyCountries = useMemo(() => {
    const sortedCountries = [...countries].sort((a, b) => {
      const aIndex = orderedCountries.indexOf(a.name);
      const bIndex = orderedCountries.indexOf(b.name);
      if (aIndex === -1 && bIndex === -1) return a.name.localeCompare(b.name);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

    return sortedCountries.map((country) => {
        const config = featuredCountryConfig[country.name];
        return {
          ...country,
          cardImage: config?.image || country.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
          cardLabel: config?.label || country.name,
          previewServices: config?.previewServices || country.services.slice(0, 4),
        };
      })
      .filter((country) => country.name && country.description) as Array<
      (typeof countries)[number] & {
        cardImage: string;
        cardLabel: string;
        previewServices: string[];
      }
    >;
  }, [countries]);

  useEffect(() => {
    if (!studyCountries.length) return;
    const stillExists = studyCountries.some((country) => country.name === selectedCountryName);
    if (!stillExists) setSelectedCountryName(studyCountries[0].name);
  }, [studyCountries, selectedCountryName]);

  const slides = useMemo(() => {
    const chunked = [] as typeof studyCountries[];
    for (let i = 0; i < studyCountries.length; i += visibleCards) {
      chunked.push(studyCountries.slice(i, i + visibleCards));
    }
    return chunked;
  }, [studyCountries, visibleCards]);

  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [slides.length, currentSlide]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const particles = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.2 + 0.8,
      duration: 8 + Math.random() * 7,
      delay: Math.random() * 6,
      drift: (Math.random() - 0.5) * 50,
    })), []);

  const selectedCountry =
    studyCountries.find((country) => country.name === selectedCountryName) || studyCountries[0];

  const handleReadMore = (countryName: string) => {
    setSelectedCountryName(countryName);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="bg-[#020617] min-h-screen relative overflow-hidden pb-20 selection:bg-red-500 selection:text-white text-slate-200">
      {/* Background Image & Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]" />
      </div>

      {/* Rotating Blur Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] -right-[10%] w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[110px] mix-blend-screen"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[10%] w-[850px] h-[850px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
        {/* Floating Particles */}
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -100, 0], x: [0, p.drift, 0], opacity: [0, 0.5, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <main className="relative z-10 pt-20">
        <section className="relative pt-16 pb-12 md:pt-20 md:pb-16">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-6 text-center"
          >
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
            >
              <GraduationCap size={16} className="text-red-400" />
              <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">STUDY ABROAD</span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-5xl mx-auto mb-8"
            >
              Begin Your{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Global Education</span>
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
              </span>{' '}
              Journey
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="max-w-3xl mx-auto text-xl text-slate-400 font-medium leading-relaxed"
            >
              Explore trusted destinations, globally recognized opportunities, and expert guidance crafted to support your international study goals.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="flex justify-center mt-10"
            >
              <div className="w-px h-20 bg-gradient-to-b from-blue-500 via-red-500 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        <section className="relative pb-14">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6"
            >
              <div>
                <motion.p variants={fadeUpVariant} className="text-sm font-bold uppercase tracking-[0.2em] text-red-400 mb-2">Top Destinations</motion.p>
                <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-extrabold text-white">Featured Study Abroad Countries</motion.h2>
              </div>
              <motion.div variants={fadeUpVariant} className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            </motion.div>

            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.45 }}
                  className={`grid gap-8 ${visibleCards === 3 ? 'lg:grid-cols-3' : visibleCards === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}
                >
                  {slides[currentSlide]?.map((country, index) => (
                    <motion.article
                      key={country.id}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -10 }}
                      className="group bg-white/5 backdrop-blur-xl rounded-[32px] p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden"
                    >
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      
                      <div className="flex items-start gap-4 mb-6">
                        <img
                          src={country.cardImage}
                          alt={country.name}
                          className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-white/20 ring-4 ring-red-500/10"
                        />
                        <div className="pt-2">
                          <p className="text-red-400 font-bold text-lg mb-1">{country.cardLabel}</p>
                          <h3 className="text-4xl font-extrabold text-white leading-tight">{country.name}</h3>
                        </div>
                      </div>

                      <div className="space-y-3 mb-10">
                        {country.previewServices.map((service, i) => (
                          <div key={i} className="flex items-start gap-3 text-slate-400 text-[17px] leading-7 font-medium">
                            <Check size={18} className="text-red-400 mt-1 flex-shrink-0" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>

                      {countryRoutes[country.name] ? (
                        <Link
                          to={countryRoutes[country.name]}
                          className="w-full flex items-center justify-between rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-extrabold text-base px-7 py-4 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_35px_rgba(239,68,68,0.45)] transition-all duration-300 group-hover:-translate-y-0.5 border border-red-500/30"
                        >
                          <span>READ MORE</span>
                          <span className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ArrowRight size={18} />
                          </span>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleReadMore(country.name)}
                          className="w-full flex items-center justify-between rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-extrabold text-base px-7 py-4 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_35px_rgba(239,68,68,0.45)] transition-all duration-300 group-hover:-translate-y-0.5 border border-red-500/30"
                        >
                          <span>READ MORE</span>
                          <span className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ArrowRight size={18} />
                          </span>
                        </button>
                      )}
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-3 mt-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index ? 'w-10 h-2 bg-gradient-to-r from-red-500 to-blue-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {selectedCountry && (
          <section ref={detailRef} className="relative pb-24 pt-8">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                key={selectedCountry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[36px] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 text-white shadow-2xl relative"
              >
                {/* Internal background cyber grid */}
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-0 items-stretch relative z-10">
                  <div className="relative min-h-[380px] lg:min-h-full">
                    <img
                      src={selectedCountry.image}
                      alt={selectedCountry.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4 text-sm font-bold uppercase tracking-wide">
                        <MapPin size={14} className="text-red-400" /> Study Destination
                      </div>
                      <h2 className="text-4xl md:text-5xl font-extrabold text-white">Study in {selectedCountry.name}</h2>
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    <p className="text-lg md:text-xl text-slate-300 leading-9 mb-8 font-medium">
                      {selectedCountry.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {selectedCountry.services.map((service, index) => (
                        <motion.div
                          key={service}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                          className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 transition-all"
                        >
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-400/30">
                            <Check size={14} className="text-white" />
                          </div>
                          <span className="text-slate-300 text-sm md:text-base leading-7 font-bold">{service}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-extrabold shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] hover:-translate-y-1 transition-all duration-300 border border-red-500/30"
                      >
                        Apply Now
                        <ArrowRight size={18} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white text-lg font-bold hover:bg-white/10 transition-all duration-300"
                      >
                        Explore More Countries
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
