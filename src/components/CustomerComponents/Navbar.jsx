import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";

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

export default function Navbar({ user, totalItems = 0, signOut, handleSignIn }) {
  const handleSignOut = async () => {
    if (signOut) await signOut();
  };

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

            {/* Admin Link (only if logged in) */}
            {user && (
              <Link
                to="/admin/dashboard"
                className="text-white hover:text-yellow-300 transition font-semibold"
              >
                Admin
              </Link>
            )}

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <Link to="/cart">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 relative text-white hover:bg-white/10"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-lime-400 text-xs text-black">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>

              {user ? (
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-white hover:bg-white/10"
                    >
                      <User className="h-6 w-6" />
                      Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border">
                    <DropdownMenuItem disabled className="text-muted-foreground">
                      {user.email}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
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
                
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="bg-white text-green-800 border border-green-800 hover:bg-lime-100 transition"
                      >
                        <User className="h-5 w-5 mr-1 text-green-800" />
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

                  <Link to="/auth">
                    <Button className="bg-white text-green-900 hover:bg-lime-200 text-base">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
