import React from "react";


import Hero from "./Hero";
import ProductShowcase from "./ProductShowcase";
import Features from "./Features";



import CallUsSection from "./TestimonialSection";
import FriendlyInstallersSection from "./FriendlyInstallersSection";
import SolarKits from "./SolarKits";

export default function Customer() {
  return (
    <div>

      <Hero />
      <ProductShowcase />
      <SolarKits/>
      <FriendlyInstallersSection />
      <Features />
      <CallUsSection />

    </div>
  );
}
