import React from "react";
import SolutionCard from "@/components/CustomerComponents/SolutionCard";
import { Home, Building2, Factory, TreePine } from "lucide-react";

const solutions = [
  {
    id: "residential",
    title: "Residential Solutions",
    description:
      "Complete solar lighting systems for homes, gardens, and residential properties.",
    icon: Home,
    features: [
      "Garden pathway lighting",
      "Security lighting systems",
      "Outdoor entertainment areas",
      "Emergency backup lighting",
    ],
    benefits: [
      "Reduce electricity bills by up to 80%",
      "Automatic operation",
      "Weather-resistant design",
      "Easy DIY installation",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Solutions",
    description:
      "Scalable solar lighting for businesses, offices, and commercial complexes.",
    icon: Building2,
    features: [
      "Parking lot illumination",
      "Building perimeter lighting",
      "Signage lighting",
      "Emergency exit lighting",
    ],
    benefits: [
      "Lower operational costs",
      "Enhanced security",
      "Professional appearance",
      "Maintenance-free operation",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Solutions",
    description:
      "Heavy-duty solar lighting for factories, warehouses, and industrial facilities.",
    icon: Factory,
    features: [
      "High-intensity area lighting",
      "Hazardous location lighting",
      "Remote monitoring systems",
      "Backup power integration",
    ],
    benefits: [
      "24/7 reliable operation",
      "Reduced carbon footprint",
      "Compliance with safety standards",
      "Smart monitoring capabilities",
    ],
  },
  {
    id: "municipal",
    title: "Municipal Solutions",
    description:
      "Smart city lighting infrastructure for parks, streets, and public spaces.",
    icon: TreePine,
    features: [
      "Smart street lighting",
      "Park and recreation lighting",
      "Traffic signal integration",
      "Public safety lighting",
    ],
    benefits: [
      "Energy independence",
      "Smart city integration",
      "Public safety enhancement",
      "Sustainable development",
    ],
  },
];

const SolutionsSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Tailored Solutions
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the perfect solar lighting solution for your specific
          application and requirements.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.id} solution={solution} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
