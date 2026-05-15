import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Handshake, ArrowRight, CheckCircle } from 'lucide-react';

export default function PartnerCTASection() {
  const points = [
    'Attractive commission structure',
    'Dedicated partner manager',
    'Training and certification',
    'Regular payouts',
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-red-300 rounded-full text-sm font-bold mb-4 border border-white/10">
              <Handshake size={16} /> BECOME A PARTNER
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Grow With Our <span className="text-red-300">Global Network</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Partner with World Passport and help students achieve their dreams of studying abroad with end-to-end support and trusted guidance.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 text-blue-50"
                >
                  <CheckCircle size={18} className="text-red-300 flex-shrink-0" />
                  <span className="font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-3xl font-extrabold text-white mb-4">Apply as a Partner</h3>
            <p className="text-blue-100 leading-8 mb-8">
              We’ve moved the complete partner application into a dedicated page for a better experience. Continue to fill your details including organization, address, and pincode.
            </p>
            <Link
              to="/become-a-partner"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-white font-bold text-lg shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Open Partner Page
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
