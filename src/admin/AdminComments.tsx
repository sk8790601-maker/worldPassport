import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData, BlogComment } from '../context/DataContext';
import { Trash2, Eye, X, Mail, User, MessageCircle, Calendar, CornerDownRight, Send, Search, Check, Ban } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminComments() {
  const { comments, updateComment, deleteComment } = useData();
  const [viewComment, setViewComment] = useState<BlogComment | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected' | 'replied'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [replyText, setReplyText] = useState('');

  // Filtering & Search
  const filteredComments = comments.filter(c => {
    // Status filter
    if (filter === 'replied') {
      if (!c.replyText) return false;
    } else if (filter !== 'all') {
      const commentStatus = c.status || 'approved'; // handle default status
      if (commentStatus !== filter) return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.text.toLowerCase().includes(q) ||
        c.articleTitle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleStatusChange = (id: string, status: 'approved' | 'rejected') => {
    updateComment(id, { status });
    toast.success(`Comment ${status}`);
    if (viewComment && viewComment.id === id) {
      setViewComment(prev => prev ? { ...prev, status } : null);
    }
  };

  const handleSendReply = (commentItem: BlogComment) => {
    if (!replyText.trim()) {
      toast.error('Please enter a reply message.');
      return;
    }

    // 1. Update the comment state with the reply and status
    updateComment(commentItem.id, {
      replyText: replyText.trim(),
      repliedAt: new Date().toISOString(),
      status: 'approved' // Automatically approve comment if admin replies to it
    });

    // 2. Formulate mailto link
    const subject = encodeURIComponent(`Re: Your comment on "${commentItem.articleTitle}"`);
    const body = encodeURIComponent(
      `Hi ${commentItem.name},\n\n` +
      `Thank you for reading our blog and sharing your thoughts on "${commentItem.articleTitle}"!\n\n` +
      `You commented:\n"${commentItem.text}"\n\n` +
      `Here is our reply:\n${replyText.trim()}\n\n` +
      `Best regards,\n` +
      `World Passport Support Team\n` +
      `https://worldpassport.in`
    );
    
    // Open default mail composer
    window.open(`mailto:${commentItem.email}?subject=${subject}&body=${body}`, '_blank');
    
    toast.success('Reply saved and email client opened!');
    setReplyText('');
    setViewComment(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Delete comment from ${name}?`)) {
      deleteComment(id);
      toast.success('Comment deleted');
      if (viewComment && viewComment.id === id) {
        setViewComment(null);
      }
    }
  };

  const getStatusColor = (status: string | undefined, hasReply: boolean) => {
    if (hasReply) return 'bg-purple-100 text-purple-700 border-purple-200';
    const commentStatus = status || 'approved';
    switch (commentStatus) {
      case 'approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-700 border-red-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Blog Comments</h2>
          <p className="text-gray-500">Moderate blog post discussions and reply to user queries</p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search name, email, text..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white pl-10 pr-4 py-2 rounded-xl text-sm border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
          <Search size={16} className="absolute left-3.5 top-3 text-gray-400" />
        </div>
      </div>

      {/* Tabs / Filters */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-gray-200">
        {(['all', 'pending', 'approved', 'rejected', 'replied'] as const).map(status => {
          const count = status === 'all'
            ? comments.length
            : status === 'replied'
            ? comments.filter(c => c.replyText).length
            : comments.filter(c => (c.status || 'approved') === status).length;

          return (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                filter === status
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
              <span className={`px-1.5 py-0.5 rounded text-xs ${
                filter === status ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {filteredComments.length > 0 ? filteredComments.map((item, index) => {
          const hasReply = !!item.replyText;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.04, 0.2) }}
              className={`bg-white rounded-2xl p-6 shadow-sm border transition-all hover:shadow-md ${
                (item.status || 'approved') === 'pending' ? 'border-l-4 border-l-yellow-500' : 'border-gray-100'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                {/* Comment Body */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg uppercase shadow-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusColor(item.status, hasReply)}`}>
                        {hasReply ? 'Replied' : item.status || 'approved'}
                      </span>
                    </div>

                    <p className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded inline-block">
                      On: {item.articleTitle}
                    </p>

                    <p className="text-gray-700 text-sm mt-2 font-medium leading-relaxed max-w-4xl">{item.text}</p>

                    {/* Show existing reply if any */}
                    {hasReply && (
                      <div className="mt-4 pl-4 border-l-2 border-purple-500 bg-purple-50/50 p-4 rounded-xl flex items-start gap-3">
                        <CornerDownRight size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                              Admin Reply
                            </span>
                            {item.repliedAt && (
                              <span className="text-[10px] text-gray-400 font-medium">
                                {new Date(item.repliedAt).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-purple-950 font-medium">{item.replyText}</p>
                        </div>
                      </div>
                    )}

                    {/* Metadata Footer */}
                    <div className="flex flex-wrap items-center gap-4 mt-3 pt-2 text-xs text-gray-400 border-t border-gray-50">
                      <span className="flex items-center gap-1"><Mail size={12} /> {item.email}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(item.createdAt).toLocaleString()}</span>
                      <span className="text-gray-300">| Path: {item.articlePath}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-2 border-t lg:border-t-0 pt-4 lg:pt-0">
                  <button
                    onClick={() => {
                      setViewComment(item);
                      setReplyText('');
                    }}
                    className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-xl transition-all border border-transparent hover:border-blue-100"
                    title="View & Reply"
                  >
                    <Eye size={18} />
                  </button>

                  {(item.status || 'approved') === 'pending' && (
                    <button
                      onClick={() => handleStatusChange(item.id, 'approved')}
                      className="p-2.5 text-green-600 hover:bg-green-50 rounded-xl transition-all border border-transparent hover:border-green-100"
                      title="Approve Comment"
                    >
                      <Check size={18} />
                    </button>
                  )}

                  {(item.status || 'approved') === 'approved' && (
                    <button
                      onClick={() => handleStatusChange(item.id, 'rejected')}
                      className="p-2.5 text-yellow-600 hover:bg-yellow-50 rounded-xl transition-all border border-transparent hover:border-yellow-100"
                      title="Reject/Unapprove"
                    >
                      <Ban size={18} />
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(item.id, item.name)}
                    className="p-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                    title="Delete Comment"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        }) : (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-gray-100">
            <MessageCircle size={48} className="mx-auto text-gray-300 mb-4 animate-bounce" />
            <p className="text-gray-500 font-semibold">No comments found matching this filter</p>
          </div>
        )}
      </div>

      {/* Details & Direct Email Reply Modal */}
      <AnimatePresence>
        {viewComment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setViewComment(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">Comment Details</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Moderate and send direct email replies</p>
                </div>
                <button onClick={() => setViewComment(null)} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Comment details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <User size={18} className="text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Name</p>
                      <p className="font-semibold text-gray-800 text-sm">{viewComment.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email</p>
                      <p className="font-semibold text-gray-800 text-sm">{viewComment.email}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Article</p>
                  <p className="font-bold text-gray-800 text-sm mb-2">{viewComment.articleTitle}</p>
                  <p className="text-xs text-gray-400">Path: {viewComment.articlePath}</p>
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Comment Text</p>
                  <p className="text-gray-700 bg-blue-50/30 p-5 rounded-2xl border border-blue-50/50 text-sm leading-relaxed font-medium">
                    "{viewComment.text}"
                  </p>
                </div>

                {/* Show Existing Reply */}
                {viewComment.replyText && (
                  <div className="p-5 bg-purple-50/50 rounded-2xl border border-purple-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                        Existing Admin Reply
                      </span>
                      {viewComment.repliedAt && (
                        <span className="text-[10px] text-gray-400 font-medium">
                          {new Date(viewComment.repliedAt).toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-purple-950 font-medium leading-relaxed">
                      {viewComment.replyText}
                    </p>
                  </div>
                )}

                {/* Reply Composer Form */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Send size={16} className="text-blue-600" />
                    <h4 className="text-sm font-extrabold text-gray-900">
                      {viewComment.replyText ? 'Update Reply & Send Mail' : 'Compose Email Reply'}
                    </h4>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Type your reply here. Submitting will update the dashboard and trigger your device's email client to email the user directly..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full rounded-2xl border border-gray-200 p-4 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none font-medium text-gray-700"
                  />
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusColor(viewComment.status, !!viewComment.replyText)}`}>
                        {viewComment.replyText ? 'Status: Replied' : `Status: ${viewComment.status || 'approved'}`}
                      </span>
                    </div>

                    <button
                      onClick={() => handleSendReply(viewComment)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all"
                    >
                      <span>Send Reply via Email</span>
                      <Send size={14} />
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
