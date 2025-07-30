import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";
import api from "@/services/api";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Sun, User, ShoppingCart, LogOut } from "lucide-react";

export default function Navbar({ user, signOut, handleSignIn }) {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  const handleSignOut = async () => {
    if (signOut) await signOut();
  };

  const goToDashboard = () => {
    if (user?.role === "admin") return navigate("/admin/dashboard");
    if (user?.role === "provider") return navigate("/provider/dashboard");
    if (user?.role === "customer") return navigate("/customer/dashboard");
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (user?.email) {
          const response = await api.get("/api/cart");
          const data = response.data;

          const items = Array.isArray(data) ? data : data.items || [];
          const totalItems = items.reduce(
            (sum, item) => sum + item.quantity,
            0
          );
          setCartCount(totalItems);
        } else {
          const storedCart = localStorage.getItem("cart");
          if (storedCart) {
            const cartData = JSON.parse(storedCart);
            const total = cartData.reduce(
              (sum, item) => sum + item.quantity,
              0
            );
            setCartCount(total);
          } else {
            setCartCount(0);
          }
        }
      } catch (err) {
        console.error("Cart error:", err.message);
        setCartCount(0);
      }
    };

    fetchCart();
  }, [user]);

  return (
    <nav
      className="sticky top-0 z-50 shadow-md"
      style={{
        background: "linear-gradient(to right, #145b52 0%, #145b52 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Sun className="h-9 w-9 text-[#ffbb1c] group-hover:animate-spin" />
            <span className="text-2xl font-bold text-white tracking-wide">
              Ray Solar Solutions
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10 text-base">
            {["products", "solutions", "about", "contact"].map((path) => (
              <Link
                key={path}
                to={`/${path}`}
                className="text-white hover:text-lime-300 transition font-medium"
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            ))}

            <Link to="/provider/apply">
              <Button className="bg-lime-400 text-black hover:bg-lime-500 font-semibold shadow">
                Sell on Ray Solar
              </Button>
            </Link>

            <div className="flex items-center space-x-4">
              {/* Cart */}
              <Link to="/cart">
                <Button className="relative bg-white text-green-800 hover:bg-lime-100">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-lime-400 text-xs text-black">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Auth */}
              {user?.email ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-white text-green-800 hover:bg-lime-100 flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border">
                    <DropdownMenuItem
                      disabled
                      className="text-muted-foreground"
                    >
                      {user.email}
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={goToDashboard}>
                      Dashboard
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link to="/cart">View Cart</Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="h-5 w-5 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-green-800 hover:bg-lime-100 flex items-center">
                      <User className="h-5 w-5 mr-1" />
                      Sign In
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogTitle className="sr-only">Sign In</DialogTitle>
                    <DialogDescription className="sr-only">
                      Log in to your Ray Solar account
                    </DialogDescription>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <LoginForm onSignIn={handleSignIn} />
                    </motion.div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
