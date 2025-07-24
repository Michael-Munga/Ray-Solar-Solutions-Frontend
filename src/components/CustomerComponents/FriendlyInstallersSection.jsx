import React from "react";

export default function FriendlyInstallersSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 py-12 max-w-7xl mx-auto lg:gap-x-20">
      {/*  Text Content */}
      <div className="lg:w-1/2 space-y-6 self-center">
        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          The Friendliest Installers in <br /> the Country.
        </h1>

        <p className="text-gray-600">
          At Ray Solar Solutions, our aim is to make clean, affordable, and
          reliable solar energy accessible to everyone. We are committed to
          helping homes, schools, and businesses transition to sustainable power
          solutions that reduce energy costs and protect the environment.
        </p>

        <p className="text-gray-600">
          We strive to empower communities by lighting up lives especially in
          areas with limited access to electricity.
        </p>

        {/* Numbered List */}
        <div className="space-y-2 pt-4">
          <p>
            <span className="text-green-600 font-semibold">01 /</span>{" "}
            <span className="font-semibold">Collaborate with 100+ leading</span>
          </p>
          <p>
            <span className="text-green-600 font-semibold">02 /</span>{" "}
            <span className="font-semibold">
              100+ leading schools and companies
            </span>
          </p>
          <p>
            <span className="text-green-600 font-semibold">03 /</span>{" "}
            <span className="font-semibold">
              leading universities and companies
            </span>
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="relative lg:w-1/2 mt-10 lg:mt-0 self-center">
        <img
          src="https://i.pinimg.com/736x/a4/de/78/a4de7817f3e24cc8b5fabe43c56ec92e.jpg"
          //   https://i.pinimg.com/1200x/c6/fc/2c/c6fc2cb34a8d31fa75f3a63e67878e8c.jpg
          //   https://i.pinimg.com/736x/c2/05/4e/c2054eb26c1a7cf9fc9679cdcb12d214.jpg
          alt="Solar Panel on Globe"
          className="rounded-xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
}
