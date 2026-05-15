import { motion } from 'framer-motion';
import { BookOpen, Building, FileCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'IELTS Preparation and Scoring',
    description: 'We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.',
    image: 'https://worldpassport.in/wp-content/uploads/2023/10/process-1-263x263.jpg',
    step: '01',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Building,
    title: 'Applying For International Universities',
    description: 'We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.',
    image: 'https://worldpassport.in/wp-content/uploads/2023/10/process-2-263x263.jpg',
    step: '02',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: FileCheck,
    title: 'Assessment & Visa Submission',
    description: 'We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.',
    image: 'https://worldpassport.in/wp-content/uploads/2023/10/process-3-263x263.jpg',
    step: '03',
    color: 'from-red-600 to-red-700'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-4 border border-blue-100"
          >
            WORK PROCESS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How We Do Our Visa &{' '}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Immigration Processing
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined process to make your study abroad journey smooth and hassle-free
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-blue-700 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[140px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-red-200 via-blue-200 to-red-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Step Number */}
                  <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-xl`}>
                    {step.step}
                  </div>
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <step.icon size={20} className="text-red-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-red-600 font-bold text-sm mt-4 group-hover:gap-3 transition-all">
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
