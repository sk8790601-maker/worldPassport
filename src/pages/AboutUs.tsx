import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Users, Target, Quote, CheckCircle, Sparkles, Shield } from 'lucide-react';
import aboutImage from '../Public/images/studyabroadaboutimage.jpg';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stats = [
    { icon: Globe, title: "50+", desc: "Countries", color: "from-red-500 to-red-700", shadow: "shadow-red-500/20" },
    { icon: Users, title: "5000+", desc: "Students Placed", color: "from-blue-600 to-blue-800", shadow: "shadow-blue-500/20" },
    { icon: Award, title: "100%", desc: "Visa Success Rate", color: "from-red-600 to-red-800", shadow: "shadow-red-500/20" },
    { icon: Target, title: "15+", desc: "Years Experience", color: "from-blue-700 to-blue-900", shadow: "shadow-blue-500/20" },
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

  return (
    <div className="bg-white min-h-screen relative overflow-hidden pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-800 via-red-700 to-blue-950 text-white pt-32 pb-28 overflow-hidden">
        {/* Abstract pattern overlays */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-hero-grid)" />
          </svg>
        </div>
        
        {/* Glowing visual spheres */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 right-[10%] w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-24 left-[10%] w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-red-200 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-white/10 shadow-lg"
          >
            <Sparkles size={16} className="text-red-300" /> ABOUT OUR COMPANY
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
          >
            About <span className="bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">Us</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50/90 font-medium leading-relaxed"
          >
            Your trusted partner in shaping global educational journeys
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-gradient-to-r from-white to-red-400 mx-auto mt-8 rounded-full shadow-md"
          />
        </div>

        {/* Slanted decorative edge */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold text-blue-700 tracking-widest uppercase block mb-3">
              PREMIER CONSULTANCY
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-red-600 to-blue-800 bg-clip-text text-transparent">World Passport</span>
            </h2>
            
            <div className="w-16 h-1 bg-red-600 rounded-full mb-6" />

            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p className="bg-gradient-to-r from-red-50/50 to-transparent p-4 rounded-xl border-l-4 border-red-600 font-medium text-gray-800">
                We are a premier education consultancy based in Kerala, dedicated to helping students achieve their dreams of studying abroad. 
                With years of experience and a passion for global education, we simplify the complex process of international admissions.
              </p>
              <p>
                Our mission is to provide personalized guidance, expert counseling, and end-to-end support to make your study abroad journey smooth and successful.
              </p>
            </div>

            {/* Feature lists tags */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Global University Tie-ups",
                "Dedicated Admission Cell",
                "IELTS & Career Guidance",
                "Pre-Departure Briefings"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-2.5 text-sm font-bold text-gray-800"
                >
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glowing backdrop shadow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-blue-700 rounded-3xl opacity-20 blur-xl animate-pulse" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
               src={aboutImage}
                alt="World Passport Team" 
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/20 to-transparent" />
              
              {/* Overlay highlight badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1"> Kerala's Most Trusted</p>
                <p className="text-xl font-extrabold text-gray-900">Your Gateway to Global Careers</p>
              </div>
            </div>

            {/* Decorative dot grid pattern */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-100 rounded-2xl -z-10 opacity-70" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10 opacity-70" />
          </motion.div>
        </div>

        {/* Values / Stats */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-red-600 tracking-widest uppercase bg-red-50 px-4 py-1.5 rounded-full">
              OUR MILESTONES
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-3">Proven Excellence in Numbers</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center transition-all relative overflow-hidden group ${item.shadow}`}
                >
                  {/* Top line indicator */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`} />
                  
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 font-bold text-sm tracking-wide uppercase">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Message from CEO Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-blue-900 via-blue-950 to-red-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white mb-24 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle line background */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ceo-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ceo-grid)" />
            </svg>
          </div>

          <div className="absolute top-8 right-8 text-red-500/20 pointer-events-none">
            <Quote size={120} />
          </div>

          <div className="relative max-w-4xl mx-auto z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
              LEADERSHIP PERSPECTIVE
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
              Message from <span className="text-red-400">CEO</span>
            </h2>

            <div className="text-lg sm:text-2xl text-blue-50/95 leading-[1.7] text-center font-medium max-w-4xl mx-auto">
              <p>
                At World Passport, we believe education is more than just academics – it is the gateway to opportunity, growth, and global exposure. Our mission is to empower students with the right knowledge, guidance, and support so they can step confidently into an international career. Every student’s dream is unique, and so is our approach. We ensure that each journey is handled with honesty, transparency, and personalized care. From choosing the right university to settling into a new country, we walk with our students every step of the way. As we continue to expand globally, our commitment remains the same – to be a trusted partner in shaping the future of students who aspire to study abroad. Your success is our pride, and your journey
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-extrabold text-white text-lg">Chief Executive Officer</p>
                <p className="text-sm text-red-300 font-medium">World Passport Global Education</p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Shield size={16} className="text-red-400" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">Honesty & Transparency</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mb-24">
          <div className="hidden md:block max-w-5xl mx-auto h-px bg-dashed bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 mb-[-32px]" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {missionVision.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="relative flex justify-center mb-8">
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                      src={item.image}
                      alt={item.title}
                      className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-[10px] border-white"
                    />
                    <div className={`absolute left-1/2 -translate-x-1/2 -bottom-4 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl border-8 border-white`}>
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-4xl font-semibold text-blue-900 mb-5">{item.title}</h3>
                <p className="text-[17px] leading-9 text-gray-600 max-w-2xl mx-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
