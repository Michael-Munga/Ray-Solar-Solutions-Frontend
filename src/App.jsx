

// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomerRoutes from './routes/CustomerRoutes';


import { Toaster } from "sonner";

import React from "react";

import Customer from "./components/CustomerComponents/Customer";

import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <BrowserRouter>
      <CustomerRoutes />
    </BrowserRouter>
    <div>
      <AppRoutes />

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
