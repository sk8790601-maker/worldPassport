import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Globe } from 'lucide-react';
import toast from 'react-hot-toast';
import { useData } from '../context/DataContext';
import { patterns, validateContactForm } from '../utils/validation';

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
    { icon: Mail, title: 'Send Us Mail', details: 'bm@worldpassport.in', color: 'from-red-500 to-red-600' },
    { icon: Phone, title: 'Call Us Anytime', details: '+91 92050 31277', color: 'from-blue-600 to-blue-700' },
    { icon: MapPin, title: 'Visit Our Office', details: '5th Floor, Kandamkulathy Towers, MG Road, Ernakulam, Kerala – 682011', color: 'from-red-600 to-red-700' },
    { icon: Clock, title: 'Working Hours', details: 'Mon - Sat: 9:00 AM - 6:00 PM', color: 'from-blue-700 to-blue-800' }
  ];

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-4 border border-red-100"
          >
            <Globe size={16} /> CONTACT US
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Connect With Us For{' '}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Guidance
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your details and our expert team will contact you promptly, offering personalized guidance, 
            admission support, and visa assistance.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-blue-700 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                <info.icon size={24} className="text-white" />
              </div>
              <h3 className="font-extrabold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-sm text-gray-600">{info.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl p-12 text-center border border-red-100">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={40} className="text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 space-y-4 border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Send Us a Message</h3>
                <div className="grid md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    pattern={patterns.email.source}
                    title="Enter a valid email address."
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    required
                    pattern={patterns.subject.source}
                    title="Subject must be 3 to 120 valid characters."
                    minLength={3}
                    maxLength={120}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={5}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px] border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5!2d76.27!3d9.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMTIuMCJOIDc2wrAxNjEyLjAiRQ!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
