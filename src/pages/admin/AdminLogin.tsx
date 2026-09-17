import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Lock, Sparkles } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const { login, navigate } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      const res = login(username, password);
      setLoading(false);
      if (!res.success) {
        setError(res.error || 'Authentication failed');
      }
    }, 250);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6FAF7B] to-[#315C3A] text-white flex items-center justify-center shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
        <h2 className="mt-4 text-center text-2xl font-extrabold text-[#202820] tracking-tight">
          Green Refurb CMS
        </h2>
        <p className="mt-1 text-center text-xs text-stone-500">
          Administrator Control Panel & Content Management
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-3xl sm:px-10 border border-[#DCEBDD]">
          {error && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-username-input" className="block text-xs font-bold text-[#202820] mb-1">
                Admin Email / Username
              </label>
              <input
                id="admin-username-input"
                type="text"
                required
                placeholder="Enter email or username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label htmlFor="admin-password-input" className="block text-xs font-bold text-[#202820] mb-1">
                Security Password
              </label>
              <input
                id="admin-password-input"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div className="pt-2">
              <button
                id="admin-login-submit"
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#315C3A] hover:bg-[#202820] text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              id="return-home-btn"
              onClick={() => navigate('/')}
              className="text-xs text-stone-500 hover:text-[#315C3A] hover:underline cursor-pointer"
            >
              ← Return to Public Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
