import { Routes, Route } from "react-router-dom";
import Layout from "@/components/CustomerComponents/Layout";
import Customer from "@/components/CustomerComponents/Customer";
import AboutUs1 from "@/pages/customer/About";

import React from "react";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Customer />} />

        <Route path="/about" element={<AboutUs1 />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
