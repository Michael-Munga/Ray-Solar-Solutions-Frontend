import ProductCard from "@/components/CustomerComponents/ProductCard";
import solarGardenLights from "@/assets/solar-garden-lights.jpg";
import solarStreetLight from "@/assets/solar-street-light.jpg";
import solarLantern from "@/assets/solar-lantern.jpg";
import solarHomeSystem from "@/assets/solar-home-system.jpg";

const featuredProducts = [
  {
    name: "Solar Garden Lights Pro",
    description:
      "Premium LED garden lights with automatic dusk-to-dawn operation and weather-resistant design.",
    price: 89,
    originalPrice: 129,
    image: solarGardenLights,
    rating: 4.8,
    reviewCount: 156,
    features: ["Waterproof", "Auto On/Off", "Long Battery"],
    isPopular: true,
    wattage: "5W LED",
    batteryLife: "12 hours",
    warranty: "2 years",
  },
  {
    name: "Smart Street Light",
    description:
      "Intelligent solar street lighting with motion sensors and remote monitoring capabilities.",
    price: 299,
    originalPrice: 399,
    image: solarStreetLight,
    rating: 4.9,
    reviewCount: 89,
    features: ["Motion Sensor", "Smart Control", "High Brightness"],
    wattage: "30W LED",
    batteryLife: "10 hours",
    warranty: "3 years",
  },
  {
    name: "Portable Solar Lantern",
    description:
      "Compact and portable solar lantern perfect for camping, emergencies, and outdoor activities.",
    price: 45,
    image: solarLantern,
    rating: 4.7,
    reviewCount: 203,
    features: ["Portable", "USB Charging", "Emergency Light"],
    wattage: "3W LED",
    batteryLife: "15 hours",
    warranty: "1 year",
  },
  {
    name: "Home Solar Kit",
    description:
      "Complete solar lighting solution for homes with multiple LED bulbs and central charging station.",
    price: 199,
    originalPrice: 249,
    image: solarHomeSystem,
    rating: 4.6,
    reviewCount: 124,
    features: ["4 LED Bulbs", "Central Panel", "Phone Charging"],
    isPopular: true,
    wattage: "20W System",
    batteryLife: "8 hours",
    warranty: "2 years",
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Solar Products
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed tracking-wide">
            A quick overview of top solar-powered lighting systems designed for
            home, commercial, and outdoor use.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
