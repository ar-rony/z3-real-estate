// src/app/layout.js
import './globals.css';
import Script from 'next/script';
import Link from 'next/link';
import { Home, Building2, Phone, Mail, MapPin } from 'lucide-react';
import { ThemeProvider } from './ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'Z3 Real Estate - আপনার স্বপ্নের বাড়ি খুঁজুন',
  description: 'আপনার স্বপ্নের বাড়ি খুঁজুন',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className="bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-gray-900 dark:text-gray-100 transition-colors">
        {/* Theme initializer executed before React hydration to prevent FOUC */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const t = localStorage.getItem('theme');
              const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (t === 'dark' || (!t && prefersDark)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          })();`}
        </Script>
        <ThemeProvider>
          {/* ---------- গ্লাস ন্যাভবার ---------- */}
          <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border-b border-white/20 dark:border-slate-700/20 shadow-lg dark:shadow-2xl">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2 hover:scale-105 transition-transform">
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="sm:inline bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Z3 Real Estate</span>
            </Link>

            {/* ন্যাভ লিংকস */}
            <div className="flex gap-2 sm:gap-4 items-center text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
              <Link href="/" className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1 px-3 py-2 text-gray-700 dark:text-gray-300">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                <span className="hidden sm:inline">হোম</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/properties" className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1 px-3 py-2 text-gray-700 dark:text-gray-300">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                <span className="hidden sm:inline">প্রপার্টি</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/contact" className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1 px-3 py-2 text-gray-700 dark:text-gray-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                <span className="hidden sm:inline">যোগাযোগ</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        {/* মেইন কনটেন্ট – হিরো স্লাইডার যাতে ফুল উইডথ হয়, তাই এখানে প্যাডিং সরিয়ে দিচ্ছি */}
        <main className="py-8">{children}</main>

        {/* ---------- ফুটার উইথ উইজেটস ---------- */}
        <footer className="relative bg-linear-to-b from-gray-900 via-gray-900 to-black dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-gray-300 dark:text-gray-400 pt-16 pb-8 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 relative z-10">
            {/* কোম্পানি তথ্য */}
            <div>
              <h3 className="text-white dark:text-slate-100 text-lg font-semibold mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-blue-400 dark:text-blue-300" />
                ঢাকা ল্যান্ডমার্ক লিমিটেড
              </h3>
              <p className="text-sm leading-relaxed">
                বাংলাদেশের সেরা প্রপার্টি মার্কেটপ্লেস। কিনুন, ভাড়া নিন, বিক্রি করুন নিরাপদ ও নির্ভরযোগ্য প্লাটফর্মে।
              </p>
            </div>

            {/* কুইক লিংকস */}
            <div>
              <h4 className="text-white dark:text-slate-100 font-semibold mb-4">গুরুত্বপূর্ণ লিংক</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-blue-400 dark:hover:text-blue-300 transition">হোম</Link></li>
                <li><Link href="/properties" className="hover:text-blue-400 dark:hover:text-blue-300 transition">প্রপার্টি সমূহ</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 dark:hover:text-blue-300 transition">যোগাযোগ</Link></li>
                <li><Link href="#" className="hover:text-blue-400 dark:hover:text-blue-300 transition">আমাদের সম্পর্কে</Link></li>
                <li><Link href="#" className="hover:text-blue-400 dark:hover:text-blue-300 transition">গোপনীয়তা নীতি</Link></li>
              </ul>
            </div>

            {/* কন্ট্যাক্ট ইনফো */}
            <div>
              <h4 className="text-white dark:text-slate-100 font-semibold mb-4">যোগাযোগ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-400 dark:text-blue-300" />
                  বাড়ি # ৫২, সড়ক # ১১, গুলশান, ঢাকা ১২১२
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400 dark:text-blue-300" />
                  <a href="tel:+8801700000000" className="hover:text-blue-400 dark:hover:text-blue-300 transition">+880 1700-000000</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400 dark:text-blue-300" />
                  <a href="mailto:info@banglarealty.com" className="hover:text-blue-400 dark:hover:text-blue-300 transition">info@banglarealty.com</a>
                </li>
              </ul>
            </div>

            {/* সোশ্যাল মিডিয়া */}
            <div>
              <h4 className="text-white dark:text-slate-100 font-semibold mb-4">অনুসরণ করুন</h4>
              <div className="flex gap-3">
                {/* ফেসবুক */}
                <a href="#" aria-label="Facebook" className="hover:text-blue-400 dark:hover:text-blue-300 transition">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* টুইটার */}
                <a href="#" aria-label="Twitter" className="hover:text-blue-400 dark:hover:text-blue-300 transition">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* ইনস্টাগ্রাম */}
                <a href="#" aria-label="Instagram" className="hover:text-blue-400 dark:hover:text-blue-300 transition">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* লিংকডইন */}
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 dark:hover:text-blue-300 transition">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* কপিরাইট */}
          <div className="border-t border-gray-700 dark:border-slate-700 mt-8 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Z3 Real Estate LTD । সর্বস্বত্ব সংরক্ষিত।
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}