import { Toaster } from "sonner";

import React from "react";

import Customer from "./components/CustomerComponents/Customer";

import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <div>
      <AppRoutes />

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
