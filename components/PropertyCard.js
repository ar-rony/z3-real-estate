'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Bed, Bath, Ruler, X, Phone, Mail } from 'lucide-react';

export default function PropertyCard({ property }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const priceFormat = new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0,
  }).format(property.price);

  const handleCardClick = (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div onClick={handleCardClick} className="cursor-pointer group">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900 overflow-hidden hover:shadow-md dark:hover:shadow-lg transition border border-gray-100 dark:border-slate-700">
          <div className="relative h-48 overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 right-3 bg-blue-600 dark:bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
              {property.type}
            </span>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1 line-clamp-2">
              {property.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1 mb-2">
              <MapPin className="w-4 h-4" /> {property.location}
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-bold text-xl mb-3">
              {priceFormat}
              {property.type === 'ভাড়া' && <span className="text-sm font-normal">/মাস</span>}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              {property.bedrooms > 0 && (
                <span className="flex items-center gap-1">
                  <Bed className="w-4 h-4" /> {property.bedrooms} বেড
                </span>
              )}
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> {property.bathrooms} বাথ
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-4 h-4" /> {property.area} sqft
              </span>
            </div>
            <Link
              href={`/properties/${property.id}`}
              className="mt-4 hidden md:block w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white py-2 rounded-lg text-center transition font-medium"
            >
              বিস্তারিত দেখুন
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">প্রপার্টি বিস্তারিত</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="relative h-64 overflow-hidden rounded-xl">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-blue-600 dark:bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {property.type}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {property.location}
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">মূল্য</p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {priceFormat}
                  {property.type === 'ভাড়া' && <span className="text-lg font-normal">/মাস</span>}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {property.bedrooms > 0 && (
                  <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                    <Bed className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <p className="font-bold text-lg text-gray-900 dark:text-white">{property.bedrooms}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">বেডরুম</p>
                  </div>
                )}
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                  <Bath className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="font-bold text-lg text-gray-900 dark:text-white">{property.bathrooms}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">বাথরুম</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                  <Ruler className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="font-bold text-lg text-gray-900 dark:text-white">{property.area}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">sqft</p>
                </div>
              </div>

              {property.description && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">বিবরণ</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {property.description}
                  </p>
                </div>
              )}

              <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">যোগাযোগ করুন</h4>
                <div className="space-y-3">
                  {property.phone && (
                    <a
                      href={`tel:${property.phone}`}
                      className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
                    >
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-900 dark:text-white font-medium">{property.phone}</span>
                    </a>
                  )}
                  {property.email && (
                    <a
                      href={`mailto:${property.email}`}
                      className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
                    >
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-900 dark:text-white font-medium text-sm">{property.email}</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/properties/${property.id}`}
                  className="flex-1 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white py-3 rounded-lg text-center font-semibold transition"
                >
                  সম্পূর্ণ বিবরণ
                </Link>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-900 dark:text-white py-3 rounded-lg font-semibold transition"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
