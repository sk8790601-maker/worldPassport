import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, Globe } from 'lucide-react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { patterns, validateLoginForm } from '../utils/validation';

export default function AdminLogin() {
  const { login, isAuthenticated, loading } = useAuth();
  const [email, setEmail] = useState('admin@worldpassport.in');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname || '/admin';

  if (!loading && isAuthenticated) return <Navigate to="/admin" replace />;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const error = validateLoginForm({ email, password });
    if (error) {
      toast.error(error);
      return;
    }
    setSubmitting(true);
    try {
      await login(email, password);
      toast.success('Admin login successful');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

      <motion.form
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 mx-auto mb-4 flex items-center justify-center text-white shadow-lg shadow-red-500/30">
            <Globe size={30} />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Admin Login</h1>
          <p className="text-gray-500 mt-2">Manage World Passport website content</p>
        </div>

        <label className="block mb-4">
          <span className="text-sm font-bold text-gray-700 mb-2 block">Email Address</span>
          <div className="relative">
            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none"
              pattern={patterns.email.source}
              title="Enter a valid email address."
              required
            />
          </div>
        </label>

        <label className="block mb-6">
          <span className="text-sm font-bold text-gray-700 mb-2 block">Password</span>
          <div className="relative">
            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter admin password"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none"
              minLength={6}
              required
            />
          </div>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold shadow-xl shadow-red-500/30 hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {submitting ? 'Signing In...' : 'Sign In'}
          <ArrowRight size={18} />
        </button>

        <p className="text-xs text-gray-400 text-center mt-5">
          Preview fallback: admin@worldpassport.in / admin123 when API is not configured.
        </p>
      </motion.form>
    </main>
  );
}