import React, { useState } from 'react';
import ProductCard from '../../components/CustomerComponents/ProductCard';
import { useCart } from '../../contexts/CartContext';

const products = [
  {
    id: 1,
    name: 'Solar Home System',
    description: 'Reliable solar power system for your home.',
    price: 1200,
    image: '/src/assets/solar-home-system.jpg',
    category: 'Home Systems',
    rating: 4.5,
    reviewCount: 120,
    features: ['Energy Efficient', 'Easy Installation'],
    isPopular: true,
    wattage: '500W',
    batteryLife: '10 hours',
    warranty: '5 years',
  },
  {
    id: 2,
    name: 'Solar Garden Lights',
    description: 'Eco-friendly garden lights powered by solar energy.',
    price: 150,
    image: '/src/assets/solar-garden-lights.jpg',
    category: 'Lighting',
    rating: 4.2,
    reviewCount: 80,
    features: ['Waterproof', 'Long-lasting'],
    wattage: '20W',
    batteryLife: '8 hours',
    warranty: '2 years',
  },
  {
    id: 3,
    name: 'Solar Lantern',
    description: 'Portable solar lantern for outdoor use.',
    price: 80,
    image: '/src/assets/solar-lantern.jpg',
    category: 'Lighting',
    rating: 4.0,
    reviewCount: 50,
    features: ['Lightweight', 'Rechargeable'],
    wattage: '10W',
    batteryLife: '6 hours',
    warranty: '1 year',
  },
  {
    id: 4,
    name: 'Solar Street Light',
    description: 'High-efficiency solar street light for public areas.',
    price: 300,
    image: '/src/assets/solar-street-light.jpg',
    category: 'Lighting',
    rating: 4.3,
    reviewCount: 70,
    features: ['Durable', 'High Brightness'],
    wattage: '100W',
    batteryLife: '12 hours',
    warranty: '3 years',
  },
  {
    id: 5,
    name: 'Solar Panel Kit',
    description: 'Complete solar panel kit for residential use.',
    price: 2000,
    image: '/src/assets/solar-panel-kit.jpg',
    category: 'Home Systems',
    rating: 4.7,
    reviewCount: 95,
    features: ['High Efficiency', 'Easy Setup', 'Durable'],
    isPopular: true,
    wattage: '1000W',
    batteryLife: 'N/A',
    warranty: '10 years',
  },
  {
    id: 6,
    name: 'Solar Battery Storage',
    description: 'Reliable battery storage for solar energy.',
    price: 800,
    image: '/src/assets/solar-battery-storage.jpg',
    category: 'Storage',
    rating: 4.4,
    reviewCount: 60,
    features: ['Long Life', 'Safe', 'High Capacity'],
    wattage: 'N/A',
    batteryLife: 'N/A',
    warranty: '5 years',
  },
];

const ProductList = () => {
  const { addToCart } = useCart();
  const categories = ['All', ...new Set(products.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="mb-6">
        <label htmlFor="category" className="mr-2 font-semibold text-yellow-900">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-yellow-400 rounded p-1"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            rating={product.rating}
            reviewCount={product.reviewCount}
            features={product.features}
            isPopular={product.isPopular}
            wattage={product.wattage}
            batteryLife={product.batteryLife}
            warranty={product.warranty}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
