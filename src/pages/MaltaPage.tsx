import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, GraduationCap, Phone, Plus, Minus } from 'lucide-react';
import maltaImage from '../Public/images/malta.jpg';

const countryNav = [
  { name: 'Malta', flag: 'https://flagcdn.com/w160/mt.png', to: '/malta', active: true },
  { name: 'Singapore', flag: 'https://flagcdn.com/w160/sg.png', to: '/singapore' },
  { name: 'Malaysia', flag: 'https://flagcdn.com/w160/my.png', to: '/malaysia' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w160/nz.png', to: '/new-zealand' },
  { name: 'Mauritius', flag: 'https://flagcdn.com/w160/mu.png', to: '/mauritius' },
];

const reasons = [
  {
    number: '1',
    title: 'Affordable Education',
    description: 'Quality degrees at lower cost than Europe.',
  },
  {
    number: '2',
    title: 'English Advantage',
    description: 'English widely spoken and used in classrooms.',
  },
  {
    number: '3',
    title: 'Global Recognition',
    description: 'Degrees accepted and valued across the world.',
  },
  {
    number: '4',
    title: 'Safe Lifestyle',
    description: 'Student-friendly, safe, and welcoming environment.',
  },
  {
    number: '5',
    title: 'Work Opportunities',
    description: 'Part-time work options during academic studies.',
  },
  {
    number: '6',
    title: 'EU Pathways',
    description: 'Career opportunities across European Union countries.',
  },
];

const faqs = [
  {
    question: 'Is English the medium of instruction in Malta?',
    answer: 'Yes, many universities and colleges in Malta offer English-medium programs, making it convenient for international students.',
  },
  {
    question: 'Can I work while studying in Malta?',
    answer: 'Yes, students can work part-time during their studies to support living expenses.',
  },
  {
    question: 'Are Maltese degrees recognized worldwide?',
    answer: 'Yes, Maltese qualifications are internationally recognized and valued by universities, employers, and professional bodies around the world.',
  },
  {
    question: 'How affordable is studying in Malta compared to other EU countries?',
    answer: 'Malta offers quality European education at comparatively affordable tuition and living costs, making it attractive for international students.',
  },
  {
    question: 'Does World Passport provide post-arrival support in Malta?',
    answer: 'Yes, World Passport supports students with pre-departure guidance, accommodation advice, arrival assistance, and settlement support.',
  },
];

export default function MaltaPage() {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-0 h-96 w-96 rounded-full bg-red-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#07162d] via-[#122f52] to-[#ef3b32] text-white">
        <div className="absolute inset-0 opacity-35">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=80"
            alt="Malta city skyline"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162d]/95 via-[#122f52]/82 to-red-900/50" />

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
              Malta
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-lg font-semibold uppercase tracking-wide text-white/90 md:text-xl">
              <Link to="/" className="transition-colors hover:text-red-300">Home</Link>
              <ChevronRight size={18} className="text-red-300" />
              <Link to="/study-abroad" className="transition-colors hover:text-red-300">Country</Link>
              <ChevronRight size={18} className="text-red-300" />
              <span>Malta</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-red-400/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80"
              alt="Study in Malta"
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
              src={maltaImage}
              alt="Malta coastline"
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
              <h2 className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">Study in Malta</h2>
              <div className="mb-8 h-1.5 w-16 rounded-full bg-red-500" />
              <div className="space-y-8 text-[19px] leading-10 text-gray-600 md:text-[20px]">
                <p>
                  Malta is an emerging destination for international students seeking high-quality education in a vibrant European setting. Known for its affordable tuition fees and English-medium programs, Malta offers globally recognized degrees in fields such as business, IT, hospitality, and the sciences. Its universities provide excellent academic support, modern facilities, and opportunities for scholarships, making it an attractive choice for students from around the world.
                </p>
                <p>
                  Beyond academics, Malta boasts a safe, student-friendly environment with a rich cultural heritage and scenic Mediterranean lifestyle. Students can enjoy part-time work opportunities and explore career pathways across the European Union. With its welcoming community, affordable education, and international recognition, Malta provides students with a perfect balance of learning, personal growth, and cultural exposure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">Why Choose Malta?</h2>
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
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">Do you have Questions ?</h2>
          <div className="mb-12 h-1.5 w-16 rounded-full bg-red-500" />
        </motion.div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={isOpen ? 'border border-red-500 bg-white' : ''}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className={`flex w-full items-center justify-between gap-4 px-0 py-8 text-left ${isOpen ? 'px-8 text-red-600' : 'text-gray-900'}`}
                >
                  <span className="text-2xl font-semibold md:text-3xl">{faq.question}</span>
                  <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${isOpen ? 'bg-red-600 text-white' : 'bg-gray-100 text-blue-700'}`}>
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 pb-8 text-xl leading-9 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 pt-14"
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