import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, GraduationCap, Phone } from 'lucide-react';
import muritiusImage from '../Public/images/muritius.jpg';

const countryNav = [
  { name: 'Malta', flag: 'https://flagcdn.com/w160/mt.png', to: '/malta' },
  { name: 'Singapore', flag: 'https://flagcdn.com/w160/sg.png', to: '/singapore' },
  { name: 'Malaysia', flag: 'https://flagcdn.com/w160/my.png', to: '/malaysia' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w160/nz.png', to: '/new-zealand' },
  { name: 'Mauritius', flag: 'https://flagcdn.com/w160/mu.png', to: '/mauritius', active: true },
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

export default function MauritiusPage() {
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
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=80"
            alt="Mauritius study destination"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162d]/95 via-[#0d2d54]/85 to-red-900/55" />

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
              Mauritius
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-lg font-semibold uppercase tracking-wide text-white/90 md:text-xl">
              <Link to="/" className="transition-colors hover:text-red-300">Home</Link>
              <ChevronRight size={18} className="text-red-300" />
              <Link to="/study-abroad" className="transition-colors hover:text-red-300">Country</Link>
              <ChevronRight size={18} className="text-red-300" />
              <span>Mauritius</span>
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
              src={muritiusImage}
              alt="Mauritius island"
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
                      : country.name === 'Malta'
                        ? 'border-red-100 bg-red-200/80 text-gray-800 hover:bg-red-100'
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
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80"
              alt="Mauritius coastline"
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
              <h2 className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">Study in Mauritius</h2>
              <div className="mb-8 h-1.5 w-16 rounded-full bg-red-500" />
              <div className="space-y-8 text-[19px] leading-10 text-gray-600 md:text-[20px]">
                <p>
                  Mauritius is fast emerging as a preferred study destination for international students seeking quality education at an affordable cost. Known for its peaceful environment, scenic beauty, and multicultural society, Mauritius offers an excellent blend of academic excellence and a high standard of living.
                </p>
                <p>
                  The country hosts several internationally recognized universities and institutions offering programs in business, information technology, hospitality & tourism, engineering, medicine, finance, and more. Many Mauritian institutions maintain strong academic partnerships with universities in the UK, France, and Australia, allowing students to earn globally accepted qualifications through collaborative or twinning programs.
                </p>
                <p>
                  Mauritius’ education system focuses on practical learning, modern training facilities, and industry-aligned curriculums, ensuring students gain strong skills and job readiness. English and French are widely spoken, creating an easy and comfortable learning environment for students from diverse backgrounds.
                </p>
                <p>
                  One of the major advantages of studying in Mauritius is its affordability. Tuition fees and living expenses are significantly lower compared to Western countries, making it an attractive option for students seeking quality education on a budget. The country also provides a safe and friendly atmosphere, with efficient public services, modern amenities, and a welcoming culture.
                </p>
                <p>
                  International students can enjoy part-time work opportunities during their studies and access various internship options in sectors like tourism, finance, and IT. After graduation, students have pathways to career opportunities within Mauritius and internationally.
                </p>
                <p>
                  Choosing Mauritius means studying in a beautiful island nation with global-standard education, affordable living, and a warm multicultural experience. With our expert support—from course guidance to visa processing—we help make your Mauritian study journey smooth and successful.
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
          <h2 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">Why Choose Mauritius?</h2>
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