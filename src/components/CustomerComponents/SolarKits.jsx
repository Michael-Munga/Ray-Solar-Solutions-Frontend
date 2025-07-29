import React from "react";
import SolarKitsCard from "./SolarKitsCard";

export default function SolarKits() {
  const solarKits = [
    {
      type: "Off Grid",
      description:
        "These systems are designed for autonomous power generation and supply, operating independently of the public utility grid. They typically integrate solar panels with battery storage to provide electricity in areas without grid access or for applications requiring complete energy self-sufficiency.",
      image:
        "https://i.pinimg.com/1200x/b7/5e/c7/b75ec7f40b23c79e0cf63a7ce62d9caf.jpg",
    },
    {
      type: "On Grid",
      description:
        "Grid-tied solar systems are interconnected with the existing electrical utility grid. They allow property owners to use solar-generated electricity, with any excess power being fed back into the grid, often under net metering arrangements. Grid power acts as a continuous backup.",
      image:
        "https://i.pinimg.com/736x/67/c8/62/67c862cf6d0289ac7215d606aa40cba5.jpg",
    },
    {
      type: "Hybrid",
      description:
        "Hybrid solar solutions combine grid connectivity with integrated battery storage. This configuration allows for optimized energy management, enabling self-consumption of solar power, providing backup during grid outages, and offering flexibility in managing energy flows between solar, battery, and the utility grid.",
      image:
        "https://i.pinimg.com/1200x/6f/e6/bb/6fe6bb7ce23ad80956bab10b57eea863.jpg",
    },
  ];

  return (
    <section className="py-20 bg-yellow-50/90 backdrop-blur-sm border-b border-yellow-200">
      <div>
        {/* section header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Solar Kits
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete Solar system kits, ready for installation. They can be used
            to supplement <br /> on-grid housing, a complete self-sustaining home
            or a combination of the two.
          </p>
        </div>
        {/* solar kits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl xl:max-w-7xl mx-auto">
          {solarKits.map((kit) => (
            <SolarKitsCard
              key={kit.type}
              image={kit.image}
              type={kit.type}
              description={kit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

