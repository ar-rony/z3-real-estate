'use client';

import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  linkedin as Linkedin,   // ✅ এক্ষেত্রে ঠিক হয়ে যাবে
  twitter as Twitter,     // Twitter-এর জন্যও একই কাজ করো
} from 'lucide-react';

// ডামি পরিচালক তথ্য
const directors = [
  {
    id: 1,
    name: 'মোঃ রফিকুল ইসলাম',
    designation: 'প্রধান নির্বাহী কর্মকর্তা',
    phone: '01712345678',
    email: 'rafiqul@banglarealty.com',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'সালমা আক্তার',
    designation: 'পরিচালনা পর্ষদ সদস্য',
    phone: '01898765432',
    email: 'salma@banglarealty.com',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'জাকারিয়া আল গিফারী',
    designation: 'মার্কেটিং ডিরেক্টর',
    phone: '01911223344',
    email: 'tarek@banglarealty.com',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'মনির হোসেন',
    designation: 'মার্কেটিং ডিরেক্টর',
    phone: '01911223344',
    email: 'tarek@banglarealty.com',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ফর্ম ভ্যালিডেশন
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'নাম আবশ্যক';
    if (!formData.phone.trim()) {
      newErrors.phone = 'ফোন নম্বর আবশ্যক';
    } else if (!/^\d{11}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'বৈধ ১১ সংখ্যার মোবাইল নম্বর দিন';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'বৈধ ইমেইল দিন';
    }
    if (!formData.message.trim()) newErrors.message = 'বার্তা লিখুন';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // এখানে API কল বা ইমেইল পাঠানোর সিস্টেম বসাবে
    await new Promise((resolve) => setTimeout(resolve, 1500)); // সিমুলেশন
    console.log('কন্ট্যাক্ট ফর্ম ডাটা:', formData);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  // গুগল ম্যাপ এম্বেড URL – অফিস লোকেশন এখানে বসাবে
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902686614601!2d90.41168231535675!3d23.79136818457088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b3b2b2b2b%3A0x5d5b5b5b5b5b5b5b!2sGulshan%2C%20Dhaka%201212!5e0!3m2!1sbn!2sbd!4v1617635198171!5m2!1sbn!2sbd';

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4">
      {/* পেজ হেডিং */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">যোগাযোগ করুন</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          আপনার প্রশ্ন, পরামর্শ বা প্রপার্টি সংক্রান্ত যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন।
        </p>
      </div>

      {/* ১. কন্ট্যাক্ট ফর্ম + অফিস তথ্য */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* বাম পাশে স্মার্ট কন্ট্যাক্ট ফর্ম */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-xl dark:shadow-slate-900 border border-gray-100 dark:border-slate-700 p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300 mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">আপনার বার্তা পাঠানো হয়েছে!</h3>
              <p className="text-gray-500 dark:text-gray-400">আমরা দ্রুত প্রতিক্রিয়া জানাব।</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">আমাদের লিখুন</h2>

              {/* নাম */}
              <div className="relative">
                <label className="absolute -top-2.5 right-3 bg-white dark:bg-slate-800 px-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                  নাম <span className="text-red-400">*</span>
                </label>
                <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition">
                  <User className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="আপনার নাম"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full outline-none bg-transparent text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* ফোন */}
              <div className="relative">
                <label className="absolute -top-2.5 right-3 bg-white dark:bg-slate-800 px-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                  মোবাইল <span className="text-red-400">*</span>
                </label>
                <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition">
                  <Phone className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="01XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full outline-none bg-transparent text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* ইমেইল */}
              <div className="relative">
                <label className="absolute -top-2.5 right-3 bg-white dark:bg-slate-800 px-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                  ইমেইল <span className="text-gray-400 dark:text-gray-500">(ঐচ্ছিক)</span>
                </label>
                <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition">
                  <Mail className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full outline-none bg-transparent text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* বার্তা */}
              <div className="relative">
                <label className="absolute -top-2.5 right-3 bg-white dark:bg-slate-800 px-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                  বার্তা <span className="text-red-400">*</span>
                </label>
                <div className="flex items-start border border-gray-300 dark:border-slate-600 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition">
                  <MessageSquare className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2 mt-0.5" />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="আপনার প্রশ্ন বা মতামত লিখুন..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full outline-none bg-transparent text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                  />
                </div>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSubmitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
              </button>
            </form>
          )}
        </div>

        {/* ডান পাশে অফিস তথ্য ও ম্যাপ */}
        <div className="space-y-8">
          {/* অফিস অ্যাড্রেস ও কন্ট্যাক্ট তথ্য */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md dark:shadow-slate-900 border border-gray-200 dark:border-slate-700 p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" /> আমাদের অফিস
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-500" />
                <span>বাড়ি # ৫২, সড়ক # ১১, গুলশান অ্যাভিনিউ, ঢাকা ১২১২</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <a href="tel:+8801700000000" className="hover:text-blue-600 dark:hover:text-blue-400 transition">+880 1700-000000</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <a href="mailto:info@banglarealty.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition">info@banglarealty.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <span>রবি-বৃহঃ ৯:০০ AM - ৬:০০ PM</span>
              </p>
            </div>
          </div>

          {/* গুগল ম্যাপ */}
          <div className="overflow-hidden rounded-2xl shadow-md dark:shadow-slate-900 border border-gray-200 dark:border-slate-700">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="অফিস লোকেশন"
            ></iframe>
          </div>
        </div>
      </div>

      {/* ২. পরিচালক/টিম সেকশন */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">আমাদের পরিচালকমণ্ডলী</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">যারা আমাদের সাফল্যের পেছনে নিবেদিত</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director) => (
            <div
              key={director.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md dark:shadow-slate-900 border border-gray-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-800 transition p-6 text-center"
            >
              <div className="mx-auto w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900 mb-4">
                <img
                  src={director.photo}
                  alt={director.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{director.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{director.designation}</p>
              <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                <a
                  href={`tel:${director.phone}`}
                  className="flex items-center justify-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <Phone className="w-4 h-4" /> {director.phone}
                </a>
                <a
                  href={`mailto:${director.email}`}
                  className="flex items-center justify-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <Mail className="w-4 h-4" /> {director.email}
                </a>
              </div>
              {/* সোশ্যাল আইকন (ঐচ্ছিক)
              <div className="flex justify-center gap-4 mt-4 text-gray-400">
                <a href="#" className="hover:text-blue-600 transition"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-blue-600 transition"><Twitter className="w-5 h-5" /></a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}  