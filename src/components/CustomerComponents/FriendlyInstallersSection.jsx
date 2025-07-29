import React from "react";

export default function FriendlyInstallersSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-12 lg:gap-x-20">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            The Friendliest Installers  <br /> in the Country.
          </h1>

          <p className="text-gray-700 text-lg">
            At <span className="text-green-700 font-semibold">Ray Solar Solutions</span>, our aim is to make clean, affordable,
            and reliable solar energy accessible to everyone. We are committed
            to helping homes, schools, and businesses transition to sustainable
            power solutions that reduce energy costs and protect the environment.
          </p>

          <p className="text-gray-700 text-lg">
            We strive to empower communities by lighting up lives, especially in
            areas with limited access to electricity.
          </p>

          {/* Numbered List */}
          <div className="space-y-3 pt-4 text-lg">
            <p>
              <span className="text-green-600 font-semibold">01 /</span>{" "}
              <span className="font-medium">Collaborate with 100+ leading institutions</span>
            </p>
            <p>
              <span className="text-green-600 font-semibold">02 /</span>{" "}
              <span className="font-medium">Partner with top schools and companies</span>
            </p>
            <p>
              <span className="text-green-600 font-semibold">03 /</span>{" "}
              <span className="font-medium">Empower communities across the nation</span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="https://i.pinimg.com/736x/a4/de/78/a4de7817f3e24cc8b5fabe43c56ec92e.jpg"
            alt="Solar Panel on Globe"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
