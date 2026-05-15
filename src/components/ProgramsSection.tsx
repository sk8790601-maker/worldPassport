import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { GraduationCap, BookOpen, Award, FileText, ArrowRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  GraduationCap,
  BookOpen,
  Award,
  Certificate: FileText,
};

export default function ProgramsSection() {
  const { programs } = useData();

  return (
    <section id="programs" className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
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
            <GraduationCap size={16} /> Our Courses
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Explore Global Courses{' '}
            <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
              For Your Future
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shaping Global Careers Through Quality Education
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-red-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = iconMap[program.icon] || GraduationCap;
            const colors = [
              'from-red-600 to-red-700',
              'from-blue-700 to-blue-800',
              'from-red-500 to-red-600',
              'from-blue-600 to-blue-700',
            ];
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/60 hover:shadow-2xl hover:shadow-red-200/40 transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors[index % 4]}`} />
                
                <div className={`w-16 h-16 bg-gradient-to-br ${colors[index % 4]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {program.description}
                </p>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 text-red-600 font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
