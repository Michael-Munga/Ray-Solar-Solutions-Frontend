import React from 'react';

const ProductDetails = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>
      <div className="bg-pink-100 rounded-lg shadow p-4">
        <img
          src="/src/assets/solar-lantern.jpg"
          alt="Solar Lantern"
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2 text-pink-900">Solar Lantern</h2>
        <p className="text-pink-800 mb-4">
          Portable solar lantern for outdoor use.
        </p>
        <p className="text-lg font-bold text-pink-700">$80</p>
      </div>
    </div>
  );
};

export default ProductDetails;
