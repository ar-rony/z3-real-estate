'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('বৈধ ইমেইল দিন');
      return;
    }
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600" />
      <div className="absolute inset-0 bg-linear-to-b from-blue-600/80 to-purple-600/80 dark:from-blue-900/80 dark:to-purple-900/80" />
      
      {/* Animated blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            নতুন সুযোগ মিস করবেন না
          </h2>
          <p className="text-xl text-white/90">
            নতুন প্রপার্টি, এক্সক্লুসিভ ডিল এবং বিশেষ অফার সরাসরি আপনার ইনবক্সে পান
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="w-16 h-16 text-green-400 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">সাবস্ক্রাইব সফল!</h3>
            <p className="text-white/90">
              আপনার ইনবক্স চেক করুন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMsg('');
                  }}
                  placeholder="আপনার ইমেইল ঠিকানা"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 dark:bg-slate-900/90 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-gradient-to-r from-white to-blue-100 hover:to-blue-200 disabled:opacity-70 text-blue-600 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {status === 'submitting' ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">সাবস্ক্রাইব</span>
                  </>
                )}
              </button>
            </div>
            {errorMsg && (
              <p className="text-red-200 text-sm mt-3 text-center">{errorMsg}</p>
            )}
            <p className="text-white/70 text-sm mt-4 text-center">
              আমরা আপনার গোপনীয়তা রক্ষা করি। স্প্যাম করি না, কখনও।
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
