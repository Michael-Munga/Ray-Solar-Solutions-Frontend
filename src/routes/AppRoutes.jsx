import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "@/components/CustomerComponents/Layout";
import Customer from "@/components/CustomerComponents/Customer";
import AboutPage from "@/pages/customer/about/AboutPage";
import Solutions from "@/pages/customer/solutions/Solutions";
import Products from "@/pages/customer/products/Products";
import ContactUs from "@/pages/customer/contact/ContacttUs";

import AdminLayout from "../pages/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ContentFlagged from "../pages/admin/ContentFlags";
import Escalation from "../pages/admin/Escalations";
import ProductModeration from "../pages/admin/ProductModeration";
import ProviderApproval from "../pages/admin/ProviderApproval";
import UserManagement from "../pages/admin/UserManagement";
import Analytics from "../pages/admin/Analytics";

// import ProviderDashboard from "../pages/provider/ProviderDashboard";

function AppRoutes({ user, signOut, handleSignIn }) {
  return (
    <Routes>
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
      </Route>

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

      {/* {user?.role === "provider" ? (
        <Route path="/provider" element={<ProviderDashboard />} />
      ) : (
        <Route path="/provider" element={<Navigate to="/" replace />} />
      )}

      <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
}

export default AppRoutes;
