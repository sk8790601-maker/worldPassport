import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData, ContactMessage } from '../context/DataContext';
import { Trash2, Eye, X, Mail, Phone, User, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminContacts() {
  const { contacts, updateContact, deleteContact } = useData();
  const [viewContact, setViewContact] = useState<ContactMessage | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read' | 'replied'>('all');

  const filteredContacts = filter === 'all' ? contacts : contacts.filter(c => c.status === filter);

  const handleStatusChange = (id: string, status: 'read' | 'replied') => {
    updateContact(id, { status });
    if (status === 'read') toast.success('Marked as read');
    if (status === 'replied') toast.success('Marked as replied');
  };

  const handleView = (contact: ContactMessage) => {
    setViewContact(contact);
    if (contact.status === 'unread') {
      updateContact(contact.id, { status: 'read' });
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Delete message from ${name}?`)) {
      deleteContact(id);
      toast.success('Message deleted');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'bg-red-100 text-red-700';
      case 'read': return 'bg-blue-100 text-blue-700';
      case 'replied': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>
          <p className="text-gray-500">Manage contact form submissions</p>
        </div>
        <div className="flex gap-2">
          {(['all', 'unread', 'read', 'replied'] as const).map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === status
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
              {status !== 'all' && (
                <span className="ml-1 px-1.5 py-0.5 bg-white/20 rounded text-xs">
                  {contacts.filter(c => c.status === status).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredContacts.length > 0 ? filteredContacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`bg-white rounded-2xl p-6 shadow-sm border transition-all hover:shadow-md ${
              contact.status === 'unread' ? 'border-l-4 border-l-red-500' : 'border-gray-100'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  contact.status === 'unread' ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <User size={20} className={contact.status === 'unread' ? 'text-red-600' : 'text-blue-600'} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-gray-900">{contact.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                      {contact.status}
                    </span>
                  </div>
                  <p className="text-sm text-blue-600 mb-1">{contact.subject}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{contact.message}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Mail size={12} /> {contact.email}</span>
                    <span className="flex items-center gap-1"><Phone size={12} /> {contact.phone}</span>
                    <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleView(contact)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="View"
                >
                  <Eye size={16} />
                </button>
                {contact.status === 'read' && (
                  <button
                    onClick={() => handleStatusChange(contact.id, 'replied')}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Mark as Replied"
                  >
                    <MessageSquare size={16} />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(contact.id, contact.name)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )) : (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
            <MessageSquare size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No messages found</p>
          </div>
        )}
      </div>

      {/* View Modal */}
      <AnimatePresence>
        {viewContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setViewContact(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Message Details</h3>
                <button onClick={() => setViewContact(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{viewContact.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{viewContact.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{viewContact.phone}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Subject</p>
                  <p className="font-medium">{viewContact.subject}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Message</p>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{viewContact.message}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(viewContact.status)}`}>
                    {viewContact.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(viewContact.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
