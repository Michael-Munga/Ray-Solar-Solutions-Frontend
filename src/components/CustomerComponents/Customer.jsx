import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import ProductShowcase from "./ProductShowcase";
import Features from "./Features";
import Footer from "./Footer";
import SolarKits from "./SolarKits";
import CallUsSection from "./CallUsSection";
import FriendlyInstallersSection from "./FriendlyInstallersSection";

export default function Customer() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <SolarKits />
      <FriendlyInstallersSection />
      <Features />
      <CallUsSection />
      <Footer />
    </div>
  );
}
