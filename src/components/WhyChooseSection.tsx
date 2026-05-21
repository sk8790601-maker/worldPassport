import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Shield, Award, CheckCircle, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global University Partnerships',
    description: 'We collaborate with trusted international universities across multiple destinations, offering students globally recognized education and strong career opportunities.',
    color: 'from-red-500 to-red-700'
  },
  {
    icon: Users,
    title: 'Personalized Student Guidance',
    description: 'Our expert counselors provide tailored advice on country, course, and career choices, helping students make confident decisions for their future.',
    color: 'from-blue-600 to-blue-800'
  },
  {
    icon: Shield,
    title: 'Complete End-to-End Support',
    description: 'From admission and visa guidance to pre-departure and post-arrival assistance, we ensure a smooth and stress-free study abroad journey.',
    color: 'from-red-600 to-red-800'
  }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function WhyChooseSection() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      duration: 9 + Math.random() * 7,
      delay: Math.random() * 7,
      drift: (Math.random() - 0.5) * 50,
    })), []);

  return (
    <section id="why-choose" className="py-28 relative overflow-hidden border-b border-white/5">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        {/* Particles */}
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -100, 0], x: [0, p.drift, 0], opacity: [0, 0.55, 0], scale: [0, 1.3, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {/* Cyber grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-sm font-bold text-red-400 tracking-widest uppercase">WHY CHOOSE US</span>
            </motion.div>

            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              The Right Choice{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Abroad</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-xl -z-10 rounded-full" />
              </span>
            </motion.h2>
            
            <motion.p variants={fadeUpVariant} className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
              World Passport empowers students with trusted guidance, global university partnerships, 
              and complete support. From course selection to settlement abroad, we ensure a smooth, 
              transparent, and career-focused study journey.
            </motion.p>

            {/* Features */}
            <motion.div variants={staggerContainer} className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="flex gap-5 group p-3 rounded-2xl transition-colors cursor-default"
                >
                  <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-white/10 relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 rounded-2xl blur-md group-hover:opacity-40 transition-opacity`} />
                    <feature.icon size={24} className="text-white relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Checkpoints */}
            <motion.div
              variants={staggerContainer}
              className="mt-8 flex flex-wrap gap-4"
            >
              {['Personalized counseling', 'Transparent process', 'Stress-free journey'].map((item, i) => (
                <motion.div key={i} variants={fadeUpVariant} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 cursor-default">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-sm text-white font-bold">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image — AboutUs framed style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-red-600/20 to-blue-600/20 rounded-full blur-[80px] animate-pulse" />
            <div className="relative rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="relative rounded-[1.5rem] overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: "easeOut" }} className="w-full h-full">
                  <img
                    src="https://worldpassport.in/wp-content/uploads/2025/08/Hue_Saturation.png"
                    alt="Why Choose Us"
                    className="w-full rounded-[1.5rem] transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent pointer-events-none" />
                
                {/* Floating Stats — glassmorphic */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  animate={{ y: [0, -12, 0] }}
                  className="absolute top-6 right-6 bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/20"
                >
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-white">2500+</p>
                    <p className="text-xs text-slate-400 font-bold mt-1 tracking-wide uppercase">Visa Approved</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  animate={{ y: [0, -10, 0] }}
                  className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/20"
                >
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-white">3+</p>
                    <p className="text-xs text-slate-400 font-bold mt-1 tracking-wide uppercase">Countries</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -left-6 bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-2xl border border-red-400/30"
                >
                  <Award size={28} className="text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
