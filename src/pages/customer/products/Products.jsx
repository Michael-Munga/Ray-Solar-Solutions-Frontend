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
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else if (Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        } else {
          console.warn("Unexpected products data format:", res.data);
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err.message || err);
      });
  }, []);

  const categories = [
    "All",
    ...new Set(
      products.map((p) =>
        typeof p.category === "object"
          ? p.category?.name
          : p.category || "Uncategorized"
      )
    ),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => {
          const categoryName =
            typeof product.category === "object"
              ? product.category?.name
              : product.category;
          return categoryName === selectedCategory;
        });

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Product List
          </h1>
        </div>

        <div className="mb-6 text-center">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id || index}
              className="group hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out rounded-lg"
            >
              <ProductCard
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
