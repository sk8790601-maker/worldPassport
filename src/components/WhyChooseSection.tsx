import { motion } from 'framer-motion';
import { Globe, Users, Shield, Award, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global University Partnerships',
    description: 'We collaborate with trusted international universities across multiple destinations, offering students globally recognized education and strong career opportunities.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Users,
    title: 'Personalized Student Guidance',
    description: 'Our expert counselors provide tailored advice on country, course, and career choices, helping students make confident decisions for their future.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Shield,
    title: 'Complete End-to-End Support',
    description: 'From admission and visa guidance to pre-departure and post-arrival assistance, we ensure a smooth and stress-free study abroad journey.',
    color: 'from-red-600 to-red-700'
  }
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-red-300 rounded-full text-sm font-bold mb-4 border border-white/10"
            >
              WHY CHOOSE US
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              The Right Choice{' '}
              <span className="text-red-400">Abroad</span>
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              World Passport empowers students with trusted guidance, global university partnerships, 
              and complete support. From course selection to settlement abroad, we ensure a smooth, 
              transparent, and career-focused study journey.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-5 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl`}>
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Checkpoints */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {['Personalized counseling', 'Transparent process', 'Stress-free journey'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-sm text-white font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://worldpassport.in/wp-content/uploads/2025/08/Hue_Saturation.png"
                alt="Why Choose Us"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl" />
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 right-6 bg-white p-5 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-red-600">2500+</p>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Visa Approved</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-6 left-6 bg-white p-5 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-blue-700">3+</p>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Countries</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -left-6 bg-red-600 p-4 rounded-2xl shadow-2xl"
              >
                <Award size={28} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
