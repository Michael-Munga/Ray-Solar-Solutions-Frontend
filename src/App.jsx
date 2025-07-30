
import React, { useState, useEffect } from "react";


import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";

import { useNavigate } from "react-router-dom";



import { UserProvider } from "@/contexts/UserContext";

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
      <UserProvider user={user}>
        <AppRoutes user={user} signOut={signOut} handleSignIn={handleSignIn} />
      </UserProvider>
    </>
  );
}

export default App;
