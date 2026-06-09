// src/lib/propertyUtils.js
import { properties } from '@/data/properties';

export function getProperties({ search = '', type = '', minPrice, maxPrice } = {}) {
  let filtered = [...properties];

  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(s) ||
      p.location.toLowerCase().includes(s)
    );
  }
  if (type && type !== 'সব') {
    filtered = filtered.filter(p => p.type === type);
  }
  if (minPrice) {
    filtered = filtered.filter(p => p.price >= Number(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter(p => p.price <= Number(maxPrice));
  }
  return filtered;
}

export function getFeaturedProperties() {
  return properties.filter(p => p.featured);
}

export function getPropertyById(id) {
  return properties.find(p => p.id === Number(id));
} 