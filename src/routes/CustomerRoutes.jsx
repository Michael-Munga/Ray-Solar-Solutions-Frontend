import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import CustomerLayout from '../pages/customer/CustomerLayout';
import ProductList from '../pages/customer/ProductList';
import Dashboard from '../pages/customer/Dashboard';
import Cart from '../pages/customer/Cart';
import Profile from '../pages/customer/Profile';
import Orders from '../pages/customer/Orders';
import Transactions from '../pages/customer/Transactions';
import ProductDetails from '../pages/customer/ProductDetails';
import Auth from '../pages/customer/Auth';
import NotFound from '../pages/customer/NotfFound';

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/customer" element={<CustomerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/customer" replace />} />
    </Routes>
  );
};

export default CustomerRoutes;
