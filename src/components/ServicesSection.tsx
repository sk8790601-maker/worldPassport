import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { FileText, Building2, Languages, Award, Check, ArrowRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  FileText,
  Building2,
  Languages,
  Award,
};

const featuredServices = [
  {
    title: 'Career Counseling & Guidance',
    description:
      'Get personalized support to identify the right academic path, destination, and career opportunities for your future.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    accent: 'from-red-500 to-red-700',
    text: 'text-blue-700',
  },
  {
    title: 'Application Assistance',
    description:
      'Our team helps prepare, review, and manage your applications with accuracy, timelines, and complete documentation support.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    accent: 'from-blue-600 to-blue-800',
    text: 'text-blue-700',
  },
  {
    title: 'University & Course Selection',
    description:
      'Choose the best university and course based on your profile, goals, budget, and long-term international career plans.',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80',
    accent: 'from-red-600 to-red-700',
    text: 'text-blue-700',
  },
];

export default function ServicesSection() {
  const { services } = useData();

  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-0 w-80 h-80 bg-red-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-4 border border-red-100 shadow-sm"
          >
            <FileText size={16} /> OUR SERVICES
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Comprehensive Services for
            <br className="hidden sm:block" />{' '}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Your Global Education Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end support from application to settlement
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-blue-700 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Featured service image cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {featuredServices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-[28px] overflow-hidden shadow-xl shadow-gray-200/60 border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-red-100/50">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
                </div>

                <div className="p-6 text-center">
                  <h3 className={`text-2xl font-extrabold ${item.text} mb-3 group-hover:text-red-600 transition-colors`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-7 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-16"
        >
          <a
            href="#services-list"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-white text-lg font-bold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            View All Services
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Services Grid */}
        <div id="services-list" className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FileText;
            const isRed = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden relative"
              >
                <div className={`absolute top-0 left-0 w-2 h-full ${isRed ? 'bg-gradient-to-b from-red-500 to-red-700' : 'bg-gradient-to-b from-blue-600 to-blue-800'}`} />

                <div className="pl-4">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${isRed ? 'bg-gradient-to-br from-red-500 to-red-700' : 'bg-gradient-to-br from-blue-600 to-blue-800'} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-7">{service.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className={`w-5 h-5 ${isRed ? 'bg-red-100' : 'bg-blue-100'} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <Check size={12} className={isRed ? 'text-red-600' : 'text-blue-600'} />
                            </div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
