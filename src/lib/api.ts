const API_URL = import.meta.env.VITE_API_URL || '';

export const apiEnabled = Boolean(API_URL);

export function getToken() {
  return localStorage.getItem('wp_admin_token') || '';
}

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  if (!API_URL) throw new Error('API is not configured');
  const token = getToken();
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }
  return data as T;
}