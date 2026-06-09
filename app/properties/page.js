'use client'; // এটা ক্লায়েন্ট কম্পোনেন্ট

import { useState, useEffect } from 'react';
import { getProperties } from '@/lib/propertyUtils';
import PropertyCard from '@/components/PropertyCard';
import { Search } from 'lucide-react';

export default function PropertiesPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('সব');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [properties, setProperties] = useState([]);

  // সার্চ/ফিল্টার করা ডাটা লোড
  useEffect(() => {
    const filtered = getProperties({
      search,
      type: typeFilter,
      minPrice,
      maxPrice,
    });
    setProperties(filtered);
  }, [search, typeFilter, minPrice, maxPrice]);

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className="text-3xl font-bold mb-8">প্রপার্টি সমূহ</h1>

      {/* Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8 border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ঠিকানা বা টাইটেল সার্চ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Type Filter */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="সব">সব ধরন</option>
          <option value="বিক্রি">বিক্রি</option>
          <option value="ভাড়া">ভাড়া</option>
        </select>

        {/* Min Price */}
        <input
          type="number"
          placeholder="সর্বনিম্ন মূল্য"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="সর্বোচ্চ মূল্য"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Results */}
      {properties.length === 0 ? (
        <p className="text-gray-500">কোনো প্রপার্টি পাওয়া যায়নি।</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}