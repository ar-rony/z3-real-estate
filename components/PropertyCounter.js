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
    const duration = 2000;
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

  return (
    <div ref={sectionRef} className="bg-blue-600 dark:bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        <div className="flex flex-col items-center">
          <Building2 className="w-8 h-8 mb-2" />
          <span className="text-3xl font-bold">{counts.properties}+</span>
          <span className="text-sm opacity-80">মোট প্রপার্টি</span>
        </div>
        <div className="flex flex-col items-center">
          <Home className="w-8 h-8 mb-2" />
          <span className="text-3xl font-bold">{counts.sold}+</span>
          <span className="text-sm opacity-80">বিক্রি/ভাড়া সম্পন্ন</span>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 mb-2" />
          <span className="text-3xl font-bold">{counts.clients}+</span>
          <span className="text-sm opacity-80">সন্তুষ্ট ক্লায়েন্ট</span>
        </div>
        <div className="flex flex-col items-center">
          <Award className="w-8 h-8 mb-2" />
          <span className="text-3xl font-bold">{counts.years}+</span>
          <span className="text-sm opacity-80">বছরের অভিজ্ঞতা</span>
        </div>
      </div>
    </div>
  );
}