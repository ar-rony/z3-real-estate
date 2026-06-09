import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'আসিফ মাহমুদ',
    role: 'গুলশানের বাসিন্দা',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    text: 'বাংলা রিয়েলটির মাধ্যমে খুব সহজেই পছন্দের ফ্ল্যাট পেয়েছি। এদের সার্ভিস অসাধারণ।',
    rating: 5,
  },
  {
    id: 2,
    name: 'নুসরাত জাহান',
    role: 'ধানমন্ডি, ঢাকা',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    text: 'বাড়ি ভাড়া নেওয়ার পুরো প্রক্রিয়াটা খুব সহজ ও স্বচ্ছ করেছে। ধন্যবাদ!',
    rating: 5,
  },
  {
    id: 3,
    name: 'শরীফুল ইসলাম',
    role: 'চট্টগ্রাম',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    text: 'অফিস স্পেস কিনতে পেরে খুব খুশি। প্রফেশনাল টিম, রিকমেন্ডেড।',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">ক্রেতাদের মতামত</h2>
          <p className="text-gray-500 mt-2">আমাদের ক্লায়েন্টদের অভিজ্ঞতা</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-2xl shadow-md border">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}