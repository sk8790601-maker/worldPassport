import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, MessageCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do I choose the right country for my studies?',
    answer: 'Our expert counselors analyze your goals, interests, and budget to recommend the best country, course, and university for your future.'
  },
  {
    question: 'Does World Passport help with visa applications?',
    answer: 'Yes, we provide complete visa guidance, including documentation, application support, and interview preparation, to ensure a smooth approval process.'
  },
  {
    question: 'Are scholarships available for international students?',
    answer: 'Absolutely. We guide students in finding and applying for scholarships, financial aid, and loan options to make studying abroad affordable.'
  },
  {
    question: 'Will I get support after reaching my study destination?',
    answer: 'Yes, we offer post-arrival assistance, including airport pickup, accommodation support, and cultural orientation to help you settle in easily.'
  },
  {
    question: 'Can I work part-time while studying abroad?',
    answer: 'Most countries allow international students to work part-time during studies. Our team will guide you on rules and opportunities available.'
  },
  {
    question: 'How long has World Passport been providing services?',
    answer: 'World Passport has years of expertise in global education consulting, supporting thousands of students in achieving successful international careers.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block sticky top-24"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://worldpassport.in/wp-content/uploads/2025/08/girl-section-question.jpg"
                alt="FAQ"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-red-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-extrabold text-gray-900">Have Questions?</p>
                  <p className="text-sm text-gray-500">We're here to help!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-4 border border-red-100"
            >
              <HelpCircle size={16} /> FREQUENTLY ASKED QUESTIONS
            </motion.span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
              Questions &{' '}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                Answers
              </span>
            </h2>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 ${
                    openIndex === index ? 'border-red-200 shadow-lg shadow-red-100/50' : 'border-gray-100 hover:border-red-100'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-red-50/50 transition-colors"
                  >
                    <span className={`font-bold pr-4 transition-colors ${openIndex === index ? 'text-red-600' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        openIndex === index ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-red-50 pt-4">
                          {faq.answer}
                        </p>
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
