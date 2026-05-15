import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, GraduationCap, Phone } from 'lucide-react';

const countryNav = [
  { name: 'Malta', flag: 'https://flagcdn.com/w160/mt.png', to: '/malta' },
  { name: 'Singapore', flag: 'https://flagcdn.com/w160/sg.png', to: '/singapore', active: true },
  { name: 'Malaysia', flag: 'https://flagcdn.com/w160/my.png', to: '/malaysia' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w160/nz.png', to: '/new-zealand' },
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

export default function SingaporePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-0 h-96 w-96 rounded-full bg-red-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#07162d] via-[#0d2d54] to-[#ef3b32] text-white">
        <div className="absolute inset-0 opacity-35">
          <img
            src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1800&q=80"
            alt="Singapore skyline"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162d]/95 via-[#0d2d54]/82 to-red-900/50" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 md:py-28 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.2em]">
              <GraduationCap size={16} className="text-red-300" /> Country Page
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
              Singapore
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-lg font-semibold uppercase tracking-wide text-white/90 md:text-xl">
              <Link to="/" className="transition-colors hover:text-red-300">Home</Link>
              <ChevronRight size={18} className="text-red-300" />
              <Link to="/study-abroad" className="transition-colors hover:text-red-300">Country</Link>
              <ChevronRight size={18} className="text-red-300" />
              <span>Singapore</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-cyan-400/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80"
              alt="Study in Singapore"
              className="relative mx-auto h-[360px] w-full max-w-xl rounded-[32px] border border-white/10 object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid items-stretch gap-8 lg:grid-cols-[.85fr_1.75fr]">
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
                  className={`flex items-center justify-between gap-4 rounded-2xl border px-6 py-6 shadow-lg transition-all duration-300 ${
                    country.active
                      ? 'border-red-500 bg-gradient-to-r from-red-600 to-red-500 text-white shadow-red-500/20'
                      : 'border-gray-100 bg-white text-gray-900 hover:-translate-y-1 hover:border-red-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-md"
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
            className="overflow-hidden rounded-[28px] border border-gray-100 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80"
              alt="Singapore city skyline"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-12">
        <div className="grid items-start gap-8 lg:grid-cols-[.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-28 overflow-hidden rounded-[32px] border border-gray-100 bg-gradient-to-b from-white to-[#0f5b98] shadow-2xl"
          >
            <div className="relative h-[440px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Students graduating"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f5b98] via-[#0f5b98]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-40 rounded-t-[120px] bg-[#0f5b98]" />
            </div>

            <div className="relative -mt-10 px-8 pb-10 text-center text-white">
              <h3 className="mb-8 text-5xl font-semibold">World Passport</h3>
              <div className="rounded-[28px] border-r-8 border-red-500 bg-white p-6 text-left text-gray-900 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex min-h-[72px] min-w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-500/30">
                    <Phone size={30} className="text-white" />
                  </div>
                  <div>
                    <p className="mb-1 text-2xl font-medium text-red-500">Need Help?</p>
                    <a href="tel:+919205031277" className="text-4xl font-semibold text-blue-800 transition-colors hover:text-red-600 md:text-5xl">
                      +91 92050 31277
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-9"
          >
            <div>
              <h2 className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">Study in Singapore</h2>
              <div className="mb-8 h-1.5 w-16 rounded-full bg-red-500" />
              <div className="space-y-8 text-[19px] leading-10 text-gray-600 md:text-[20px]">
                <p>
                  Singapore is one of the world’s most sought-after education hubs, known for its academic excellence, modern infrastructure, and global opportunities. As a leading Asian powerhouse, Singapore offers a unique blend of world-class education, cultural diversity, and a highly safe environment—making it a perfect destination for international students.
                </p>
                <p>
                  Home to top-ranked institutions like the National University of Singapore (NUS) and Nanyang Technological University (NTU), Singapore’s education system stands among the best globally. Students can choose from a wide range of programs including business, engineering, hospitality, IT, finance, biomedical sciences, logistics, and more. The country’s industry-driven curriculum ensures strong practical training, innovation, and global competitiveness.
                </p>
                <p>
                  One of Singapore’s biggest advantages is its strategic location and strong economic landscape. Students gain exposure to multinational companies, thriving business hubs, and internship opportunities with global brands. This provides a strong foundation for career growth and post-study employment prospects across Asia and beyond.
                </p>
                <p>
                  Singapore is known for its exceptional safety, cleanliness, efficient transportation, and multicultural lifestyle. With English as the primary language of instruction, students enjoy a smooth academic and social experience. The country also offers various scholarships and financial support options for international students.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">Why Choose Singapore?</h2>
          <div className="mb-12 h-1.5 w-16 rounded-full bg-red-500" />
        </motion.div>

        <div className="grid gap-x-20 gap-y-10 md:grid-cols-2">
          {reasons.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group flex items-start gap-6"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-50 bg-white text-3xl font-extrabold text-red-600 shadow-xl transition-transform group-hover:scale-105">
                {item.number}
              </div>
              <div>
                <h3 className="mb-3 text-3xl font-semibold text-blue-900 md:text-4xl">{item.title}</h3>
                <p className="text-xl leading-9 text-gray-600">{item.description}</p>
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
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-lg font-extrabold text-white shadow-xl shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/40"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/study-abroad"
            className="inline-flex items-center gap-2 rounded-full border border-red-200 px-8 py-4 text-lg font-bold text-red-600 transition-all duration-300 hover:bg-red-50"
          >
            Explore More Countries
          </Link>
        </motion.div>
      </section>
    </main>
  );
}