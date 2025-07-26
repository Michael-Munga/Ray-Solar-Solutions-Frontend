import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { CartProvider } from '../../contexts/CartContext';

const CustomerLayout = () => {
  return (
    <CartProvider>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <div className="p-6 text-xl font-bold border-b border-gray-200">
            Ray Solar Solutions
          </div>
          <nav className="mt-6">
            <NavLink
              to="/customer/dashboard"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 hover:bg-green-100 ${
                  isActive ? 'bg-green-200 font-semibold' : ''
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/customer/products"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 hover:bg-green-100 ${
                  isActive ? 'bg-green-200 font-semibold' : ''
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/customer/orders"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 hover:bg-green-100 ${
                  isActive ? 'bg-green-200 font-semibold' : ''
                }`
              }
            >
              Orders
            </NavLink>
            <NavLink
              to="/customer/cart"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 hover:bg-green-100 ${
                  isActive ? 'bg-green-200 font-semibold' : ''
                }`
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/customer/profile"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 hover:bg-green-100 ${
                  isActive ? 'bg-green-200 font-semibold' : ''
                }`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/customer/auth"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 hover:bg-green-100 ${
                  isActive ? 'bg-green-200 font-semibold' : ''
                }`
              }
            >
              Auth
            </NavLink>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow p-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">Customer Portal</h1>
            {/* Add user profile or logout button here */}
          </header>
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </CartProvider>
  );
};

export default CustomerLayout;
