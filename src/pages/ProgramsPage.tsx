import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, BookOpen, Award, Briefcase, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImage from '../Public/images/studyabroadaboutimage.jpg';


const undergraduatePrograms = [
  'BA in Management',
  'BA in Marketing',
  'BA in Management with Human Resources Management',
  'BA in Tourism and Events Management',
  'BA in Accounting and Finance',
  'BA in Management and Psychology',
  'BA Information Technology for Business',
  'Bachelor of Arts Top-Up Degree in Business and Management',
  'Undergraduate Diploma in Management',
  'Award in Foundation in Business and Management',
  'Award in Business Studies',
];

const postgraduatePrograms = [
  'Master of Business Administration (MBA)',
  'MBA in Logistics and Supply Chain Management',
  'Master of Science in Health and Social Care Management',
  'Master of Science in Management',
  'Master of Science in Marketing Management',
  'Master of Science in Management with Human Resources',
  'Master of Science in Tourism and Events Management',
  'MS in Leadership and Change Management',
  'Executive Master of Business Administration (EMBA)',
  'Postgraduate Diploma in Management (with pathways available)',
];

const diplomaPrograms = [
  'Diploma in Financial Crime Compliance & Anti-Money Laundering',
  'Undergraduate Diploma in Foundation of Medical Science',
  'Award in General Intensive English (as a Foreign Language)',
];

const doctoralPrograms = [
  'Doctor of Business Administration (DBA)',
];

function ProgramList({
  title,
  items,
  icon: Icon,
  color,
}: {
  title: string;
  items: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 h-full relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color}`} />
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
          <Icon size={26} className="text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800">{title}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="flex items-start gap-3 group"
          >
            <div className="mt-1.5 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 shadow-sm shadow-red-500/30">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <p className="text-lg md:text-[19px] leading-8 text-gray-800 group-hover:text-blue-800 transition-colors">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProgramsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[45%] right-0 w-[28rem] h-[28rem] bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      {/* Hero / intro */}
      <section className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-5 border border-red-100 shadow-sm">
              <Sparkles size={16} /> OUR PROGRAMS
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Our <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Programs</span>
            </h1>
            <p className="text-lg md:text-[20px] leading-9 text-gray-600 max-w-3xl">
              World Passport offers a diverse range of globally recognized academic programs designed to meet every student&apos;s ambition. Whether you are beginning your undergraduate journey, pursuing a master&apos;s degree, or aiming for doctoral research, our courses provide strong academic foundations and career-focused learning. With partnerships across leading international universities, we ensure access to quality education, modern learning environments, and globally respected qualifications. Each program is carefully curated to match industry demand and student goals, preparing you for success worldwide. From diplomas and foundation studies to executive and professional courses, World Passport is your trusted pathway to global opportunities, international exposure, and rewarding careers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-600/20 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={aboutImage}
                alt="Students learning together"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/45 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-950 to-blue-900 px-6 py-5">
                <div className="flex items-center gap-3 text-white">
                  <GraduationCap size={28} className="text-red-300" />
                  <span className="text-2xl md:text-3xl font-light tracking-wide">Education</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs content */}
      <section className="relative max-w-7xl mx-auto px-4 pb-24 space-y-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <ProgramList
            title="Undergraduate Programs"
            items={undergraduatePrograms}
            icon={BookOpen}
            color="from-red-600 to-red-700"
          />
          <ProgramList
            title="Postgraduate Programs"
            items={postgraduatePrograms}
            icon={Briefcase}
            color="from-blue-700 to-blue-800"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ProgramList
            title="Diploma & Foundation Courses"
            items={diplomaPrograms}
            icon={GraduationCap}
            color="from-red-500 to-red-700"
          />
          <ProgramList
            title="Doctoral Programs"
            items={doctoralPrograms}
            icon={Award}
            color="from-blue-600 to-blue-800"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center pt-8"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-white text-lg font-bold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Enquire About Programs
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
