"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import PasswordStrengthInput from "@/components/CustomerComponents/PasswordStrengthInput";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import axios from "@/services/api";

export default function LoginForm({ onSignIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleGoogleSignInClick = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setShowCreateAccount(true);
    toast.info(
      "Please set your email and password to complete account creation."
    );
  };

  const handleGoBack = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setShowCreateAccount(false);
    toast.dismiss();
  };

  const handleSubmit = async () => {
    if (showCreateAccount) {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }

      try {
        const res = await axios.post("/auth/register", {
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        });

        toast.success("Account created successfully!");
        setShowCreateAccount(false);
        const { user } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        if (onSignIn) onSignIn(user);
        navigate("/");
      } catch (err) {
        toast.error(err?.response?.data?.error || "Registration failed.");
      }

      return;
    }

    try {
      const res = await axios.post("/auth/login", { email, password });
      const { access_token, user } = res.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Signed in successfully!");
      if (onSignIn) onSignIn(user);

      const role = user.user_type?.name || user.user_type_name;

      if (role === "admin") navigate("/admin");
      else if (role === "provider") navigate("/provider");
      else navigate("/customer");
    } catch (err) {
      toast.error(err?.response?.data?.error || "Invalid credentials.");
    }
  };

  const isCreateDisabled =
    showCreateAccount &&
    (!firstName || !lastName || password !== confirmPassword || !password);

  return (
    <Card className="w-full max-w-md border border-green-600/40 bg-green-50/60 shadow-xl backdrop-blur-md rounded-2xl">
      <CardContent className="space-y-6 p-8">
        <DialogTitle className="sr-only">
          {showCreateAccount ? "Create Account" : "Login"}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {showCreateAccount
            ? "Enter email and password to create your account."
            : "Enter your credentials to sign in."}
        </DialogDescription>

        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-green-700">
            {showCreateAccount ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-green-800">
            {showCreateAccount
              ? "Complete your solar dashboard account."
              : "Log in to your solar dashboard."}
          </p>
        </motion.div>

        {showCreateAccount && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex-1 space-y-2">
              <Label htmlFor="firstName" className="text-green-900">
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                className="bg-white"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="lastName" className="text-green-900">
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                className="bg-white"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </motion.div>
        )}

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Label htmlFor="email" className="text-green-900">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            className="bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {showCreateAccount ? (
            <PasswordStrengthInput
              password={password}
              setPassword={setPassword}
            />
          ) : (
            <div className="space-y-2">
              <Label htmlFor="password" className="text-green-900">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="bg-white pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-2.5 text-green-700"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {showCreateAccount && (
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Label htmlFor="confirmPassword" className="text-green-900">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              className="bg-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {confirmPassword && password !== confirmPassword && (
              <p className="text-sm text-red-600">Passwords do not match.</p>
            )}
          </motion.div>
        )}

        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            disabled={isCreateDisabled}
            onClick={handleSubmit}
          >
            {showCreateAccount ? "Create Account" : "Continue"}
          </Button>
          {showCreateAccount && (
            <Button
              variant="ghost"
              onClick={handleGoBack}
              className="text-green-800 hover:text-green-950"
            >
              ← Go Back to Login
            </Button>
          )}
        </motion.div>

        {!showCreateAccount && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Button
              variant="ghost"
              onClick={handleGoogleSignInClick}
              className="text-green-800 hover:text-green-950 text-sm"
            >
              Don't have an account? Create one →
            </Button>
          </motion.div>
        )}

        <motion.p
          className="mt-4 text-xs text-center text-green-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          By signing in you agree to our{" "}
          <Link
            to="/terms"
            className="underline hover:text-green-900 text-green-800"
          >
            terms of service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="underline hover:text-green-900 text-green-800"
          >
            privacy policy
          </Link>
          .
        </motion.p>
      </CardContent>
    </Card>
  );
}
