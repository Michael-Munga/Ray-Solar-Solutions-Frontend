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
  },
  {
    id: 2,
    name: 'Solar Garden Lights',
    description: 'Eco-friendly garden lights powered by solar energy.',
    price: 150,
    image: '/src/assets/solar-garden-lights.jpg',
    category: 'Lighting',
  },
  {
    id: 3,
    name: 'Solar Lantern',
    description: 'Portable solar lantern for outdoor use.',
    price: 80,
    image: '/src/assets/solar-lantern.jpg',
    category: 'Lighting',
  },
  {
    id: 4,
    name: 'Solar Street Light',
    description: 'High-efficiency solar street light for public areas.',
    price: 300,
    image: '/src/assets/solar-street-light.jpg',
    category: 'Lighting',
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
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
