import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import PartnerSection from '../components/PartnerSection';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function BecomePartner() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
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
              <Handshake size={16} className="text-red-400" />
              <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">BECOME A PARTNER</span>
            </motion.div>
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-5xl mx-auto mb-8"
            >
              Partner With{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">World Passport</span>
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariant}
              className="max-w-3xl mx-auto text-xl text-slate-400 font-medium leading-relaxed"
            >
              Join our expanding global network and grow together by helping students begin successful international education journeys.
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              className="flex justify-center mt-10"
            >
              <div className="w-px h-20 bg-gradient-to-b from-blue-500 via-red-500 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        <PartnerSection />
      </main>
    </div>
  );
}
