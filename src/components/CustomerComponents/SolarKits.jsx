import React from "react";

export default function SolarKits() {
    const solarKits = [
      {
        type: "Off Grid",
        description:
          "These systems are designed for autonomous power generation and supply, operating independently of the public utility grid. They typically integrate solar panels with battery storage to provide electricity in areas without grid access or for applications requiring complete energy self-sufficiency.",
        image: "",
      },
      {
        type: "On Grid",
        description:
          "Grid-tied solar systems are interconnected with the existing electrical utility grid. They allow property owners to use solar-generated electricity, with any excess power being fed back into the grid, often under net metering arrangements. Grid power acts as a continuous backup.",
        image: "",
      },
      {
        type: "Hybrid",
        description:
          "Hybrid solar solutions combine grid connectivity with integrated battery storage. This configuration allows for optimized energy management, enabling self-consumption of solar power, providing backup during grid outages, and offering flexibility in managing energy flows between solar, battery, and the utility grid.",
        image: "",
      },
    ];
  return (
    <section className="py-20 bg-white">
          <div>
              {/* section header */}
        <div>
          <h1>Solar Kits</h1>
          <p>
            Complete Solar system kits,ready for installation.They Can be used
            to suppliment on-grid housing, a complete self-sustaining home or a
            combination of the two
          </p>
        </div>
      </div>
    </section>
  );
}
