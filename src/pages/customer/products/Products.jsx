"use client";

import React, { useEffect, useState } from "react";
import axios from "@/services/api"; 
import ProductCard from "@/components/CustomerComponents/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error("Failed to fetch products:", err.message || err);
      });
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category || "Uncategorized")),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>

      <div className="mb-6">
        <label
          htmlFor="category"
          className="mr-2 font-semibold text-yellow-900"
        >
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
            productId={product.id} 
            name={product.name}
            description={product.short_description || product.description}
            price={product.price}
            originalPrice={product.original_price}
            image={product.image_url}
            rating={product.rating}
            reviewCount={product.num_reviews}
            features={product.tags || []}
            isPopular={product.is_popular}
            wattage={product.wattage}
            batteryLife={product.duration}
            warranty={product.warranty_period}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
