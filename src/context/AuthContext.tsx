import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { apiEnabled, apiRequest } from '../lib/api';

interface AdminUser {
  email: string;
  role: string;
}

interface AuthContextType {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(() => {
    const stored = localStorage.getItem('wp_admin_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const token = localStorage.getItem('wp_admin_token');
      if (!token) {
        setLoading(false);
        return;
      }
      if (!apiEnabled) {
        setLoading(false);
        return;
      }
      try {
        const data = await apiRequest<{ user: AdminUser }>('/api/auth/me');
        setUser(data.user);
        localStorage.setItem('wp_admin_user', JSON.stringify(data.user));
      } catch {
        localStorage.removeItem('wp_admin_token');
        localStorage.removeItem('wp_admin_user');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    if (apiEnabled) {
      const data = await apiRequest<{ token: string; user: AdminUser }>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem('wp_admin_token', data.token);
      localStorage.setItem('wp_admin_user', JSON.stringify(data.user));
      setUser(data.user);
      return;
    }

    // Preview fallback when no backend URL is configured.
    if (email === 'admin@worldpassport.in' && password === 'admin123') {
      const fallbackUser = { email, role: 'admin' };
      localStorage.setItem('wp_admin_token', 'preview-admin-token');
      localStorage.setItem('wp_admin_user', JSON.stringify(fallbackUser));
      setUser(fallbackUser);
      return;
    }
    throw new Error('Invalid email or password');
  };

  const logout = () => {
    localStorage.removeItem('wp_admin_token');
    localStorage.removeItem('wp_admin_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: Boolean(user) }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}