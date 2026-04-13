import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8002/api',
  withCredentials: true, // Required for Sanctum cookie-based auth
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// CSRF cookie initialization helper
export const initCsrf = () => {
  return axios.get('/sanctum/csrf-cookie', {
    baseURL: process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:8002',
    withCredentials: true,
  });
};

export default api;
