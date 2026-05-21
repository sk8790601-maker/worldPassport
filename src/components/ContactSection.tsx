import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Globe } from 'lucide-react';
import toast from 'react-hot-toast';
import { useData } from '../context/DataContext';
import { patterns, validateContactForm } from '../utils/validation';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

export default function ContactSection() {
  const { addContact } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateContactForm(formData);
    if (error) {
      toast.error(error);
      return;
    }
    addContact({
      ...formData,
      status: 'unread',
      createdAt: new Date().toISOString()
    });
    setSubmitted(true);
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, title: 'Send Us Mail', details: 'bm@worldpassport.in', color: 'from-red-500 to-red-600', border: 'border-red-500/30' },
    { icon: Phone, title: 'Call Us Anytime', details: '+91 92050 31277', color: 'from-blue-600 to-blue-700', border: 'border-blue-500/30' },
    { icon: MapPin, title: 'Visit Our Office', details: '5th Floor, Kandamkulathy Towers, MG Road, Ernakulam, Kerala – 682011', color: 'from-red-600 to-red-800', border: 'border-red-500/30' },
    { icon: Clock, title: 'Working Hours', details: 'Mon - Sat: 9:00 AM - 6:00 PM', color: 'from-blue-700 to-blue-900', border: 'border-blue-500/30' }
  ];

  const particles = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5,
      drift: (Math.random() - 0.5) * 45,
    })), []);

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-b border-white/5">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
        {/* Local floating particles */}
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -100, 0], x: [0, p.drift, 0], opacity: [0, 0.45, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUpVariant}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
          >
            <Globe size={18} className="text-red-400" />
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              CONTACT US
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Connect With Us For{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent relative z-10">Guidance</span>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full" />
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariant}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Share your details and our expert team will contact you promptly, offering personalized guidance, 
            admission support, and visa assistance.
          </motion.p>
          <motion.div variants={fadeUpVariant} className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className={`bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border ${info.border} group transition-all duration-300 relative overflow-hidden hover:bg-white/10`}
            >
              {/* Top Accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-20 rounded-2xl blur-md group-hover:opacity-40 transition-opacity`} />
                <info.icon size={26} className="text-white relative z-10" />
              </div>
              
              <h3 className="font-extrabold text-white mb-2 text-xl">{info.title}</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">{info.details}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-12 text-center border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] h-full flex flex-col justify-center items-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 border border-green-500/30"
                >
                  <CheckCircle size={48} className="text-green-400" />
                </motion.div>
                <h3 className="text-3xl font-extrabold text-white mb-4">Message Sent!</h3>
                <p className="text-slate-400 mb-10 text-lg font-medium">Thank you for reaching out. We will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] transition-all hover:-translate-y-1 border border-red-500/30"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-10 space-y-6 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group h-full">
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
                
                <h3 className="text-3xl font-extrabold text-white mb-8 relative z-10">Get in Touch</h3>
                
                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                      pattern={patterns.name.source}
                      title="Use letters, spaces, apostrophes, periods or hyphens only."
                      minLength={2}
                      maxLength={80}
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                      pattern={patterns.email.source}
                      title="Enter a valid email address."
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      required
                      pattern={patterns.phone.source}
                      title="Enter exactly 10 digits."
                      minLength={10}
                      maxLength={10}
                      inputMode="numeric"
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                    <input
                      type="text"
                      placeholder="Inquiry"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      required
                      pattern={patterns.subject.source}
                      title="Subject must be 3 to 120 valid characters."
                      minLength={3}
                      maxLength={120}
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-lg relative z-10 mt-4 border border-red-500/30"
                >
                  <Send size={20} /> Send Secure Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-full min-h-[500px] border border-white/10 group relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5!2d76.27!3d9.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMTIuMCJOIDc2wrAxNjEyLjAiRQ!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#020617]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 z-20 flex items-start gap-4 shadow-xl">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 border border-red-500/20">
                  <MapPin size={20} className="text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-extrabold mb-1">World Passport HQ</h4>
                  <p className="text-slate-400 text-sm font-medium">5th Floor, Kandamkulathy Towers, MG Road, Ernakulam, Kerala</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
