import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Globe, Award, Users, Target, Quote, CheckCircle, Sparkles, Shield } from 'lucide-react';
import aboutImage from '../Public/images/studyabroadaboutimage.jpg'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  const stats = [
    { icon: Globe, title: "3+", desc: "Countries", color: "from-red-500 to-red-700", shadow: "shadow-red-500/20", border: "border-red-500/30" },
    { icon: Users, title: "2500+", desc: "Students Placed", color: "from-blue-600 to-blue-800", shadow: "shadow-blue-500/20", border: "border-blue-500/30" },
    { icon: Award, title: "100%", desc: "Visa Success Rate", color: "from-red-600 to-red-800", shadow: "shadow-red-500/20", border: "border-red-500/30" },
    { icon: Target, title: "15+", desc: "Years Experience", color: "from-blue-700 to-blue-900", shadow: "shadow-blue-500/20", border: "border-blue-500/30" },
  ];

  const missionVision = [
    {
      title: 'Mission',
      image: 'https://worldpassport.in/wp-content/uploads/2025/08/Girl-and-world.jpg',
      description:
        'Our mission is to guide students in every step of their study abroad journey with honesty, expertise, and care. We provide personalized counseling, admissions support, visa assistance, financial advice, and settlement guidance, ensuring every student experiences a smooth, stress-free, and rewarding international education journey leading to lifelong success.',
      align: 'left',
      color: 'from-red-500 to-red-700',
    },
    {
      title: 'Vision',
      image: 'https://worldpassport.in/wp-content/uploads/2025/08/girl-section-question.jpg',
      description:
        'Our vision is to become the most trusted global education partner, empowering students to pursue international opportunities through transparent guidance, reliable support, and strong institutional collaborations. We aim to shape confident, globally-minded professionals who contribute meaningfully to society and achieve their career aspirations worldwide.',
      align: 'right',
      color: 'from-blue-600 to-blue-800',
    },
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
    <div className="bg-[#020617] min-h-screen relative overflow-hidden pb-20 selection:bg-red-500 selection:text-white text-slate-200">
      
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
      <div className="relative pt-32 pb-32 overflow-hidden z-10 border-b border-white/5">
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
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">ABOUT OUR COMPANY</span>
          </motion.div>

          <motion.h1 
            variants={fadeUpVariant}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter leading-[1.1]"
          >
            <span className="text-white">About </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Us</span>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-sm font-bold text-blue-400 tracking-widest uppercase">
                PREMIER CONSULTANCY
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Welcome to <br/>
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">World Passport</span>
            </motion.h2>

            <motion.div variants={fadeUpVariant} className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <p className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-slate-200">
                  We are a premier education consultancy based in Kerala, dedicated to helping students achieve their dreams of studying abroad. 
                  With years of experience and a passion for global education, we simplify the complex process of international admissions.
                </p>
              </div>
              <p className="px-2">
                Our mission is to provide personalized guidance, expert counseling, and end-to-end support to make your study abroad journey smooth and successful.
              </p>
            </motion.div>

            {/* Feature lists tags */}
            <motion.div variants={staggerContainer} className="mt-10 grid sm:grid-cols-2 gap-4 px-2">
              {[
                "Global University Tie-ups",
                "Dedicated Admission Cell",
                "IELTS & Career Guidance",
                "Pre-Departure Briefings"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUpVariant}
                  whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center gap-3 text-sm font-bold text-slate-300 p-2 rounded-lg transition-colors cursor-default"
                >
                  <div className="bg-white/10 p-1.5 rounded-md text-red-400 border border-white/5 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                    <CheckCircle size={16} className="flex-shrink-0" />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            {/* Glowing backdrop shadow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-red-600/20 to-blue-600/20 rounded-full blur-[80px] animate-pulse" />
            
            <div className="relative rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="relative rounded-[1.5rem] overflow-hidden group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img 
                    src={aboutImage}
                    alt="World Passport Team" 
                    className="w-full h-[450px] sm:h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent pointer-events-none" />
                
                {/* Overlay highlight badge */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20 transform transition-all group-hover:-translate-y-2"
                >
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Sparkles size={14} /> Kerala's Most Trusted
                  </p>
                  <p className="text-xl font-extrabold text-white">Your Gateway to Global Careers</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values / Stats */}
        <div className="mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              OUR MILESTONES
            </motion.div>
            <motion.h3 variants={fadeUpVariant} className="text-3xl md:text-5xl font-extrabold text-white">Proven Excellence in Numbers</motion.h3>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={i}
                  variants={fadeUpVariant}
                  whileHover={{ y: -10 }}
                  className={`bg-white/5 backdrop-blur-xl p-8 rounded-3xl border ${item.border} text-center transition-all relative overflow-hidden group hover:bg-white/10`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  
                  <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-2xl blur-md group-hover:opacity-40 transition-opacity`} />
                    <IconComponent className="w-8 h-8 relative z-10" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 font-bold text-xs sm:text-sm tracking-wide uppercase">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Message from CEO Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white mb-32 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] group"
        >
          {/* Cyber grid internal background */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 blur-[100px] rounded-full mix-blend-screen" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen" />

          <motion.div 
            initial={{ rotate: -10, opacity: 0, x: 50 }}
            whileInView={{ rotate: 0, opacity: 0.05, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute top-8 right-8 text-white pointer-events-none"
          >
            <Quote size={140} />
          </motion.div>

          <div className="relative max-w-4xl mx-auto z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            >
              LEADERSHIP PERSPECTIVE
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-10"
            >
              Message from <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">CEO</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-2xl text-slate-300 leading-[1.8] font-medium max-w-4xl mx-auto relative"
            >
              <div className="absolute -left-6 -top-6 text-white/5">
                <Quote size={40} />
              </div>
              <p className="relative z-10 pl-6 border-l-2 border-white/10">
                At World Passport, we believe education is more than just academics – it is the gateway to opportunity, growth, and global exposure. Our mission is to empower students with the right knowledge, guidance, and support so they can step confidently into an international career. Every student’s dream is unique, and so is our approach. We ensure that each journey is handled with honesty, transparency, and personalized care. From choosing the right university to settling into a new country, we walk with our students every step of the way. As we continue to expand globally, our commitment remains the same – to be a trusted partner in shaping the future of students who aspire to study abroad. Your success is our pride, and your journey
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center p-[2px]">
                  <div className="w-full h-full bg-[#020617] rounded-full flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-extrabold text-white text-lg tracking-wide">Chief Executive Officer</p>
                  <p className="text-sm text-slate-400 font-semibold tracking-wide">World Passport Global Education</p>
                </div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-xl border border-white/10 cursor-default transition-colors"
              >
                <Shield size={18} className="text-red-400" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">Honesty & Transparency</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mb-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
            {missionVision.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 border border-white/10 relative group overflow-hidden"
              >
                {/* Cyber Hover Glow */}
                <div className={`absolute top-0 ${item.align === 'left' ? 'left-0' : 'right-0'} w-full h-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                <div className={`absolute -top-20 ${item.align === 'left' ? '-left-20' : '-right-20'} w-64 h-64 bg-gradient-to-br ${item.color} blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                
                <div className="relative flex justify-center mb-10">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative z-10"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                      />
                    </motion.div>
                    
                    {/* Decorative orbiting element */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-white/20 scale-[1.15] border-dashed"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-white/10 scale-[1.3]"
                    />

                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`absolute ${item.align === 'left' ? '-right-4' : '-left-4'} bottom-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg border border-white/20 z-20`}
                    >
                      <Sparkles className="text-white w-7 h-7" />
                    </motion.div>
                  </div>
                </div>

                <div className="text-center relative z-10">
                  <h3 className={`text-4xl font-extrabold mb-6 bg-gradient-to-r ${item.color} bg-clip-text text-transparent inline-block`}>{item.title}</h3>
                  <p className="text-[16px] leading-relaxed text-slate-300 font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
