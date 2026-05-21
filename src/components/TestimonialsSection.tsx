import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function TestimonialsSection() {
  const { testimonials } = useData();
  const [active, setActive] = useState(0);

  const next = () => setActive(prev => (prev + 1) % testimonials.length);
  const prev = () => setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-28 relative overflow-hidden border-b border-white/5">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            <Sparkles size={16} className="text-red-400" />
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">TESTIMONIALS</span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tighter">
            Student Experiences{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">With Us</span>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
            </span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {testimonials[active] && (
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60, filter: 'blur(8px)', scale: 0.97 }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, x: -60, filter: 'blur(8px)', scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-14 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                  {/* Internal grid pattern */}
                  <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]" />
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full mix-blend-screen" />
                  
                  {/* Quote icon */}
                  <motion.div 
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 0.05 }}
                    className="absolute top-8 right-10 text-white pointer-events-none"
                  >
                    <Quote size={100} />
                  </motion.div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-red-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 italic font-medium relative z-10 border-l-2 border-white/10 pl-6">
                    "{testimonials[active].content}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/10">
                    <div className="relative">
                      <img
                        src={testimonials[active].image}
                        alt={testimonials[active].name}
                        className="w-16 h-16 rounded-full border-2 border-white/20 shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center border border-white/20">
                        <Quote size={10} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-white">{testimonials[active].name}</h4>
                      <p className="text-red-400 font-bold text-sm">{testimonials[active].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl shadow-xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10 text-white"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active ? 'w-10 bg-gradient-to-r from-red-500 to-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl shadow-xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10 text-white"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
