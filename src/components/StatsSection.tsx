import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, GitBranch, Users, Sparkles } from 'lucide-react';

const stats = [
  { icon: Building, value: 100, suffix: '+', label: 'Partner Universities', color: 'from-red-500 to-red-700', border: 'border-red-500/30' },
  { icon: Globe, value: 3, suffix: '+', label: 'Countries', color: 'from-blue-600 to-blue-800', border: 'border-blue-500/30' },
  { icon: GitBranch, value: 8, suffix: '+', label: 'Branches', color: 'from-red-600 to-red-800', border: 'border-red-500/30' },
  { icon: Users, value: 2500, suffix: '+', label: 'Global Admissions', color: 'from-blue-700 to-blue-900', border: 'border-blue-500/30' },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles size={14} /> OUR MILESTONES
          </motion.div>
          <motion.h3 variants={fadeUpVariant} className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Proven Excellence in Numbers</motion.h3>
        </motion.div>

        {/* Stats Grid — AboutUs style */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              whileHover={{ y: -10 }}
              className={`bg-white/5 backdrop-blur-xl p-8 rounded-3xl border ${stat.border} text-center transition-all relative overflow-hidden group hover:bg-white/10`}
            >
              {/* Top accent bar on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 rounded-2xl blur-md group-hover:opacity-40 transition-opacity`} />
                <stat.icon className="w-8 h-8 relative z-10" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              
              <p className="text-slate-400 font-bold text-xs sm:text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
