import React from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="bg-white py-20 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <Quote className="text-[#0a9586] w-10 h-10 mb-2" />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            what they say <br /> about RSS
          </h2>
          <p className="text-gray-600 text-lg">
            More than 3000 users have been helped by Ray Solar Solutions.
          </p>
        </div>

        {/* Right Column - Testimonial Card */}
        <div className="bg-[#f0fbfa] rounded-2xl p-8 shadow-md relative">
          <p className="text-[#0a9586] font-semibold mb-3">What they say</p>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            “At Ray Solar Solutions, we believe everyone deserves reliable,
            sustainable energy. We provide innovative solar lighting and power
            solutions tailored to your home, business, or community. Whether
            you're looking to cut electricity costs, go green, or light up
            off-grid areas — we’ve got you covered.”
          </p>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Resky Fernanda"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Resky Fernanda</p>
              <p className="text-sm text-gray-500">
                Product Designer at Tokopedia
              </p>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            <button className="p-2 bg-white border rounded-full hover:bg-gray-100 transition">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button className="p-2 bg-white border rounded-full hover:bg-gray-100 transition">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
