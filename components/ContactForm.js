// src/components/ContactForm.js
'use client';

import { useState } from 'react';
import { User, Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm({ propertyTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    // ইনপুট পরিবর্তনের সাথে সাথে ওই ফিল্ডের এরর মুছে ফেলা
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // এখানে API কল বা সার্ভার অ্যাকশন দিতে পারো
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({...formData, property: propertyTitle}) });
    // সিমুলেশন
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('ফর্ম ডাটা:', { ...formData, property: propertyTitle });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">বার্তা পাঠানো হয়েছে!</h3>
        <p className="text-gray-500">আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
      </div>
    );
  }

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800">আগ্রহ প্রকাশ করুন</h3>
        <p className="text-sm text-gray-500 mt-1">
          <span className="font-medium text-blue-600">“{propertyTitle}”</span> সম্পর্কে জানতে ফর্মটি পূরণ করুন
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* নাম */}
        <div className="relative">
          <label className="absolute -top-2.5 right-3 bg-white px-1 text-xs font-medium text-gray-600">
            নাম <span className="text-red-400">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="আপনার নাম"
              value={formData.name}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* ফোন */}
        <div className="relative">
          <label className="absolute -top-2.5 right-3 bg-white px-1 text-xs font-medium text-gray-600">
            মোবাইল নম্বর <span className="text-red-400">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
            <Phone className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="01XXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* ইমেইল (অপশনাল) */}
        <div className="relative">
          <label className="absolute -top-2.5 right-3 bg-white px-1 text-xs font-medium text-gray-600">
            ইমেইল <span className="text-gray-400">(ঐচ্ছিক)</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* বার্তা */}
        <div className="relative">
          <label className="absolute -top-2.5 right-3 bg-white px-1 text-xs font-medium text-gray-600">
            আপনার বার্তা <span className="text-red-400">*</span>
          </label>
          <div className="flex items-start border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
            <MessageSquare className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
            <textarea
              name="message"
              rows="4"
              placeholder={`"${propertyTitle}" সম্পর্কে আপনার প্রশ্ন লিখুন...`}
              value={formData.message}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 resize-none"
            />
          </div>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* সাবমিট বাটন */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
    </div>
  );
}