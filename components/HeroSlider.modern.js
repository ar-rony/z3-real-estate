'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Autoplay
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isAutoplay]);

  if (!slides || slides.length === 0) return null;

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Slides */}
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
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <div className="space-y-6 max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-2xl leading-tight">
            আপনার স্বপ্নের বাড়ি খুঁজুন
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg opacity-95">
            বাংলাদেশের সেরা প্রপার্টি এক জায়গায়—কিনুন, ভাড়া নিন, সম্পূর্ণ নির্ভরযোগ্য প্লাটফর্মে।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/properties"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-2xl text-lg flex items-center justify-center gap-2"
            >
              সব প্রপার্টি দেখুন
              <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition backdrop-blur-sm border border-white/30 text-lg">
              আরও জানুন
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition backdrop-blur-sm border border-white/30"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition backdrop-blur-sm border border-white/30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${
              i === current
                ? 'bg-white w-10 h-3'
                : 'bg-white/50 hover:bg-white/75 w-3 h-3'
            } rounded-full`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold border border-white/30">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}
