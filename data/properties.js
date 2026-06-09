// src/data/properties.js
export const properties = [
  {
    id: 1,
    title: "ঢাকার গুলশানে বিলাসবহুল অ্যাপার্টমেন্ট",
    location: "গুলশান, ঢাকা",
    lat: 23.7936,   // ✅ নতুন
    lng: 90.4043,   // ✅ নতুন
    price: 25000000, // টাকা
    type: "বিক্রি", // 'বিক্রি' বা 'ভাড়া'
    bedrooms: 3,
    bathrooms: 2,
    area: 1800, // বর্গফুট
    description: "সম্পূর্ণ ফার্নিশড, ৩ বেডরুম, ২ বাথরুম, সুইমিং পুল ও জিম সুবিধা।",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    featured: true
  },
  {
    id: 2,
    title: "ধানমন্ডিতে সুন্দর ফ্ল্যাট ভাড়া",
    location: "ধানমন্ডি, ঢাকা",
    lat: 23.7457,
    lng: 90.3840,
    price: 35000,
    type: "ভাড়া",
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    description: "পরিবারের জন্য আদর্শ, কাছেই স্কুল-কলেজ, মার্কেট।",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    featured: false
  },
  {
    id: 3,
    title: "চট্টগ্রাম নগরীর প্রিমিয়াম অফিস স্পেস",
    location: "আগ্রাবাদ, চট্টগ্রাম",
    lat: 22.3278,
    lng: 91.8231,
    price: 12000000,
    type: "বিক্রি",
    bedrooms: 0,
    bathrooms: 2,
    area: 2500,
    description: "বাণিজ্যিক এলাকায় আধুনিক অফিস, সব সুবিধা সহ।",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    featured: true
  },
  // আরো কয়েকটা প্রপার্টি যোগ করতে পারো
  {
    id: 4,
    title: "সিলেটের পাহাড়ি ভিউ ভিলা",
    location: "শাহজালাল উপশহর, সিলেট",
    lat: 24.8949,
    lng: 91.8687,
    price: 7500000,
    type: "বিক্রি",
    bedrooms: 4,
    bathrooms: 3,
    area: 3000,
    description: "নিরিবিলি পরিবেশে দৃষ্টিনন্দন ভিলা, বাগান সহ।",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    featured: false
  },
  {
    id: 5,
    title: "দিগন্ত টাওয়ার",
    location: "সাগুপতা হাউজিং, মিরপুর",
    lat: 24.8949,
    lng: 91.8687,
    price: 7500000,
    type: "শেয়ার বিক্রয়",
    bedrooms: 4,
    bathrooms: 3,
    area: 3000,
    description: "সাগুপতা হাউজিং এ অত্যন্ত মনোরম পরিবেশে আপনার সপ্নের নিবাস গড়তে আজই বুকিং দিন",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    featured: true
  }
];

