
import React, { useEffect, useState } from "react";

import AppRoutes from "./routes/AppRoutes";

import { useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"; 

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
      <Toaster position="top-center" richColors />
      <AppRoutes user={user} signOut={signOut} handleSignIn={handleSignIn} />
    </>
  );
}

export default App;
