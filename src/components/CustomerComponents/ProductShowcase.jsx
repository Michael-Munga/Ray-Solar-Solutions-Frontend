import React from "react";
import ProductCard from "@/components/CustomerComponents/ProductCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useProducts } from "@/contexts/ProductsContext";

const ProductShowcase = () => {
  const { products } = useProducts();

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Solar Products
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed tracking-wide">
            A quick overview of top solar-powered lighting systems designed for
            home, commercial, and outdoor use.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id || index}
              className="group hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out rounded-lg"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="mt-16 text-center">
          <Button
            className="inline-flex items-center text-white font-medium px-6 py-3 rounded-md shadow-md transition-all duration-300 group"
            style={{
              backgroundColor: "#0a9586",
              border: "1px solid #0a9586",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#087e75")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0a9586")
            }
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>

  );
};

export default ProductShowcase;



