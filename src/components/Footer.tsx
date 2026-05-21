import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, ChevronUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: 'Home', to: '/#home' },
    { name: 'About', to: '/about' },
    { name: 'Study Abroad', to: '/study-abroad' },
    { name: 'Program', to: '/programs' },
    { name: 'Services', to: '/services' },
    { name: 'Blog', to: '/#blogs' },
    { name: 'Contact Us', to: '/contact' },
  ];

  const programLinks = [
    { name: 'Undergraduate Programs', to: '/programs' },
    { name: 'Postgraduate Programs', to: '/programs' },
    { name: 'Doctoral Programs', to: '/programs' },
    { name: 'Diploma & Foundation Courses', to: '/programs' },
    { name: 'Professional & Executive Programs', to: '/programs' },
    { name: 'Language & Skill Development', to: '/programs' },
  ];

  const keyStrengths = [
    'Expert Career Guidance',
    'Affordable Study Options',
    'Global University Partnerships',
    'Pre-Departure Assistance',
    'Hassle-Free Visa Support',
    'Post-Arrival Support',
  ];

  const socialLinks = [
    { label: 'Facebook', text: 'f', href: 'https://www.facebook.com/worldpassport.in' },
    { label: 'Instagram', text: 'ig', href: 'https://www.instagram.com/worldpassport.in' },
    { label: 'LinkedIn', text: 'in', href: 'https://www.linkedin.com/search/results/all/?keywords=World%20Passport' },
    { label: 'YouTube', text: 'yt', href: 'https://www.youtube.com/results?search_query=World+Passport+study+abroad' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#020617] border-t border-white/5 text-slate-300 py-16">
      
      {/* Background Star Overlay & High-Tech Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-screen"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Cybernetic Ambient Light Blurs (About Us Aesthetics) */}
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8 z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_.55fr_.7fr_.75fr] gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Key Strengths */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="text-red-500 w-5 h-5" />
              <span className="text-xl font-extrabold tracking-wider text-white">
                WORLD <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">PASSPORT</span>
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              Guiding Dreams, Building Careers
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
              Trusted guidance, global partnerships, and complete support for your study abroad journey.
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">Our Key Strengths</h4>
              <div className="h-[2px] w-12 bg-gradient-to-r from-red-500 to-blue-500" />
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1">
                {keyStrengths.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-400 group"
                  >
                    <span className="text-red-500 group-hover:scale-125 transition-transform duration-200">➜</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/become-a-partner"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-base font-bold text-white shadow-xl hover:shadow-red-600/35 transition-all duration-300 hover:-translate-y-0.5"
              >
                Becoming a Partner
              </Link>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-white font-bold text-lg tracking-wide mb-3">Useful Links</h4>
            <div className="w-10 h-[2px] bg-blue-500 mb-4" />
            <ul className="space-y-3 text-sm md:text-base">
              {usefulLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="text-slate-400 hover:text-white hover:translate-x-1.5 flex items-center gap-2 transition-all duration-200"
                  >
                    <span className="text-slate-600 text-xs font-bold">•</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div>
            <h4 className="text-white font-bold text-lg tracking-wide mb-3">Our Programs</h4>
            <div className="w-10 h-[2px] bg-red-500 mb-4" />
            <ul className="space-y-3 text-sm md:text-base">
              {programLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="text-slate-400 hover:text-white hover:translate-x-1.5 flex items-center gap-2 transition-all duration-200"
                  >
                    <span className="text-slate-600 text-xs font-bold">•</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg tracking-wide mb-3">Contact Us</h4>
            <div className="w-10 h-[2px] bg-blue-500 mb-4" />
            <div className="space-y-4 text-sm md:text-base text-slate-400 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-red-500 flex-shrink-0" />
                <p>
                  Mahatma Gandhi Road,
                  <br />
                  KPCC Junction, Opp.
                  <br />
                  Maharaja's Ground,
                  <br />
                  Shenoys, Ernakulam,
                  <br />
                  Kerala – 682011
                </p>
              </div>

              <a href="tel:+919205031277" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Phone size={17} className="text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>+91 92050 31277</span>
              </a>

              <a href="mailto:bm@worldpassport.in" className="flex items-center gap-3 hover:text-white transition-colors group break-all">
                <Mail size={17} className="text-red-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>bm@worldpassport.in</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & micro interactive icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-slate-500 text-sm flex items-center gap-1.5 text-center md:text-left">
            © {currentYear} World Passport. All rights reserved. Made with{' '}
            <Heart size={13} className="text-red-500 fill-current animate-pulse" />
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2.5">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="w-9 h-9 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-[11px] font-extrabold uppercase text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.text}
                </motion.a>
              ))}
            </div>

            <a
              href="https://wa.me/919205031277"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 text-slate-300 px-4 py-2 hover:bg-white/10 hover:text-white transition-all shadow-md"
            >
              <span className="font-semibold text-xs uppercase tracking-wider">Need Help? Chat with us</span>
            </a>
          </div>
        </div>

      </div>

      {/* Back to top floating button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all z-50 border border-white/10"
        aria-label="Back to top"
      >
        <ChevronUp size={24} className="text-white" />
      </motion.button>
    </footer>
  );
}
