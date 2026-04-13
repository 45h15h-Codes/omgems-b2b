'use client';

import { useState } from 'react';
import { LogIn } from 'lucide-react';
import { motion } from 'framer-motion';
import api, { initCsrf } from '@/lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // 1. Initialize CSRF
      await initCsrf();
      
      // 2. Login
      await api.post('/login', { email, password });
      
      // Redirect based on role (logic to be implemented in Task 4)
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.response?.data?.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-serif text-foreground tracking-tight">OM GEMS</h1>
          <p className="text-stone-500 uppercase tracking-[0.2em] text-xs font-sans">Luxury B2B Marketplace</p>
        </div>

        <div className="bg-white dark:bg-stone-900 p-8 border border-stone-200 dark:border-stone-800 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-3 border border-red-100 dark:bg-red-950/20 dark:border-red-900/40">
                {error}
              </div>
            )}
            
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-stone-500 font-medium">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none focus:border-accent transition-colors"
                placeholder="admin@omgems.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-stone-500 font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none focus:border-accent transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 bg-foreground text-background py-4 px-4 hover:bg-stone-800 transition-colors uppercase tracking-widest text-xs font-semibold disabled:opacity-50"
            >
              {isLoading ? 'Authenticating...' : (
                <>
                  <span>Sign In</span>
                  <LogIn className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="text-center">
          <p className="text-stone-400 text-xs">
            Restricted access for verified merchants and administrators only.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
