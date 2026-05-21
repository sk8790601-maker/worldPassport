import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Handshake, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function PartnerCTASection() {
  const points = [
    'Attractive commission structure',
    'Dedicated partner manager',
    'Training and certification',
    'Regular payouts',
  ];

  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.2 + 0.7,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 6,
      drift: (Math.random() - 0.5) * 55,
    })), []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -110, 0], x: [0, p.drift, 0], opacity: [0, 0.5, 0], scale: [0, 1.3, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-sm font-bold text-red-400 tracking-widest uppercase">BECOME A PARTNER</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Grow With Our{' '}
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Global Network</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              Partner with World Passport and help students achieve their dreams of studying abroad with end-to-end support and trusted guidance.
            </motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-3 mb-8">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  variants={fadeUp}
                  whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center gap-3 text-slate-300 p-2 rounded-lg transition-colors cursor-default"
                >
                  <div className="bg-white/10 p-1.5 rounded-md text-red-400 border border-white/5">
                    <CheckCircle size={16} />
                  </div>
                  <span className="font-bold text-sm">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full mix-blend-screen" />
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold text-white mb-4">Apply as a Partner</h3>
              <p className="text-slate-400 leading-8 mb-8 font-medium">
                We've moved the complete partner application into a dedicated page for a better experience. Continue to fill your details including organization, address, and pincode.
              </p>
              <Link
                to="/become-a-partner"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-white font-bold text-lg shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] hover:-translate-y-1 transition-all duration-300 border border-red-500/30"
              >
                Open Partner Page
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
