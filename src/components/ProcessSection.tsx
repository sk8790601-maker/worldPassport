import { motion } from 'framer-motion';
import { BookOpen, Building, FileCheck, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'IELTS Preparation and Scoring',
    description: 'We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.',
    image: 'https://worldpassport.in/wp-content/uploads/2023/10/process-1-263x263.jpg',
    step: '01',
    color: 'from-red-500 to-red-700',
    border: 'border-red-500/30'
  },
  {
    icon: Building,
    title: 'Applying For International Universities',
    description: 'We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.',
    image: 'https://worldpassport.in/wp-content/uploads/2023/10/process-2-263x263.jpg',
    step: '02',
    color: 'from-blue-600 to-blue-800',
    border: 'border-blue-500/30'
  },
  {
    icon: FileCheck,
    title: 'Assessment & Visa Submission',
    description: 'We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.',
    image: 'https://worldpassport.in/wp-content/uploads/2023/10/process-3-263x263.jpg',
    step: '03',
    color: 'from-red-600 to-red-800',
    border: 'border-red-500/30'
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

export default function ProcessSection() {
  return (
    <section className="py-28 relative overflow-hidden border-b border-white/5">
      {/* Background orb */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
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
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">WORK PROCESS</span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tighter">
            How We Do Our Visa &{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Immigration Processing</span>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
            </span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            A streamlined process to make your study abroad journey smooth and hassle-free
          </motion.p>
          <motion.div variants={fadeUpVariant} className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className="hidden md:block absolute top-[140px] left-[20%] right-[20%] h-px bg-gradient-to-r from-red-500/30 via-blue-500/30 to-red-500/30 origin-left"
          />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border ${step.border} transition-all duration-500 group-hover:bg-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]`}>
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />
                  {/* Step Number */}
                  <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-xl border border-white/20`}>
                    {step.step}
                  </div>
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20">
                    <step.icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-red-400 font-bold text-sm mt-4 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
