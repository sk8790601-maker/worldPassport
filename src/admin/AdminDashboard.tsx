import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import {
  Globe, GraduationCap, FileText, Handshake, MessageSquare, Star, ArrowRight
} from 'lucide-react';

export default function AdminDashboard() {
  const { countries, programs, services, partners, contacts, testimonials } = useData();

  const stats = [
    { icon: Globe, label: 'Countries', value: countries.length, color: 'from-blue-500 to-cyan-500', path: '/admin/countries' },
    { icon: GraduationCap, label: 'Programs', value: programs.length, color: 'from-purple-500 to-pink-500', path: '/admin/programs' },
    { icon: FileText, label: 'Services', value: services.length, color: 'from-green-500 to-teal-500', path: '/admin/services' },
    { icon: Handshake, label: 'Partners', value: partners.length, color: 'from-orange-500 to-red-500', path: '/admin/partners' },
    { icon: MessageSquare, label: 'Messages', value: contacts.length, color: 'from-indigo-500 to-purple-500', path: '/admin/contacts' },
    { icon: Star, label: 'Testimonials', value: testimonials.length, color: 'from-yellow-500 to-orange-500', path: '/admin/testimonials' },
  ];

  const recentContacts = contacts.slice(-3).reverse();
  const recentPartners = partners.slice(-3).reverse();

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2">Welcome to Admin Panel</h1>
          <p className="text-blue-100 mb-6">Manage your World Passport website content and data</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            View Website <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={stat.path}
              className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Messages</h3>
            <Link to="/admin/contacts" className="text-blue-600 text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {recentContacts.length > 0 ? recentContacts.map((contact) => (
              <div key={contact.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={18} className="text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900">{contact.name}</p>
                  <p className="text-sm text-gray-500 truncate">{contact.subject}</p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(contact.createdAt).toLocaleDateString()}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  contact.status === 'unread' ? 'bg-red-100 text-red-600' :
                  contact.status === 'read' ? 'bg-blue-100 text-blue-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {contact.status}
                </span>
              </div>
            )) : (
              <p className="text-gray-500 text-center py-8">No messages yet</p>
            )}
          </div>
        </motion.div>

        {/* Recent Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Partners</h3>
            <Link to="/admin/partners" className="text-blue-600 text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {recentPartners.length > 0 ? recentPartners.map((partner) => (
              <div key={partner.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Handshake size={18} className="text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900">{partner.name}</p>
                  <p className="text-sm text-gray-500">{partner.organization || partner.email}</p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(partner.createdAt).toLocaleDateString()}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  partner.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                  partner.status === 'approved' ? 'bg-green-100 text-green-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  {partner.status}
                </span>
              </div>
            )) : (
              <p className="text-gray-500 text-center py-8">No partners yet</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
