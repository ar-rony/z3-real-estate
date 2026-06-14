import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'আসিফ মাহমুদ',
    role: 'গুলশানের বাসিন্দা',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    text: 'বাংলা রিয়েলটির মাধ্যমে খুব সহজেই পছন্দের ফ্ল্যাট পেয়েছি। এদের সার্ভিস অসাধারণ এবং প্রফেশনাল।',
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    name: 'নুসরাত জাহান',
    role: 'ধানমন্ডি, ঢাকা',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
    text: 'বাড়ি ভাড়া নেওয়ার পুরো প্রক্রিয়াটা খুব সহজ ও স্বচ্ছ করেছে। টিম অসাধারণ এবং সহায়ক। সবাইকে রিকমেন্ড করি।',
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    name: 'শরীফুল ইসলাম',
    role: 'চট্টগ্রাম',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
    text: 'অফিস স্পেস কিনতে পেরে খুব খুশি। প্রফেশনাল টিম, সৎ ডিলিং, এবং দুর্দান্ত সার্ভিস। সবার জন্য রিকমেন্ডেড।',
    rating: 4,
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-linear-to-b from-white dark:from-slate-950 to-slate-50 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest">
              আমাদের ক্লায়েন্টরা কী বলে
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            গ্রাহক সন্তুষ্টি আমাদের লক্ষ্য
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            হাজারো সন্তুষ্ট গ্রাহকদের সাফল্যের গল্প শুনুন
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 opacity-20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < t.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed relative z-10">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-transparent via-gray-200 dark:via-slate-700 to-transparent mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-600 dark:border-blue-400"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                    {t.verified && (
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            এখনই আমাদের সাথে যোগ দিন এবং আপনার স্বপ্ন বাস্তবায়িত করুন
          </p>
          <a
            href="/properties"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            প্রপার্টি এক্সপ্লোর করুন
          </a>
        </div>
      </div>
    </section>
  );
}
