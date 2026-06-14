'use client';

import { useState, useEffect, useRef } from 'react';
import { Building2, Home, Users, Award } from 'lucide-react';

export default function PropertyCounter() {
  const [counts, setCounts] = useState({
    properties: 0,
    sold: 0,
    clients: 0,
    years: 0,
  });
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    const target = { properties: 250, sold: 180, clients: 320, years: 10 };
    const duration = 2500;
    const startTime = Date.now();

    const update = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCounts({
        properties: Math.floor(progress * target.properties),
        sold: Math.floor(progress * target.sold),
        clients: Math.floor(progress * target.clients),
        years: Math.floor(progress * target.years),
      });
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  const stats = [
    {
      icon: Building2,
      number: counts.properties,
      label: 'মোট প্রপার্টি',
      gradient: 'from-blue-600 to-blue-400',
    },
    {
      icon: Home,
      number: counts.sold,
      label: 'বিক্রি/ভাড়া সম্পন্ন',
      gradient: 'from-purple-600 to-purple-400',
    },
    {
      icon: Users,
      number: counts.clients,
      label: 'সন্তুষ্ট ক্লায়েন্ট',
      gradient: 'from-cyan-600 to-cyan-400',
    },
    {
      icon: Award,
      number: counts.years,
      label: 'বছরের অভিজ্ঞতা',
      gradient: 'from-orange-600 to-orange-400',
    },
  ];

  return (
    <div ref={sectionRef} className="relative py-20 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            আমাদের সাফল্যের গল্প
          </h2>
          <p className="text-xl text-slate-300">
            হাজারো পরিবারের স্বপ্ন পূরণে আমরা প্রতিশ্রুতিবদ্ধ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative group bg-linear-to-br ${stat.gradient} p-0.5 rounded-2xl overflow-hidden`}
              >
                {/* Border gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent" />
                
                {/* Content */}
                <div className="relative bg-slate-900 rounded-2xl p-8 text-center group-hover:bg-slate-800 transition-colors">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                    <span className="text-2xl ml-1">+</span>
                  </div>
                  <p className="text-slate-300 font-medium">{stat.label}</p>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
