import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, Globe, Shield } from 'lucide-react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { patterns, validateLoginForm } from '../utils/validation';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function AdminLogin() {
  const { login, isAuthenticated, loading } = useAuth();

  const [email, setEmail] = useState('admin@worldpassport.in');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Safe redirect path
  const from = location.state?.from?.pathname || '/admin';

  // Hooks MUST come before conditional returns
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.6,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 6,
        drift: (Math.random() - 0.5) * 50,
      })),
    []
  );

  // Redirect after all hooks
  if (!loading && isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (event) => {
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
      toast.error(
        error instanceof Error ? error.message : 'Login failed'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 relative overflow-hidden selection:bg-red-500 selection:text-white">

      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_50%,transparent_100%)]" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen"
        />

        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, p.drift, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md"
      >

        {/* Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-[3rem] blur-2xl pointer-events-none" />

        <motion.div
          variants={fadeUpVariant}
          className="relative bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden"
        >

          {/* Top Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-400 to-blue-500" />

          <div className="p-8 sm:p-10">

            {/* Header */}
            <motion.div
              variants={fadeUpVariant}
              className="text-center mb-10"
            >

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 mx-auto mb-5 flex items-center justify-center text-white shadow-lg shadow-red-500/30 border border-red-500/30"
              >
                <Globe size={28} />
              </motion.div>

              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                Admin Login
              </h1>

              <p className="text-slate-400 mt-2 text-sm font-medium">
                Manage World Passport website content
              </p>

              {/* Security Badge */}
              <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest">
                <Shield
                  size={11}
                  className="text-green-400"
                />
                <span>Secure Portal</span>
              </div>
            </motion.div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Email */}
              <motion.label
                variants={fadeUpVariant}
                className="block"
              >

                <span className="text-sm font-bold text-slate-400 mb-2 block uppercase tracking-wider">
                  Email Address
                </span>

                <div className="relative">

                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/40 transition-all text-sm font-medium"
                    pattern={patterns.email.source}
                    title="Enter a valid email address."
                    required
                  />
                </div>
              </motion.label>

              {/* Password */}
              <motion.label
                variants={fadeUpVariant}
                className="block"
              >

                <span className="text-sm font-bold text-slate-400 mb-2 block uppercase tracking-wider">
                  Password
                </span>

                <div className="relative">

                  <Lock
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/40 transition-all text-sm font-medium"
                    minLength={6}
                    required
                  />
                </div>
              </motion.label>

              {/* Submit */}
              <motion.div
                variants={fadeUpVariant}
                className="pt-2"
              >

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-white font-extrabold shadow-[0_0_30px_rgba(239,68,68,0.25)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] hover:-translate-y-0.5 border border-red-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >

                  {submitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />

                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight size={18} />
                    </>
                  )}

                </button>
              </motion.div>
            </form>

            {/* Footer */}
            {/* <motion.p
              variants={fadeUpVariant}
              className="text-xs text-slate-600 text-center mt-6 leading-relaxed"
            >
              Preview fallback: admin@worldpassport.in / admin123
              when API is not configured.
            </motion.p> */}

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}