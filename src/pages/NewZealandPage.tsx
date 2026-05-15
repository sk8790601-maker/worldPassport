import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  GraduationCap,
  Phone,
  ArrowRight,
} from 'lucide-react';
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

export default function NewZealandPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#07162d] via-[#0b1f3f] to-[#0c2349] text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80"
            alt="Education globe"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162d]/95 via-[#0b1f3f]/85 to-[#0c2349]/50" />

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-28 grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-sm font-bold tracking-[0.2em] uppercase mb-6">
              <GraduationCap size={16} className="text-red-300" /> Country Page
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-none">
              New Zealand
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl font-semibold uppercase tracking-wide text-white/90">
              <Link to="/" className="hover:text-red-300 transition-colors">Home</Link>
              <ChevronRight size={18} className="text-red-300" />
              <Link to="/study-abroad" className="hover:text-red-300 transition-colors">Country</Link>
              <ChevronRight size={18} className="text-red-300" />
              <span className="text-white">New Zealand</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
              alt="Global education"
              className="relative w-full max-w-xl mx-auto rounded-[32px] shadow-2xl border border-white/10 object-cover h-[360px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Destination selector + image */}
      <section className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-[.85fr_1.75fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {countryNav.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={country.to}
                  className={`flex items-center justify-between gap-4 rounded-2xl px-6 py-6 shadow-lg border transition-all duration-300 ${
                    country.active
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white border-red-500 shadow-red-500/20'
                      : country.name === 'Malta'
                      ? 'bg-red-200/80 text-gray-800 border-red-100 hover:bg-red-100'
                      : 'bg-white text-gray-900 border-gray-100 hover:border-red-200 hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md border-4 border-white"
                    />
                    <span className="text-2xl font-semibold">{country.name}</span>
                  </div>
                  <ChevronRight className={country.active ? 'text-white' : 'text-gray-500'} size={24} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] overflow-hidden shadow-2xl border border-gray-100"
          >
            <img
              src={newzealandImage}
              alt="New Zealand skyline"
              className="w-full h-full min-h-[420px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="relative max-w-7xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-[.82fr_1.18fr] gap-8 items-start">
          {/* Left support card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] overflow-hidden bg-gradient-to-b from-white to-[#0f5b98] shadow-2xl border border-gray-100 sticky top-28"
          >
            <div className="relative h-[440px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Students graduating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f5b98] via-[#0f5b98]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-[#0f5b98] rounded-t-[120px]" />
            </div>

            <div className="relative -mt-10 px-8 pb-10 text-white text-center">
              <h3 className="text-5xl font-semibold mb-8">World Passport</h3>
              <div className="bg-white rounded-[28px] p-6 text-left text-gray-900 shadow-xl border-r-8 border-red-500">
                <div className="flex items-center gap-4">
                  <div className="w-18 h-18 min-w-[72px] min-h-[72px] rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                    <Phone size={30} className="text-white" />
                  </div>
                  <div>
                    <p className="text-red-500 text-2xl font-medium mb-1">Need Help?</p>
                    <a href="tel:+919205031277" className="text-4xl md:text-5xl font-semibold text-blue-800 hover:text-red-600 transition-colors">
                      +91 92050 31277
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-9"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">Study in New Zealand</h2>
              <div className="w-16 h-1.5 bg-red-500 rounded-full mb-8" />
              <div className="space-y-8 text-[19px] md:text-[20px] leading-10 text-gray-600">
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

      {/* Why choose */}
      <section className="relative max-w-7xl mx-auto px-4 pb-24 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">Why Choose New Zealand?</h2>
          <div className="w-16 h-1.5 bg-red-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
          {reasons.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-start gap-6 group"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-xl border border-red-50 flex items-center justify-center text-red-600 text-3xl font-extrabold group-hover:scale-105 transition-transform">
                {item.number}
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-xl leading-9">{item.description}</p>
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-extrabold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/study-abroad"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-red-200 text-red-600 text-lg font-bold hover:bg-red-50 transition-all duration-300"
          >
            Explore More Countries
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
