import Features from "./components/CustomerComponents/Features";
import Hero from "./components/CustomerComponents/Hero";
import Navbar from "./components/CustomerComponents/Navbar";
import ProductShowcase from "./components/CustomerComponents/ProductShowcase";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features/>
    </div>
  );
}

export default App;
