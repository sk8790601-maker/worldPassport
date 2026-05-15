import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import PartnerSection from '../components/PartnerSection';

export default function BecomePartner() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-red-800 text-white pt-28 pb-20">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="partner-page-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#partner-page-grid)" />
          </svg>
        </div>
        <div className="absolute top-8 left-10 w-72 h-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full border border-white/10 text-sm font-bold tracking-wide mb-6"
          >
            <Handshake size={16} className="text-red-300" /> BECOME A PARTNER
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-5"
          >
            Partner With <span className="text-red-300">World Passport</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-blue-50/90 leading-relaxed"
          >
            Join our expanding global network and grow together by helping students begin successful international education journeys.
          </motion.p>
        </div>
      </section>

      <PartnerSection />
    </main>
  );
}
