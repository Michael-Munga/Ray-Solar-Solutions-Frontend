import React from "react";

import Hero from "./Hero";
import ProductShowcase from "./ProductShowcase";
import Features from "./Features";

import SolarKits from "./SolarKits";
import CallUsSection from "./CallUsSection";
import FriendlyInstallersSection from "./FriendlyInstallersSection";

export default function Customer() {
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <SolarKits />
      <FriendlyInstallersSection />
      <Features />
      <CallUsSection />
    </div>
  );
}
