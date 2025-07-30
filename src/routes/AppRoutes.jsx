import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "@/components/CustomerComponents/Layout";
import Customer from "@/components/CustomerComponents/Customer";
import AboutPage from "@/pages/customer/about/AboutPage";
import Solutions from "@/pages/customer/solutions/Solutions";
import Products from "@/pages/customer/products/Products";

// import ContactUs from "@/pages/customer/contact/ContactUs"

import ContactUs from "@/pages/customer/contact/ContactUs";
import CustomerDashboard from "@/components/CustomerComponents/CustomerDashboard";
import CartPage from "@/pages/customer/CartPage";


import ProviderApplicationForm from "@/pages/provider/ProviderApplicationForm";
// import ProviderDashboard from "@/pages/provider/ProviderDashboard";

import AdminLayout from "../pages/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ContentFlagged from "../pages/admin/ContentFlags";
import Escalation from "../pages/admin/Escalations";
import ProductModeration from "../pages/admin/ProductModeration";
import ProviderApproval from "../pages/admin/ProviderApproval";
import UserManagement from "../pages/admin/UserManagement";
import Analytics from "../pages/admin/Analytics";

function AppRoutes({ user, signOut, handleSignIn }) {
  return (
    <Routes>
      {/* Public + Customer Layout */}
      <Route
        element={
          <Layout user={user} signOut={signOut} handleSignIn={handleSignIn} />
        }
      >
        <Route path="/" element={<Customer />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/provider/apply" element={<ProviderApplicationForm />} />

      
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      </Route>


      {/* Admin Routes */}
      {user?.role === "admin" ? (
        <Route path="/admin" element={<AdminLayout signOut={signOut} />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="content-flagged" element={<ContentFlagged />} />
          <Route path="escalation" element={<Escalation />} />
          <Route path="products" element={<ProductModeration />} />
          <Route path="providers" element={<ProviderApproval />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      ) : (
        <Route path="/admin/*" element={<Navigate to="/" replace />} />
      )}

      {/* Uncomment when you have provider dashboard */}
      {/* 
      {user?.role === "provider" ? (
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
      ) : (
        <Route path="/provider/*" element={<Navigate to="/" replace />} />
      )} 
      */}

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
