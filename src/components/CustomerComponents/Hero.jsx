import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Leaf, Sun, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="src/assets/upscalemedia-transformed.jpg"
          alt="Rooftop solar panels during sunset"
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-28 sm:py-32">
        <div className="max-w-2xl ml-6 sm:ml-10 md:ml-16 lg:ml-20 space-y-8 animate-fade-in select-none">
          {/* Green Sustainable Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full border border-green-200 font-medium text-sm shadow-sm">
            <Leaf className="h-4 w-4" />
            <span>Sustainable Energy Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Lighting the Future <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #febc23 0%, #febc23 100%)",
              }}
            >
              One Roof at a Time
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Reliable. Affordable. Clean. <br />
            Discover solar-powered lighting solutions designed to empower homes,
            businesses, and communities with energy independence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {/* Explore Products */}
            <Button
              size="lg"
              className="text-white px-6 py-3 text-base font-semibold shadow-md group"
              style={{
                backgroundImage: "linear-gradient(to right, #febc23 0%, #febc23 100%)",
              }}
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Contact Us */}
            <Button
              size="lg"
              className="text-white px-6 py-3 text-base font-semibold flex items-center"
              style={{
                backgroundImage: "linear-gradient(to right, #0a9586 0%, #0a9586 100%)",
              }}
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/20 mt-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Sun className="h-6 w-6 text-amber-400 mr-2" />
                <span className="text-2xl font-bold">50K+</span>
              </div>
              <p className="text-sm text-white/80">Solar Lights Sold</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Users className="h-6 w-6 text-cyan-400 mr-2" />
                <span className="text-2xl font-bold">25K+</span>
              </div>
              <p className="text-sm text-white/80">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Leaf className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-2xl font-bold">100%</span>
              </div>
              <p className="text-sm text-white/80">Clean Energy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

