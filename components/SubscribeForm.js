'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('বৈধ ইমেইল দিন');
      return;
    }
    setStatus('submitting');
    // এখানে API কল হবে
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">আপডেট পেতে সাবস্ক্রাইব করুন</h2>
        <p className="text-gray-600 mb-6">নতুন প্রপার্টি, অফার ও খবর সরাসরি আপনার ইনবক্সে।</p>

        {status === 'success' ? (
          <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg font-medium">
            সাবস্ক্রাইব সফল হয়েছে! চেক করুন আপনার ইমেইল।
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="আপনার ইমেইল"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <Send className="w-5 h-5" />
              )}
              সাবস্ক্রাইব
            </button>
          </form>
        )}
        {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}
      </div>
    </section>
  );
}