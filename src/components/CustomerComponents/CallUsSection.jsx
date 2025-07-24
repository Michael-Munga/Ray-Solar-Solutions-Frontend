import React from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function CallUsSection() {
  return (
    <section className="bg-gradient-to-br from-sky-100/80 to-sky-50/90 backdrop-blur-sm py-20 border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4">
            Power that Doesn't Cost the Earth
          </h2>
          <p className="text-lg text-sky-800 mb-6">
            Need solar advice? Call us now at{" "}
            <span className="font-semibold text-green-700">
              +254 103 823251
            </span>{" "}
            or click below to request a call back.
          </p>
          <Button
            asChild
            className="group inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <a href="tel:07745593882">
              <PhoneCall className="h-5 w-5 group-hover:animate-pulse" />
              Call Us Today
            </a>
          </Button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/dd/d0/ef/ddd0ef43e77c6cef618d39a851cac8fa.jpg"
            alt="Wind turbines and trees"
            className="w-full max-w-md rounded-xl shadow-[0_20px_40px_rgba(125,211,252,0.3)] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
