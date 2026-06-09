// src/components/PropertyCard.js
import Link from 'next/link';
import { MapPin, Bed, Bath, Ruler, Tag } from 'lucide-react';

export default function PropertyCard({ property }) {
  const priceFormat = new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link href={`/properties/${property.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
            {property.type}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
            {property.title}
          </h3>
          <p className="text-gray-500 text-sm flex items-center gap-1 mb-2">
            <MapPin className="w-4 h-4" /> {property.location}
          </p>
          <p className="text-blue-600 font-bold text-xl mb-3">
            {priceFormat}
            {property.type === 'ভাড়া' && <span className="text-sm font-normal">/মাস</span>}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.bedrooms} বেড</span>
            )}
            <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.bathrooms} বাথ</span>
            <span className="flex items-center gap-1"><Ruler className="w-4 h-4" /> {property.area} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
}