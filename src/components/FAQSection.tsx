import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  { question: 'How do I choose the right country for my studies?', answer: 'Our expert counselors analyze your goals, interests, and budget to recommend the best country, course, and university for your future.' },
  { question: 'Does World Passport help with visa applications?', answer: 'Yes, we provide complete visa guidance, including documentation, application support, and interview preparation, to ensure a smooth approval process.' },
  { question: 'Are scholarships available for international students?', answer: 'Absolutely. We guide students in finding and applying for scholarships, financial aid, and loan options to make studying abroad affordable.' },
  { question: 'Will I get support after reaching my study destination?', answer: 'Yes, we offer post-arrival assistance, including airport pickup, accommodation support, and cultural orientation to help you settle in easily.' },
  { question: 'Can I work part-time while studying abroad?', answer: 'Most countries allow international students to work part-time during studies. Our team will guide you on rules and opportunities available.' },
  { question: 'How long has World Passport been providing services?', answer: 'World Passport has years of expertise in global education consulting, supporting thousands of students in achieving successful international careers.' }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-28 relative overflow-hidden border-b border-white/5">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block sticky top-24"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-red-600/20 to-blue-600/20 rounded-full blur-[80px] animate-pulse" />
            <div className="relative rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="relative rounded-[1.5rem] overflow-hidden group">
                <img src="https://worldpassport.in/wp-content/uploads/2025/08/girl-section-question.jpg" alt="FAQ" className="w-full transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent pointer-events-none" />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg border border-red-400/30">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-extrabold text-white">Have Questions?</p>
                  <p className="text-sm text-slate-400">We're here to help!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-sm font-bold text-red-400 tracking-widest uppercase">FAQ</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
              Questions &{' '}
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Answers</span>
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border transition-all duration-300 ${
                    openIndex === index ? 'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.1)]' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <button onClick={() => setOpenIndex(openIndex === index ? -1 : index)} className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors">
                    <span className={`font-bold pr-4 transition-colors ${openIndex === index ? 'text-red-400' : 'text-white'}`}>{faq.question}</span>
                    <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }} className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${openIndex === index ? 'bg-gradient-to-br from-red-500 to-red-600 text-white' : 'bg-white/10 text-slate-400'}`}>
                      {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                        <p className="px-5 pb-5 text-slate-400 leading-relaxed border-t border-white/5 pt-4 font-medium">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
