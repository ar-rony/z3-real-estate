// src/components/PropertyCard.js
import Link from 'next/link';
import { MapPin, Bed, Bath, Ruler, Heart } from 'lucide-react';
import { useState } from 'react';

export default function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const priceFormat = new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link href={`/properties/${property.id}`} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-linear-to-br from-blue-400 to-purple-500">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Type Badge */}
          <span className="absolute top-4 left-4 bg-linear-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            {property.type}
          </span>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 dark:bg-slate-700/90 hover:bg-white dark:hover:bg-slate-600 shadow-lg transition-all"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
            {property.title}
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            {property.location}
          </p>

          {/* Price */}
          <div className="bg-linear-to-r from-blue-50 dark:from-blue-950 to-purple-50 dark:to-purple-950 rounded-lg p-3 mb-4">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-xl">
              {priceFormat}
              {property.type === 'ভাড়া' && (
                <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-1">/মাস</span>
              )}
            </p>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-slate-700 pt-4">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400">
                <Bed className="w-4 h-4" /> <span className="font-medium">{property.bedrooms}</span>
              </span>
            )}
            <span className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400">
              <Bath className="w-4 h-4" /> <span className="font-medium">{property.bathrooms}</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400">
              <Ruler className="w-4 h-4" /> <span className="font-medium">{property.area}</span>
            </span>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="px-5 py-4 bg-linear-to-r from-blue-50/50 dark:from-blue-950/30 to-purple-50/50 dark:to-purple-950/30 border-t border-gray-100 dark:border-slate-700">
          <button className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg">
            বিস্তারিত দেখুন →
          </button>
        </div>
      </div>
    </Link>
  );
}
