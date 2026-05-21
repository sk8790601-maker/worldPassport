import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, GraduationCap, Phone, ArrowRight } from 'lucide-react';
import newzealandImage from '../Public/images/newzealand.jpg';

const countryNav = [
  { name: 'Malta', flag: 'https://flagcdn.com/w160/mt.png', to: '/malta' },
  { name: 'Singapore', flag: 'https://flagcdn.com/w160/sg.png', to: '/singapore' },
  { name: 'Malaysia', flag: 'https://flagcdn.com/w160/my.png', to: '/malaysia' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w160/nz.png', to: '/new-zealand', active: true },
  { name: 'Mauritius', flag: 'https://flagcdn.com/w160/mu.png', to: '/mauritius' },
];

const reasons = [
  {
    number: '1',
    title: 'Top Universities',
    description: 'Globally ranked, innovative, and research-focused institutions.',
  },
  {
    number: '2',
    title: 'Scholarship Support',
    description: 'Wide range of financial aid for internationals.',
  },
  {
    number: '3',
    title: 'Modern Lifestyle',
    description: 'Blend of tradition and advanced modern living.',
  },
  {
    number: '4',
    title: 'Global Recognition',
    description: 'Degrees respected by employers around the world.',
  },
  {
    number: '5',
    title: 'Career Growth',
    description: 'Strong opportunities in technology, science, and business.',
  },
  {
    number: '6',
    title: 'Cultural Exposure',
    description: 'Unique cultural experiences with international community.',
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

export default function NewZealandPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5,
      drift: (Math.random() - 0.5) * 45,
    })), []);

  return (
    <div className="bg-[#020617] min-h-screen relative overflow-hidden pb-20 selection:bg-red-500 selection:text-white text-slate-200">
      {/* Fixed Background Image & Grid Overlay */}
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
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 opacity-15">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80"
              alt="New Zealand study destination"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:py-28 lg:grid-cols-[1.1fr_.9fr]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUpVariant}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
              >
                <GraduationCap size={16} className="text-red-400" />
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">NEW ZEALAND</span>
              </motion.div>
              
              <motion.h1
                variants={fadeUpVariant}
                className="text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tight mb-6"
              >
                Study In{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">New Zealand</span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-xl -z-10 rounded-full" />
                </span>
              </motion.h1>

              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap items-center gap-3 text-base sm:text-lg font-bold uppercase tracking-widest text-slate-400"
              >
                <Link to="/" className="transition-colors hover:text-red-400">Home</Link>
                <ChevronRight size={18} className="text-red-400" />
                <Link to="/study-abroad" className="transition-colors hover:text-red-400">Country</Link>
                <ChevronRight size={18} className="text-red-400" />
                <span className="text-white">New Zealand</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-full bg-red-500/10 blur-2xl pointer-events-none" />
              <div className="rounded-[2.5rem] bg-white/5 border border-white/10 p-2 backdrop-blur-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                  alt="Study in New Zealand"
                  className="rounded-[2rem] w-full h-[360px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sidebar Navigation */}
        <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_2.2fr]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-3"
            >
              {countryNav.map((country, index) => (
                <motion.div
                  key={country.name}
                  variants={fadeUpVariant}
                >
                  <Link
                    to={country.to}
                    className={`flex items-center justify-between gap-4 rounded-2xl border px-6 py-5 transition-all duration-300 ${
                      country.active
                        ? 'border-red-500 bg-gradient-to-r from-red-600 to-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.25)] border-red-500/30'
                        : 'border-white/5 bg-white/5 backdrop-blur-xl text-slate-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="h-12 w-12 rounded-full border-2 border-white/20 object-cover shadow-md"
                      />
                      <span className="text-xl font-bold">{country.name}</span>
                    </div>
                    <ChevronRight className={country.active ? 'text-white' : 'text-slate-400'} size={20} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl p-2 bg-white/5 backdrop-blur-xl"
            >
              <img
                src={newzealandImage}
                alt="New Zealand skyline"
                className="h-full min-h-[420px] w-full object-cover rounded-[2rem]"
              />
            </motion.div>
          </div>
        </section>

        {/* Info & Callout Section */}
        <section className="relative mx-auto max-w-7xl px-6 pb-16">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1.45fr]">
            {/* Left Sticky Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-28 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-2xl"
            >
              <div className="relative h-[320px] overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                  alt="Students graduating"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
              </div>

              <div className="relative px-6 pb-8 pt-6 text-center text-white">
                <h3 className="mb-6 text-3xl font-extrabold tracking-tight">World Passport</h3>
                <div className="rounded-3xl border-r-4 border-red-500 bg-[#020617]/80 p-5 text-left border border-white/5 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="flex min-h-[60px] min-w-[60px] items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-500/30">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="mb-0.5 text-lg font-bold text-red-400">Need Help?</p>
                      <a href="tel:+919205031277" className="text-2xl sm:text-3xl font-extrabold text-white transition-colors hover:text-red-400">
                        +91 92050 31277
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-4 text-4xl sm:text-5xl font-extrabold leading-tight text-white tracking-tight">Study in New Zealand</h2>
                <div className="mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    New Zealand is one of the world&apos;s most preferred study destinations, known for its high-quality education system, globally recognized universities, and exceptional student-friendly environment. With stunning landscapes, a peaceful lifestyle, and a multicultural society, it offers an ideal setting for international students to study, live, and grow.
                  </p>
                  <p>
                    New Zealand&apos;s universities consistently rank among the top in the world, offering a wide range of degree programs in engineering, business, IT, healthcare, tourism, agriculture, and more. The country&apos;s education framework emphasizes practical learning, research excellence, and industry-connected training. This ensures students graduate with strong skills, global exposure, and real-world experience.
                  </p>
                  <p>
                    International students benefit from multiple opportunities, including part-time work during studies, post-study work visas, and pathways to long-term career prospects in high-demand sectors. Many institutions also offer attractive scholarships to support deserving students.
                  </p>
                  <p>
                    New Zealand is known for its safety, welcoming culture, and quality of life. Cities like Auckland, Wellington, and Christchurch provide a perfect blend of modern amenities, natural beauty, and vibrant student communities. The cost of living and tuition fees are reasonable compared to many other Western countries, making New Zealand an affordable and rewarding study destination.
                  </p>
                  <p>
                    Studying in New Zealand opens doors to world-class education, diverse career opportunities, and a memorable global experience. With our expert guidance, we make your study journey smooth, transparent, and stress-free—from course selection to visa processing and beyond.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Why Choose New Zealand?</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group flex items-start gap-6 bg-white/5 border border-white/10 hover:border-white/20 p-6 rounded-[2rem] transition-all hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl font-extrabold text-red-400 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                  {item.number}
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-extrabold text-white group-hover:text-red-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 pt-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(239,68,68,0.25)] transition-all hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] border border-red-500/30"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/study-abroad"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-lg font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all"
            >
              Explore More Countries
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
