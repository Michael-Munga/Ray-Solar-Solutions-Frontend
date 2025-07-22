
import Features from "./components/CustomerComponents/Features";
import Footer from "./components/CustomerComponents/Footer";
import Hero from "./components/CustomerComponents/Hero";
import Navbar from "./components/CustomerComponents/Navbar";
import ProductShowcase from "./components/CustomerComponents/ProductShowcase";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <Footer/>
    </div>
  );
}

export default App;
