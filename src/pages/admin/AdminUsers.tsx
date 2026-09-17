import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Lock, ShieldCheck, Check, KeyRound, User } from 'lucide-react';

export const AdminUsers: React.FC = () => {
  const { currentAdminUser, changeAdminPassword } = useApp();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    const res = changeAdminPassword(oldPassword, newPassword);
    if (res.success) {
      setSuccess('Password updated successfully!');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setError(res.error || 'Failed to change password');
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-[#202820]">Administrator Profile & Security</h2>
        <p className="text-xs text-stone-500">
          Manage admin access credentials and dashboard authorization
        </p>
      </div>

      {/* User Details */}
      <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center font-bold text-lg">
          <User className="w-7 h-7 text-[#6FAF7B]" />
        </div>
        <div>
          <h3 className="font-bold text-sm text-[#202820]">
            {currentAdminUser?.name || 'Super Administrator'}
          </h3>
          <p className="text-xs text-stone-500">
            Email / Username: <strong className="text-[#315C3A]">{currentAdminUser?.username || 'admin@greenrefurb.site'}</strong> • Role: Super Admin
          </p>
          <div className="inline-flex items-center gap-1 text-[11px] text-[#315C3A] mt-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6FAF7B]" />
            <span>Full System Read/Write Access</span>
          </div>
        </div>
      </div>

      {/* Change Password Form */}
      <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
        <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100 flex items-center gap-2">
          <KeyRound className="w-4 h-4 text-[#6FAF7B]" />
          <span>Update Admin Password</span>
        </h3>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 bg-[#EAF5EC] border border-[#DCEBDD] text-[#315C3A] text-xs rounded-xl flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#6FAF7B]" />
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Current Password *
            </label>
            <input
              type="password"
              required
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              New Password *
            </label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Confirm New Password *
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-xl font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
