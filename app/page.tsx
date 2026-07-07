import HeroSlider from '@/components/HeroSlider';
import PropertyCounter from '@/components/PropertyCounter';
import Testimonials from '@/components/Testimonials';
import SubscribeForm from '@/components/SubscribeForm';
import PropertyCard from '@/components/PropertyCard';
import { getFeaturedProperties } from '@/lib/propertyUtils';
import { properties } from '@/data/properties'; // সরাসরি ডেটা ইম্পোর্ট
import Link from 'next/link';

export default function HomePage() {
  const featured = getFeaturedProperties();

  // সর্বশেষ ৩টি প্রপার্টি (শেষের দিক থেকে) স্লাইডের জন্য
  const latestSlides = properties.slice(-3).map(p => ({
    id: p.id,
    image: p.image,
    title: p.title,
  }));
  // যদি শেষ ৩ না হয়ে প্রথম ৩ নিতে চাও তবে properties.slice(0,3)

  return (
    <div className="-mt-8"> {/* হিরো যেন ন্যাভবারের গ্যাপ না রাখে */}
      <HeroSlider slides={latestSlides} />

      {/* প্রপার্টি কাউন্টার */}
      <PropertyCounter />

      {/* ফিচার্ড প্রপার্টি */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">✨ ফিচার্ড প্রপার্টি</h2>
        {featured.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center">কোনো ফিচার্ড প্রপার্টি নেই</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
        <div className="text-center mt-10">
          <Link
            href="/properties"
            className="inline-block border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-semibold py-3 px-8 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition"
          >
            সব প্রপার্টি দেখুন
          </Link>
        </div>
      </section>

      {/* টেস্টিমোনিয়াল */}
      <Testimonials />

      {/* সাবস্ক্রাইব ফর্ম */}
      <SubscribeForm />
    </div>
  );
}