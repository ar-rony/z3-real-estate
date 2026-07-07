// src/app/properties/[id]/page.js
import { getPropertyById } from '@/lib/propertyUtils';
import { notFound } from 'next/navigation';
import { MapPin, Bed, Bath, Ruler, Tag } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

// 🔥 ডায়নামিক মেটাডাটা জেনারেটর
export async function generateMetadata({ params }) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return {
      title: 'প্রপার্টি পাওয়া যায়নি',
      description: 'আপনার অনুরোধ করা প্রপার্টি খুঁজে পাওয়া যায়নি।',
    };
  }

  return {
    title: `${property.title} - ঢাকা ল্যান্ডমার্ক লিমিটেড`,
    description: property.description.substring(0, 160), // প্রথম ১৬০ অক্ষর
    openGraph: {
      title: property.title,
      description: property.description.substring(0, 160),
      images: [
        {
          url: property.image,
          width: 800,
          height: 600,
          alt: property.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: property.title,
      description: property.description.substring(0, 160),
      images: [property.image],
    },
  };
}

// নিচের অংশ তোমার আগের PropertyDetailPage কম্পোনেন্ট (async)
export default async function PropertyDetailPage({ params }) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }


  const priceFormat = new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0,
  }).format(property.price);

    // গুগল ম্যাপ এম্বেড URL (API কী ছাড়া)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${property.lat},${property.lng}&z=15&output=embed`;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Link href="/properties" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
        ← প্রপার্টি তালিকায় ফিরুন
      </Link>

      {/* Image */}
      <div className="rounded-xl overflow-hidden mb-8 h-96 border border-gray-200 dark:border-slate-700">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{property.title}</h1>
            <p className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mt-2">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" /> {property.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 bg-gray-100 dark:bg-slate-800 p-4 rounded-lg text-gray-700 dark:text-gray-300">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-2"><Bed className="w-5 h-5 text-blue-600 dark:text-blue-400"/> {property.bedrooms} বেডরুম</div>
            )}
            <div className="flex items-center gap-2"><Bath className="w-5 h-5 text-blue-600 dark:text-blue-400"/> {property.bathrooms} বাথরুম</div>
            <div className="flex items-center gap-2"><Ruler className="w-5 h-5 text-blue-600 dark:text-blue-400"/> {property.area} sqft</div>
            <div className="flex items-center gap-2"><Tag className="w-5 h-5 text-blue-600 dark:text-blue-400"/> {property.type}</div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {priceFormat}
              {property.type === 'ভাড়া' && <span className="text-base font-normal text-gray-600 dark:text-gray-400">/মাস</span>}
            </h2>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">বিবরণ</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{property.description}</p>
          </div>

        {/* Google Map Embeded  */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">📍 লোকেশন</h3>
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm dark:shadow-slate-900">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${property.title} এর ম্যাপ`}
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {property.location} (আনুমানিক অবস্থান)
            </p>
          </div>
         
        </div>
        {/* Sidebar: Contact Form */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900 border border-gray-200 dark:border-slate-700 p-6 h-fit sticky top-24">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">আগ্রহী?</h3>
          <ContactForm propertyTitle={property.title} />
        </div>
      </div>
    </div>
  );
}