import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const { testimonials } = useData();
  const [active, setActive] = useState(0);

  const next = () => setActive(prev => (prev + 1) % testimonials.length);
  const prev = () => setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-white to-blue-700" />
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-4 border border-red-100"
          >
            <Star size={16} className="fill-current" /> TESTIMONIAL
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Student Experiences{' '}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-blue-700 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {testimonials[active] && (
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-red-50 via-white to-blue-50 rounded-3xl p-10 md:p-14 border border-red-100/50 shadow-xl">
                  {/* Quote icon */}
                  <div className="absolute top-8 right-10 opacity-10">
                    <Quote size={80} className="text-red-600" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-red-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic font-medium">
                    "{testimonials[active].content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testimonials[active].image}
                        alt={testimonials[active].name}
                        className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                        <Quote size={10} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-gray-900">{testimonials[active].name}</h4>
                      <p className="text-red-600 font-semibold text-sm">{testimonials[active].role}</p>
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
              className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-red-50 transition-colors border border-gray-100 text-red-600"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    i === active ? 'w-10 bg-gradient-to-r from-red-600 to-red-500' : 'w-3 bg-gray-300 hover:bg-red-300'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-red-50 transition-colors border border-gray-100 text-red-600"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
