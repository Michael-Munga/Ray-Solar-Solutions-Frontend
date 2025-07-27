import React, { useEffect, useState } from "react";
import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [user, setUser] = useState(null);

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
  };

  return (
    <>
      <Toaster />
      <AppRoutes user={user} signOut={signOut} handleSignIn={handleSignIn} />
    </>
  );
}

export default App;
