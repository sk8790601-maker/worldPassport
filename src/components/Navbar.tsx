import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/about' },
    { name: 'Study Abroad', href: '/study-abroad' },
    { name: 'Programs', href: '/programs' },
    { name: 'Services', href: '/#services' },
    { name: 'Partner', href: '/become-a-partner' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar - Red theme */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-2.5 text-sm hidden lg:block"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="mailto:bm@worldpassport.in" className="flex items-center gap-2 hover:text-red-200 transition-colors">
              <Mail size={14} className="text-red-300" /> bm@worldpassport.in
            </a>
            <a href="tel:+919205031277" className="flex items-center gap-2 hover:text-red-200 transition-colors">
              <Phone size={14} className="text-red-300" /> +91 92050 31277
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-red-300" />
              <span>Kandamkulathy Tower Ernakulam, Kerala</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-red-200">Follow Us:</span>
            <div className="flex gap-2">
              {['F', 'T', 'I', 'Y'].map((l, i) => (
                <a key={i} href="#" className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center text-xs hover:bg-white/30 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-red-900/10' : 'bg-white shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/40"
              >
                <Globe className="text-white" size={26} />
              </motion.div>
              <div>
                <h1 className="text-xl font-extrabold bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text text-transparent">
                  World Passport
                </h1>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold -mt-0.5">Global Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-red-600 to-red-500 transition-all duration-300 group-hover:w-3/4 rounded-full" />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/admin"
                className="px-5 py-2.5 text-sm font-semibold text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get Started <ChevronRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-red-50 transition-colors"
            >
              {isOpen ? <X size={24} className="text-red-600" /> : <Menu size={24} className="text-red-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t-2 border-red-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 space-y-2">
                  <Link
                    to="/admin"
                    className="block w-full text-center px-4 py-3 text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-3 text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
