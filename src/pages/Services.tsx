import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Users, CircleDollarSign, GraduationCap, PlaneTakeoff, FileCheck, Home, Handshake, BookOpen } from 'lucide-react';

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  const services = [
    {
      title: "Career Counseling & Guidance",
      description: "Helping you choose the right country, course, and university based on your academic goals, career plans, and personal interests.",
      icon: Users,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Financial Advice",
      description: "Expert guidance on scholarships, education loans, and budgeting tips to make your study abroad journey more affordable and stress-free.",
      icon: CircleDollarSign,
      color: "from-red-500 to-red-700"
    },
    {
      title: "University & Course Selection",
      description: "Personalized recommendations from globally recognized institutions, ensuring you find the program best suited to your ambitions and future career.",
      icon: GraduationCap,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Pre-Departure Support",
      description: "Orientation sessions, travel planning, and cultural preparation to ensure you are fully ready before flying to your destination.",
      icon: PlaneTakeoff,
      color: "from-red-400 to-red-600"
    },
    {
      title: "Application Assistance",
      description: "Step-by-step support in preparing, reviewing, and submitting strong applications to increase your chances of securing admission.",
      icon: FileCheck,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Post-Arrival Assistance",
      description: "Dedicated support with airport pickup, accommodation arrangements, and settling-in services to help you adjust smoothly abroad.",
      icon: Home,
      color: "from-red-500 to-red-700"
    },
    {
      title: "Authorized Partnerships",
      description: "Direct collaborations with trusted global universities and colleges, ensuring a transparent and reliable admission process.",
      icon: Handshake,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Visa Guidance",
      description: "Complete assistance with visa documentation, application forms, and interview preparation to make the process simple and worry-free.",
      icon: BookOpen,
      color: "from-red-400 to-red-600"
    }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  return (
    <div className="bg-[#020617] min-h-screen relative overflow-hidden pb-32 selection:bg-red-500 selection:text-white text-slate-200">
      
      {/* Background Image & Grid Overlay */}
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
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">WHAT WE DO</span>
          </motion.div>

          <motion.h1 
            variants={fadeUpVariant}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1]"
          >
            <span className="text-white">Comprehensive </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Services</span>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
            </span>
            <br />
            <span className="text-white text-3xl md:text-5xl lg:text-6xl mt-2 block">for Your Global Journey</span>
          </motion.h1>

          <motion.p 
            variants={fadeUpVariant}
            className="text-lg md:text-xl max-w-4xl mx-auto text-slate-400 font-medium leading-relaxed tracking-wide"
          >
            At <span className="text-white font-bold">World Passport</span>, we provide complete end-to-end services to make your study abroad journey smooth, transparent, and stress-free. From choosing the right course to settling into your new destination, our expert team is with you every step of the way.
          </motion.p>
          
          <motion.div
            variants={fadeUpVariant}
            className="flex justify-center mt-16"
          >
            <div className="w-px h-24 bg-gradient-to-b from-blue-500 via-red-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pt-24 z-10 relative">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.2)] group relative overflow-hidden transition-all duration-300"
              >
                {/* Top border glow */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                {/* Background glow on hover */}
                <div className={`absolute -inset-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none`} />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0`}>
                    <IconComponent size={30} className="text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 text-lg leading-relaxed font-medium group-hover:text-slate-300 transition-colors relative z-10">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </div>
  );
}
