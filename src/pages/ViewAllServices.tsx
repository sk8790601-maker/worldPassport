import { useEffect, useMemo } from 'react';
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
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Career Counseling & Guidance',
    description:
      'Helping you choose the right country, course, and university based on your academic goals, career plans, and personal interests.',
    icon: Users,
    color: 'from-red-500 to-red-700',
    border: 'border-red-500/30'
  },
  {
    title: 'Financial Advice',
    description:
      'Expert guidance on scholarships, education loans, and budgeting tips to make your study abroad journey more affordable and stress-free.',
    icon: Wallet,
    color: 'from-blue-600 to-blue-800',
    border: 'border-blue-500/30'
  },
  {
    title: 'Authorized Partnerships',
    description:
      'Direct collaborations with trusted global universities and colleges, ensuring a transparent and reliable admission process.',
    icon: Handshake,
    color: 'from-red-600 to-red-800',
    border: 'border-red-500/30'
  },
  {
    title: 'Visa Guidance',
    description:
      'Complete assistance with visa documentation, application forms, and interview preparation to make the process simple and worry-free.',
    icon: ShieldCheck,
    color: 'from-blue-700 to-blue-900',
    border: 'border-blue-500/30'
  },
  {
    title: 'University & Course Selection',
    description:
      'Personalized recommendations from globally recognized institutions, ensuring you find the program best suited to your ambitions and future career.',
    icon: GraduationCap,
    color: 'from-red-500 to-red-700',
    border: 'border-red-500/30'
  },
  {
    title: 'Pre-Departure Support',
    description:
      'Orientation sessions, travel planning, and cultural preparation to ensure you are fully ready before flying to your destination.',
    icon: Plane,
    color: 'from-blue-600 to-blue-800',
    border: 'border-blue-500/30'
  },
  {
    title: 'Application Assistance',
    description:
      'Step-by-step support in preparing, reviewing, and submitting strong applications to increase your chances of securing admission.',
    icon: FileText,
    color: 'from-red-600 to-red-800',
    border: 'border-red-500/30'
  },
  {
    title: 'Post-Arrival Assistance',
    description:
      'Dedicated support with airport pickup, accommodation arrangements, and settling-in services to help you adjust smoothly abroad.',
    icon: House,
    color: 'from-blue-700 to-blue-900',
    border: 'border-blue-500/30'
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

export default function ViewAllServices() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
              <Globe size={16} className="text-red-400" />
              <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">ALL SERVICES</span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-5xl mx-auto mb-8"
            >
              Comprehensive Services for Your{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Global Journey</span>
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="max-w-4xl mx-auto text-xl text-slate-400 font-medium leading-relaxed"
            >
              At <span className="font-bold text-white">World Passport</span>, we provide complete end-to-end services to make your study abroad journey smooth, transparent, and stress-free. From choosing the right course to settling into your new destination, our expert team is with you every step of the way.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="flex justify-center mt-10"
            >
              <div className="w-px h-20 bg-gradient-to-b from-blue-500 via-red-500 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Services List */}
        <section className="relative max-w-7xl mx-auto px-6 py-12">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUpVariant}
                  whileHover={{ y: -8 }}
                  className={`group bg-white/5 backdrop-blur-xl border ${service.border} rounded-[2.5rem] p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden`}
                >
                  {/* Top accent scale line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl blur-md group-hover:opacity-40 transition-opacity`} />
                      <Icon size={28} className="text-white relative z-10" />
                    </div>
                  </div>

                  <div className="pt-1 text-center sm:text-left">
                    <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-20"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-white text-lg font-bold shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] hover:-translate-y-1 transition-all duration-300 border border-red-500/30"
            >
              Get Started Today
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
