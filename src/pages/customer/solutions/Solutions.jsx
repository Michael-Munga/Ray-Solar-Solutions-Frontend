import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

import SolutionsSection from "./SolutionsSection";
import Features from "@/components/CustomerComponents/Features";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Solar Lighting Solutions for Every Need
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto mb-8">
            From residential gardens to industrial complexes, we provide
            comprehensive solar lighting solutions tailored to your specific
            requirements.
          </p>
          
        </div>
      </section>

      {/* Solutions Grid */}
      <SolutionsSection />
      <Features />
    

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-100 p-12 rounded-2xl shadow-card">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-green-700 mb-8">
              Get a free consultation and custom quote for your solar lighting
              project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
