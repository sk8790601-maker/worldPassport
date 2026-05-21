import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { GraduationCap, BookOpen, Award, FileText, ArrowRight, Sparkles } from 'lucide-react';

const iconMap: Record<string, any> = {
  GraduationCap,
  BookOpen,
  Award,
  Certificate: FileText,
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function ProgramsSection() {
  const { programs } = useData();

  const colors = [
    { gradient: 'from-red-500 to-red-700', border: 'border-red-500/30', shadow: 'shadow-red-500/20' },
    { gradient: 'from-blue-600 to-blue-800', border: 'border-blue-500/30', shadow: 'shadow-blue-500/20' },
    { gradient: 'from-red-600 to-red-800', border: 'border-red-500/30', shadow: 'shadow-red-500/20' },
    { gradient: 'from-blue-700 to-blue-900', border: 'border-blue-500/30', shadow: 'shadow-blue-500/20' },
  ];

  return (
    <section id="programs" className="py-28 relative overflow-hidden border-b border-white/5">
      {/* Subtle background orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUpVariant}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
          >
            <Sparkles size={16} className="text-blue-400" />
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">OUR COURSES</span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tighter">
            Explore Global Courses{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">For Your Future</span>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
            </span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Shaping Global Careers Through Quality Education
          </motion.p>
          <motion.div variants={fadeUpVariant} className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => {
            const Icon = iconMap[program.icon] || GraduationCap;
            const c = colors[index % 4];
            return (
              <motion.div
                key={program.id}
                variants={fadeUpVariant}
                whileHover={{ y: -12 }}
                className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 border ${c.border} transition-all duration-500 relative overflow-hidden group hover:bg-white/10`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-white/10 relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-20 rounded-2xl blur-md group-hover:opacity-40 transition-opacity`} />
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6, ease: 'easeInOut' }}>
                    <Icon size={28} className="text-white relative z-10" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {program.description}
                </p>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 text-red-400 font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
