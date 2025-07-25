"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import PasswordStrengthInput from "@/components/CustomerComponents/PasswordStrengthInput";
import { toast } from "sonner";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleGoogleSignInClick = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowCreateAccount(true);
    toast.info(
      "Please set your email and password to complete account creation."
    );
  };

  const handleGoBack = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowCreateAccount(false);
    toast.dismiss();
  };

  const handleSubmit = () => {
    if (showCreateAccount && password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (showCreateAccount) {
      toast.success("Account created successfully!");
      // API call or redirect
    } else {
      toast.success("Signed in successfully!");
      // Normal login logic
    }
  };

  const isCreateDisabled =
    showCreateAccount && (password !== confirmPassword || !password);

  return (
    <Card
      className="w-full max-w-md border border-green-600/40 bg-green-50/60 shadow-xl backdrop-blur-md rounded-2xl"
      aria-describedby="login-description"
    >
      <CardContent className="space-y-6 p-8">
        <DialogTitle className="sr-only">
          {showCreateAccount ? "Create Account" : "Login"}
        </DialogTitle>
        <DialogDescription id="login-description" className="sr-only">
          {showCreateAccount
            ? "Enter email and password to complete your account."
            : "Enter your credentials to sign in."}
        </DialogDescription>

        {/* Header */}
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

        {/* Email */}
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
            placeholder="you@solarcompany.com"
            className="bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>

        {/* Password */}
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
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
        </motion.div>

        {/* Confirm Password */}
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
              placeholder="Re-enter your password"
              className="bg-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPassword && password !== confirmPassword && (
              <p className="text-sm text-red-600">Passwords do not match.</p>
            )}
          </motion.div>
        )}

        {/* Buttons */}
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

        {/* Google Sign-In */}
        {!showCreateAccount && (
          <>
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-green-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-green-50 px-2 text-green-600">OR</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="ghost"
                onClick={handleGoogleSignInClick}
                className="w-full justify-center gap-2 border border-gray-300 bg-gray-100 text-gray-800 hover:bg-green-100 transition-colors shadow-sm rounded-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 533.5 544.3"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M533.5 278.4c0-17.4-1.6-34.2-4.6-50.4H272v95.3h146.9c-6.4 34.6-25.1 63.9-53.6 83.5v68h86.4c50.7-46.8 81.8-115.7 81.8-196.4z"
                    fill="#4285F4"
                  />
                  <path
                    d="M272 544.3c72.6 0 133.5-24 178-65.2l-86.4-68c-23.9 16-54.5 25.4-91.6 25.4-70.5 0-130.3-47.6-151.7-111.3H32v69.8c44.7 88.5 136.8 149.3 240 149.3z"
                    fill="#34A853"
                  />
                  <path
                    d="M120.3 325.2c-10.4-30.8-10.4-64 0-94.8v-69.8H32c-37.5 73.9-37.5 160.5 0 234.4l88.3-69.8z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M272 107.7c39.5 0 75 13.6 103 40.4l77.1-77.1C405.3 24 344.5 0 272 0 168.8 0 76.7 60.8 32 149.3l88.3 69.8c21.4-63.7 81.2-111.4 151.7-111.4z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-sm font-medium">Sign in with Google</span>
              </Button>
            </motion.div>
          </>
        )}

        {/* Terms */}
        <motion.p
          className="mt-4 text-xs text-center text-green-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
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
