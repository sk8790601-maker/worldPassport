import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData, Partner } from '../context/DataContext';
import { Trash2, Check, X, Eye, Handshake, Mail, Phone, Building, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminPartners() {
  const { partners, updatePartner, deletePartner } = useData();
  const [viewPartner, setViewPartner] = useState<Partner | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const filteredPartners = filter === 'all' ? partners : partners.filter(p => p.status === filter);

  const handleStatusChange = (id: string, status: 'pending' | 'approved' | 'rejected') => {
    updatePartner(id, { status });
    if (viewPartner?.id === id) {
      setViewPartner({ ...viewPartner, status });
    }
    toast.success(`Partner marked as ${status}`);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      deletePartner(id);
      toast.success('Partner deleted');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'approved': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Partner Applications</h2>
          <p className="text-gray-500">Manage partner requests</p>
        </div>
        <div className="flex gap-2">
          {(['all', 'pending', 'approved', 'rejected'] as const).map(status => (
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
                  {partners.filter(p => p.status === status).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Partners Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Partner</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Contact</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Date</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPartners.length > 0 ? filteredPartners.map((partner, index) => (
                <motion.tr
                  key={partner.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Handshake size={18} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{partner.name}</p>
                        <p className="text-sm text-gray-500">{partner.organization || 'N/A'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600">{partner.email}</p>
                    <p className="text-sm text-gray-500">{partner.phone}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(partner.status)}`}>
                      {partner.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500">
                    {new Date(partner.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setViewPartner(partner)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye size={16} />
                      </button>
                      {partner.status !== 'approved' && (
                        <button
                          onClick={() => handleStatusChange(partner.id, 'approved')}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <Check size={16} />
                        </button>
                      )}
                      {partner.status !== 'rejected' && (
                        <button
                          onClick={() => handleStatusChange(partner.id, 'rejected')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Reject"
                        >
                          <X size={16} />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(partner.id, partner.name)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              )) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-500">
                    No partner applications found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      <AnimatePresence>
        {viewPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setViewPartner(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Partner Details</h3>
                <button onClick={() => setViewPartner(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Organization</p>
                    <p className="font-medium">{viewPartner.organization || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{viewPartner.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{viewPartner.phone}</p>
                  </div>
                </div>
                {(viewPartner.address || viewPartner.pincode) && (
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">{viewPartner.address || 'N/A'}</p>
                      {viewPartner.pincode && <p className="text-sm text-gray-500 mt-1">Pincode: {viewPartner.pincode}</p>}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500 mb-1">Message</p>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{viewPartner.message}</p>
                </div>
                <div className="pt-4 border-t space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(viewPartner.status)}`}>
                      {viewPartner.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(viewPartner.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleStatusChange(viewPartner.id, 'approved')}
                      disabled={viewPartner.status === 'approved'}
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Check size={15} /> Approve
                    </button>
                    <button
                      onClick={() => handleStatusChange(viewPartner.id, 'pending')}
                      disabled={viewPartner.status === 'pending'}
                      className="px-3 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => handleStatusChange(viewPartner.id, 'rejected')}
                      disabled={viewPartner.status === 'rejected'}
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <X size={15} /> Reject
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
