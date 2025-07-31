"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-200 via-green-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Illuminating Tomorrow with{" "}
              <span className="text-green-600">Solar Innovation</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              For over 15 years, we’ve pioneered sustainable lighting
              technology, helping thousands reduce their carbon footprint while
              saving on energy.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://i.pinimg.com/1200x/47/a5/0d/47a50d3d4b660027f38d413e16439627.jpg"
                alt="Solar panels and lighting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
