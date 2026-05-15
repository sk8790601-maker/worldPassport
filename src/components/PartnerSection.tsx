import { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useData } from '../context/DataContext';
import { patterns, validatePartnerForm } from '../utils/validation';

export default function PartnerSection() {
  const { addPartner } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    address: '',
    pincode: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validatePartnerForm(formData);
    if (error) {
      toast.error(error);
      return;
    }
    addPartner({
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    });
    setSubmitted(true);
    toast.success('Partner application submitted successfully!');
    setFormData({ name: '', email: '', phone: '', organization: '', address: '', pincode: '', message: '' });
  };

  return (
    <section id="partner" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="partner-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partner-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-red-300 rounded-full text-sm font-bold mb-4 border border-white/10"
            >
              <Handshake size={16} /> BECOME A PARTNER
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Join Our Global{' '}
              <span className="text-red-400">Network</span>
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Partner with World Passport and help students achieve their dreams of studying abroad. 
              We offer attractive commission structures and comprehensive support for our partners.
            </p>

            <div className="space-y-4">
              {[
                'Attractive commission structure',
                'Marketing support and materials',
                'Dedicated partner manager',
                'Training and certification',
                'Real-time application tracking',
                'Regular payouts'
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-red-400 flex-shrink-0" />
                  <span className="text-blue-100 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 text-center border border-white/20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={40} className="text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Thank You!</h3>
                <p className="text-blue-200 mb-6">Your partner application has been submitted successfully. We'll contact you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-white text-red-600 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-4 border border-white/20">
                <h3 className="text-2xl font-extrabold text-white mb-6">Partner Application</h3>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  pattern={patterns.name.source}
                  title="Use letters, spaces, apostrophes, periods or hyphens only."
                  minLength={2}
                  maxLength={80}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-red-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  pattern={patterns.email.source}
                  title="Enter a valid email address."
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-red-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                  pattern={patterns.phone.source}
                  title="Enter exactly 10 digits."
                  minLength={10}
                  maxLength={10}
                  inputMode="numeric"
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-red-400 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Organization Name"
                  value={formData.organization}
                  onChange={e => setFormData({ ...formData, organization: e.target.value })}
                  required
                  pattern={patterns.organization.source}
                  title="Enter a valid organization name."
                  minLength={2}
                  maxLength={120}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-red-400 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  required
                  pattern={patterns.address.source}
                  title="Enter a valid address."
                  minLength={5}
                  maxLength={200}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-red-400 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                  required
                  pattern={patterns.pincode.source}
                  title="Enter a valid 6 digit pincode."
                  inputMode="numeric"
                  maxLength={6}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-red-400 transition-colors"
                />
                <textarea
                  placeholder="Tell us about yourself"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={3}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-red-400 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={18} /> Submit Application
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
