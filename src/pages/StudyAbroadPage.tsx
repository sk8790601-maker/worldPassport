import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowRight, ChevronLeft, ChevronRight, Check, GraduationCap, MapPin } from 'lucide-react';

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

  const selectedCountry =
    studyCountries.find((country) => country.name === selectedCountryName) || studyCountries[0];

  const handleReadMore = (countryName: string) => {
    setSelectedCountryName(countryName);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl" />
        <div className="absolute top-[35%] right-0 w-[28rem] h-[28rem] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-blue-800 rounded-full text-sm font-bold tracking-[0.2em] uppercase border border-red-100 shadow-sm mb-6"
          >
            <GraduationCap size={16} className="text-red-500" />
            Study Abroad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight max-w-5xl mx-auto"
          >
            Begin Your <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Global Education</span> Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-600 leading-8"
          >
            Explore trusted destinations, globally recognized opportunities, and expert guidance crafted to support your international study goals.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-2">Top Destinations</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Featured Study Abroad Countries</h2>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="w-12 h-12 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="w-12 h-12 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

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
                    className="group bg-white rounded-[32px] p-8 shadow-2xl shadow-gray-200/60 border border-gray-100 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-blue-700" />
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={country.cardImage}
                        alt={country.name}
                        className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white ring-4 ring-red-50"
                      />
                      <div className="pt-2">
                        <p className="text-red-500 font-semibold text-lg mb-1">{country.cardLabel}</p>
                        <h3 className="text-4xl font-semibold text-gray-900 leading-tight">{country.name}</h3>
                      </div>
                    </div>

                    <div className="space-y-3 mb-10">
                      {country.previewServices.map((service, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-600 text-[17px] leading-7">
                          <Check size={18} className="text-red-500 mt-1 flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>

                    {countryRoutes[country.name] ? (
                      <Link
                        to={countryRoutes[country.name]}
                        className="w-full flex items-center justify-between rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-extrabold text-base px-7 py-4 shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 group-hover:-translate-y-0.5"
                      >
                        <span>READ MORE</span>
                        <span className="w-11 h-11 rounded-full bg-white text-red-600 flex items-center justify-center">
                          <ArrowRight size={18} />
                        </span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleReadMore(country.name)}
                        className="w-full flex items-center justify-between rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-extrabold text-base px-7 py-4 shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 group-hover:-translate-y-0.5"
                      >
                        <span>READ MORE</span>
                        <span className="w-11 h-11 rounded-full bg-white text-red-600 flex items-center justify-center">
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
                  currentSlide === index ? 'w-10 h-3 bg-red-600' : 'w-3 h-3 bg-red-200 hover:bg-red-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedCountry && (
        <section ref={detailRef} className="relative pb-24 pt-8">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              key={selectedCountry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[36px] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 text-white shadow-2xl"
            >
              <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                <div className="relative min-h-[380px] lg:min-h-full">
                  <img
                    src={selectedCountry.image}
                    alt={selectedCountry.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-4 text-sm font-bold uppercase tracking-wide">
                      <MapPin size={14} className="text-red-300" /> Study Destination
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold">Study in {selectedCountry.name}</h2>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-lg md:text-xl text-blue-50/90 leading-9 mb-8">
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
                        className="flex items-start gap-3 bg-white/8 border border-white/10 rounded-2xl p-4"
                      >
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="text-blue-50 text-sm md:text-base leading-7">{service}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-extrabold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight size={18} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/10 text-white text-lg font-bold hover:bg-white/15 transition-all duration-300"
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
  );
}
