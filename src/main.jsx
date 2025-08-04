import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </StrictMode>
  </BrowserRouter>
);
