import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Building2,
  Heart,
  ChevronUp,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: 'Home', to: '/#home' },
    { name: 'About', to: '/about' },
    { name: 'Study Abroad', to: '/study-abroad' },
    { name: 'Program', to: '/programs' },
    { name: 'Services', to: '/#services' },
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
    <footer className="relative overflow-hidden bg-[#0f2b57] text-white">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M 42 0 L 0 0 0 42" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        {/* Top red strip */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-b-2xl rounded-t-md bg-[#ef3b32] px-4 md:px-5 py-3 shadow-2xl"
        >
          <div className="grid lg:grid-cols-[250px_1fr] items-center gap-4">
            <Link to="/" className="bg-white rounded-r-2xl rounded-l-md px-4 py-3 shadow-lg max-w-[250px] border-b-4 border-red-500 block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-4 border-red-100 flex items-center justify-center bg-white shadow-sm">
                  <Globe size={23} className="text-blue-800" />
                </div>
                <div>
                  <div className="text-3xl leading-none font-black text-blue-700">WORLD</div>
                  <div className="text-3xl leading-none font-black text-red-600">PASSPORT</div>
                </div>
              </div>
            </Link>

            <div className="flex flex-wrap items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-2 text-sm md:text-base font-semibold">
                <Building2 size={18} className="flex-shrink-0" />
                <span>Kandamkulathy Towers, Ernakulam</span>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/40" />

              <a href="tel:+919205031277" className="flex items-center gap-2 text-sm md:text-base font-semibold hover:text-red-100 transition-colors">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 92050 31277</span>
              </a>

              <div className="flex items-center gap-2">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-[10px] font-bold uppercase bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    {item.text}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="px-0 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[1.35fr_.55fr_.7fr_.75fr] gap-8 lg:gap-7">
            {/* Left block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
                Guiding Dreams, Building Careers
              </h3>
              <p className="text-white/85 text-sm md:text-base leading-7 max-w-xl mb-6">
                Trusted guidance, global partnerships, and complete support for your study abroad journey.
              </p>

              <h4 className="text-lg md:text-xl font-extrabold uppercase mb-3">Our Key Strengths</h4>
              <div className="h-px w-full bg-white/25 mb-4" />

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                {keyStrengths.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-sm font-semibold text-white/90"
                  >
                    <span className="text-white/40 text-base">➜</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/become-a-partner"
                className="inline-flex items-center justify-center rounded-xl bg-[#ef3b32] px-6 py-3 text-base font-bold text-white shadow-xl hover:bg-red-500 transition-all duration-300 hover:-translate-y-1 min-w-[210px]"
              >
                Becoming a Partner
              </Link>
            </motion.div>

            {/* Useful Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-2xl font-semibold mb-3">Useful Links</h4>
              <div className="w-24 h-px bg-red-400 mb-4" />
              <ul className="space-y-2.5 text-sm md:text-base text-white/90">
                {usefulLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="flex items-start gap-3 hover:text-red-300 transition-colors"
                    >
                      <span className="mt-1 text-white/70">•</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-2xl font-semibold mb-3">Our Programs</h4>
              <div className="w-28 h-px bg-red-400 mb-4" />
              <ul className="space-y-2.5 text-sm md:text-base text-white/90">
                {programLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to} className="flex items-start gap-3 hover:text-red-300 transition-colors">
                      <span className="mt-1 text-white/70">•</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-2xl font-semibold mb-3">Contact Us</h4>
              <div className="w-24 h-px bg-red-400 mb-4" />
              <div className="space-y-4 text-sm md:text-base text-white/90 leading-7">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
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

                <a href="tel:+919205031277" className="flex items-center gap-3 hover:text-red-300 transition-colors">
                  <Phone size={17} className="flex-shrink-0" />
                  <span>+91 92050 31277</span>
                </a>

                <a href="mailto:bm@worldpassport.in" className="flex items-center gap-3 hover:text-red-300 transition-colors break-all">
                  <Mail size={17} className="flex-shrink-0" />
                  <span>bm@worldpassport.in</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/10 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm flex items-center gap-1 text-center md:text-left">
            © {currentYear} World Passport. All rights reserved. Made with{' '}
            <Heart size={14} className="text-red-500 fill-current" /> in India
          </p>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/919205031277" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 rounded-full bg-white text-gray-800 px-4 py-2 text-sm shadow-lg hover:bg-red-50 transition-colors">
              <span className="font-semibold">Need Help? Chat with us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-xl shadow-red-500/40 hover:shadow-2xl transition-all z-50"
        aria-label="Back to top"
      >
        <ChevronUp size={24} className="text-white" />
      </motion.button>
    </footer>
  );
}
