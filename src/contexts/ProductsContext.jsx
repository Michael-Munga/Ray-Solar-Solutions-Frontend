import React, { createContext, useState, useContext } from "react";

const ProductsContext = createContext();

const initialProducts = [
  {
    id: "solar-garden-lights-pro",
    name: "Solar Garden Lights Pro",
    description:
      "Premium LED garden lights with automatic dusk-to-dawn operation and weather-resistant design.",
    price: 89,
    originalPrice: 129,
    image: "/src/assets/solar-garden-lights.jpg",
    rating: 4.8,
    reviewCount: 156,
    features: ["Waterproof", "Auto On/Off", "Long Battery"],
    isPopular: true,
    wattage: "5W LED",
    batteryLife: "12 hours",
    warranty: "2 years",
  },
  {
    id: "smart-street-light",
    name: "Smart Street Light",
    description:
      "Intelligent solar street lighting with motion sensors and remote monitoring capabilities.",
    price: 299,
    originalPrice: 399,
    image: "/src/assets/solar-street-light.jpg",
    rating: 4.9,
    reviewCount: 89,
    features: ["Motion Sensor", "Smart Control", "High Brightness"],
    wattage: "30W LED",
    batteryLife: "10 hours",
    warranty: "3 years",
  },
  {
    id: "portable-solar-lantern",
    name: "Portable Solar Lantern",
    description:
      "Compact and portable solar lantern perfect for camping, emergencies, and outdoor activities.",
    price: 45,
    image: "/src/assets/solar-lantern.jpg",
    rating: 4.7,
    reviewCount: 203,
    features: ["Portable", "USB Charging", "Emergency Light"],
    wattage: "3W LED",
    batteryLife: "15 hours",
    warranty: "1 year",
  },
  {
    id: "home-solar-kit",
    name: "Home Solar Kit",
    description:
      "Complete solar lighting solution for homes with multiple LED bulbs and central charging station.",
    price: 199,
    originalPrice: 249,
    image: "/src/assets/solar-home-system.jpg",
    rating: 4.6,
    reviewCount: 124,
    features: ["4 LED Bulbs", "Central Panel", "Phone Charging"],
    isPopular: true,
    wattage: "20W System",
    batteryLife: "8 hours",
    warranty: "2 years",
  },
];

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts((prevProducts) => {
      // Avoid duplicates by id
      if (prevProducts.find((p) => p.id === product.id)) {
        return prevProducts;
      }
      return [...prevProducts, product];
    });
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
