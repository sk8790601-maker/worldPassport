import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

function ProgramList({
  title,
  items,
  icon: Icon,
  color,
  delay = 0,
}: {
  title: string;
  items: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/10 h-full relative overflow-hidden group"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-80`} />
      
      {/* Dark mode glow */}
      <div className={`absolute -inset-20 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none`} />

      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <Icon size={26} className="text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-blue-400 transition-all">{title}</h2>
      </div>
      
      <div className="space-y-4 relative z-10">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.04) }}
            className="flex items-start gap-3 group/item"
          >
            <div className="mt-1.5 w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 shadow-sm shadow-red-500/10 border border-red-500/30 group-hover/item:border-red-400 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-red-500 group-hover/item:scale-150 transition-transform" />
            </div>
            <p className="text-lg md:text-[19px] leading-8 text-slate-300 group-hover/item:text-white transition-colors font-medium">
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

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-[#020617] min-h-screen relative overflow-hidden pb-20 selection:bg-red-500 selection:text-white text-slate-200">
      
      {/* Background Image & Grid Overlay (Full Page) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-40 pb-20 overflow-hidden z-10 border-b border-white/5">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        />

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative max-w-7xl mx-auto px-6 text-center z-10"
        >
          <motion.div
            variants={fadeUpVariant}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-8 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
          >
            <Sparkles size={16} className="text-red-400" /> 
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">OUR PROGRAMS</span>
          </motion.div>

          <motion.h1 
            variants={fadeUpVariant}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter leading-[1.1]"
          >
            <span className="text-white">Our </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Programs</span>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeUpVariant}
            className="text-xl md:text-3xl max-w-3xl mx-auto text-slate-400 font-medium leading-relaxed tracking-wide"
          >
            Your trusted partner in shaping global educational journeys
          </motion.p>
          
          <motion.div
            variants={fadeUpVariant}
            className="flex justify-center mt-12"
          >
            <div className="w-px h-24 bg-gradient-to-b from-blue-500 via-red-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 z-10 relative">
        
        {/* Intro Block */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
          
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-sm font-bold text-blue-400 tracking-widest uppercase">
                DISCOVER OPPORTUNITIES
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight"
            >
              Our <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Programs</span>
            </motion.h2>
            
            <motion.div 
              variants={fadeUpVariant}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              <p className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-lg md:text-[19px] leading-relaxed text-slate-300">
                World Passport offers a diverse range of globally recognized academic programs designed to meet every student&apos;s ambition. Whether you are beginning your undergraduate journey, pursuing a master&apos;s degree, or aiming for doctoral research, our courses provide strong academic foundations and career-focused learning. With partnerships across leading international universities, we ensure access to quality education, modern learning environments, and globally respected qualifications. Each program is carefully curated to match industry demand and student goals, preparing you for success worldwide. From diplomas and foundation studies to executive and professional courses, World Passport is your trusted pathway to global opportunities, international exposure, and rewarding careers.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-1000"
          >
            {/* Glowing backdrop shadow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-red-600/20 to-blue-600/20 rounded-full blur-[80px] animate-pulse" />
            
            <div className="relative rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-[1.5rem] overflow-hidden group"
              >
                <img
                  src={aboutImage}
                  alt="Students learning together"
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent pointer-events-none" />
                
                {/* Image Label Banner (Education) */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border border-white/20 transform transition-all group-hover:-translate-y-2 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                    <GraduationCap size={20} className="text-blue-400" />
                  </div>
                  <span className="text-xl md:text-2xl font-bold tracking-wide text-white">Education</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Programs Grid Content */}
        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ProgramList
              title="Undergraduate Programs"
              items={undergraduatePrograms}
              icon={BookOpen}
              color="from-red-500 to-red-700"
              delay={0.1}
            />
            <ProgramList
              title="Postgraduate Programs"
              items={postgraduatePrograms}
              icon={Briefcase}
              color="from-blue-600 to-blue-800"
              delay={0.2}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ProgramList
              title="Diploma & Foundation"
              items={diplomaPrograms}
              icon={GraduationCap}
              color="from-red-500 to-red-700"
              delay={0.1}
            />
            <ProgramList
              title="Doctoral Programs"
              items={doctoralPrograms}
              icon={Award}
              color="from-blue-600 to-blue-800"
              delay={0.2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center pt-16"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-12 py-5 text-white text-xl font-bold shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.5)] transition-all duration-300 overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10">Enquire About Programs</span>
              <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
