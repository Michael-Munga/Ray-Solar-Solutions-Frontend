
import React from "react";


import React, { useEffect, useState } from "react";
import { Toaster } from "sonner";



// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomerRoutes from './routes/CustomerRoutes';



import { Toaster } from "sonner";

import React from "react";

import Customer from "./components/CustomerComponents/Customer";



import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignIn = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (


    <>
      <Toaster />
      <AppRoutes user={user} signOut={signOut} handleSignIn={handleSignIn} />
    </>

    <BrowserRouter>
      <CustomerRoutes />
    </BrowserRouter>

    <div>
      <AppRoutes/>

      <Toaster position="top-center" richColors />
    </div>

  );
}

export default App;
