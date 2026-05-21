import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const FacebookIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Study Abroad', href: '/study-abroad' },
  { name: 'Programs', href: '/programs' },
  { name: 'Services', href: '/services' },
  { name: 'Partner', href: '/become-a-partner' },
  { name: 'Contact', href: '/contact' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
};

const linkVariant = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const mobileItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Info Bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block relative z-50 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 text-slate-400 text-xs py-2.5"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a
              href="mailto:bm@worldpassport.in"
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors duration-300"
            >
              <Mail size={12} className="text-red-400/70" />
              bm@worldpassport.in
            </a>
            <a
              href="tel:+919205031277"
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors duration-300"
            >
              <Phone size={12} className="text-red-400/70" />
              +91 92050 31277
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-red-400/70" />
              <span>Kandamkulathy Tower Ernakulam, Kerala</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-500 text-xs">Follow Us:</span>
            <div className="flex gap-1.5">
              {[
                { icon: (props: any) => <FacebookIcon {...props} />, href: 'https://www.facebook.com/worldpassport.in', label: 'Facebook' },
                { icon: (props: any) => <InstagramIcon {...props} />, href: 'https://www.instagram.com/worldpassport.in', label: 'Instagram' },
                { icon: (props: any) => <TwitterIcon {...props} />, href: 'https://twitter.com', label: 'Twitter' },
                { icon: (props: any) => <LinkedinIcon {...props} />, href: 'https://www.linkedin.com/search/results/all/?keywords=World%20Passport', label: 'LinkedIn' },
                { icon: () => <span className="font-extrabold text-[11px] leading-none -mt-[0.5px] select-none">Bē</span>, href: 'https://www.behance.net', label: 'Behance' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-6 h-6 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400 transition-all duration-300 text-slate-300"
                    title={s.label}
                  >
                    <Icon size={12} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#020617]/95 backdrop-blur-2xl shadow-[0_4px_60px_rgba(0,0,0,0.5)] border-b border-white/10'
            : 'bg-[#020617]/80 backdrop-blur-xl border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-11 h-11 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30 border border-red-500/30"
              >
                <Globe className="text-white" size={22} />
              </motion.div>
              <div>
                <h1 className="text-lg font-extrabold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
                  World Passport
                </h1>
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold -mt-0.5">
                  Global Education
                </p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center gap-0.5"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <motion.div key={link.name} variants={linkVariant}>
                    <Link
                      to={link.href}
                      className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                        active
                          ? 'text-red-400'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {/* Hover background */}
                      <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
                      <span className="relative z-10">{link.name}</span>
                      {/* Active / hover underline */}
                      <span
                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300 ${
                          active ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Desktop CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="hidden lg:flex items-center gap-3"
            >
              <Link
                to="/admin"
                className="px-5 py-2 text-sm font-semibold text-slate-300 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-red-600 to-red-500 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_35px_rgba(239,68,68,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5"
              >
                Get Started
                <ChevronRight size={15} />
              </Link>
            </motion.div>

            {/* Mobile Hamburger */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} className="text-red-400" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} className="text-slate-300" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-white/5 bg-[#020617]/98 backdrop-blur-2xl"
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="px-4 py-5 space-y-1"
              >
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div key={link.name} variants={mobileItemVariant}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          active
                            ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                            : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        )}
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={mobileItemVariant}
                  className="pt-3 flex flex-col gap-2 border-t border-white/5 mt-3"
                >
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-3 text-sm font-semibold text-slate-300 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-red-600 to-red-500 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
