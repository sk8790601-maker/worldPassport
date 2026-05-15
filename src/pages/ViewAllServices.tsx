import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Users,
  Wallet,
  Handshake,
  ShieldCheck,
  GraduationCap,
  Plane,
  FileText,
  House,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Career Counseling & Guidance',
    description:
      'Helping you choose the right country, course, and university based on your academic goals, career plans, and personal interests.',
    icon: Users,
  },
  {
    title: 'Financial Advice',
    description:
      'Expert guidance on scholarships, education loans, and budgeting tips to make your study abroad journey more affordable and stress-free.',
    icon: Wallet,
  },
  {
    title: 'Authorized Partnerships',
    description:
      'Direct collaborations with trusted global universities and colleges, ensuring a transparent and reliable admission process.',
    icon: Handshake,
  },
  {
    title: 'Visa Guidance',
    description:
      'Complete assistance with visa documentation, application forms, and interview preparation to make the process simple and worry-free.',
    icon: ShieldCheck,
  },
  {
    title: 'University & Course Selection',
    description:
      'Personalized recommendations from globally recognized institutions, ensuring you find the program best suited to your ambitions and future career.',
    icon: GraduationCap,
  },
  {
    title: 'Pre-Departure Support',
    description:
      'Orientation sessions, travel planning, and cultural preparation to ensure you are fully ready before flying to your destination.',
    icon: Plane,
  },
  {
    title: 'Application Assistance',
    description:
      'Step-by-step support in preparing, reviewing, and submitting strong applications to increase your chances of securing admission.',
    icon: FileText,
  },
  {
    title: 'Post-Arrival Assistance',
    description:
      'Dedicated support with airport pickup, accommodation arrangements, and settling-in services to help you adjust smoothly abroad.',
    icon: House,
  },
];

export default function ViewAllServices() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-80 h-80 bg-red-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[35%] right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      {/* Hero image section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
            alt="Global education"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/85 to-red-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/15 rounded-full text-sm font-bold tracking-wide mb-6"
          >
            <Globe size={16} className="text-red-300" /> VIEW ALL SERVICES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-5"
          >
            Comprehensive Services for Your{' '}
            <span className="text-red-300">Global Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-5xl mx-auto text-lg md:text-2xl text-blue-50/90 leading-relaxed"
          >
            At <span className="font-bold text-white">World Passport</span>, we provide complete end-to-end services to make your study abroad journey smooth, transparent, and stress-free. From choosing the right course to settling into your new destination, our expert team is with you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="group flex items-start gap-6"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-xl shadow-red-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon size={34} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="pt-1">
                  <h3 className="text-3xl font-semibold text-blue-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-9 max-w-xl">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-white text-lg font-bold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
