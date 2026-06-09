'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // অটো-প্লে
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* ওভারলে */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* কন্টেন্ট */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          আপনার স্বপ্নের বাড়ি খুঁজুন
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow">
          বাংলাদেশের সেরা প্রপার্টি এক জায়গায়—কিনুন, ভাড়া নিন, সম্পূর্ণ নির্ভরযোগ্য প্লাটফর্মে।
        </p>
        <Link
          href="/properties"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg"
        >
          সব প্রপার্টি দেখুন
        </Link>
      </div>

      {/* নেভিগেশন ডট */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}