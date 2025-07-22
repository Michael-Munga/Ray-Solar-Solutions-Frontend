import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import ProductShowcase from "./ProductShowcase";
import Features from "./Features";
import Footer from "./Footer";

export default function Customer() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <Footer />
    </div>
  );
}
