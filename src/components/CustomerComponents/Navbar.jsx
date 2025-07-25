import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import LoginForm from "./LoginForm";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { motion } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sun, User, ShoppingCart, LogOut } from "lucide-react";

export default function Navbar({ user, totalItems = 0, signOut }) {
  const handleSignOut = async () => {
    if (signOut) await signOut();
  };

  return (
    <nav className="bg-yellow-50/90 backdrop-blur-sm border-b border-yellow-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Sun className="h-9 w-9 text-yellow-500 group-hover:animate-spin" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Ray Solar Solutions
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10 text-lg">
            {["products", "solutions", "about", "contact"].map((path) => (
              <Link
                key={path}
                to={`/${path}`}
                className="text-yellow-900 hover:text-yellow-600 hover:underline transition"
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            ))}

            {/* Right Actions: Cart + Account/Auth */}
            <div className="flex items-center space-x-4">
              {/* Cart Button with Badge */}
              <Link to="/cart">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 relative hover:bg-yellow-100"
                >
                  <ShoppingCart className="h-6 w-6 text-yellow-800" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 bg-orange-500 text-white text-xs flex items-center justify-center">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Authenticated---->Show Account Dropdown */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-yellow-900 hover:bg-yellow-100"
                    >
                      <User className="h-6 w-6" />
                      <span className="text-base">Account</span>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="bg-white shadow-md border border-yellow-100"
                  >
                    <DropdownMenuItem
                      disabled
                      className="text-muted-foreground"
                    >
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
                // Not Authenticated----> Show Sign In and Get Started
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 border-yellow-400 text-yellow-800 hover:bg-yellow-100"
                      >
                        <User className="h-6 w-6" />
                        Sign In
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl">
                      <DialogTitle className="sr-only">Sign In</DialogTitle>
                      <DialogDescription className="sr-only">
                        Log in to access your Ray Solar Solutions account
                      </DialogDescription>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <LoginForm />
                      </motion.div>
                    </DialogContent>
                  </Dialog>

                  <Link to="/auth">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:brightness-110 text-base"
                    >
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
