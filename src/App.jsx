import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Dashboard from './components/dashboard/Dashboard';
import ProductsManager from './components/product/productManager';
import Analytics from './components/dashboard/Analytics';
import CustomerSupport from './components/dashboard/CustomerSupport';
import BusinessProfile from './components/dashboard/BusinessProfile';

import Sidebar from './layout/Side';
import Header from './layout/Header';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [supportTickets, setSupportTickets] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('solarUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }

    if (isAuthenticated) {
      loadDemoData();
    }
  }, [isAuthenticated]);

  const loadDemoData = () => {
    setCustomers([
      { id: 1, name: 'Green Energy Corp', email: 'contact@greenenergy.com', lastContact: '2024-01-15' },
      { id: 2, name: 'Solar Solutions Ltd', email: 'info@solarsolutions.com', lastContact: '2024-01-12' }
    ]);

    setSupportTickets([
      { id: 1, customer: 'Green Energy Corp', subject: 'Installation Query', status: 'open', priority: 'high', date: '2024-01-15' },
      { id: 2, customer: 'Solar Solutions Ltd', subject: 'Product Specifications', status: 'resolved', priority: 'medium', date: '2024-01-12' }
    ]);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('solarUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('solarUser');
  };

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      dateAdded: new Date().toISOString().split('T')[0]
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, ...updatedProduct } : product
    ));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header user={user} onLogout={handleLogout} />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Dashboard products={products} customers={customers} supportTickets={supportTickets} />} />
                <Route path="/products" element={
                  <ProductsManager 
                    products={products} 
                    onAddProduct={addProduct}
                    onUpdateProduct={updateProduct}
                    onDeleteProduct={deleteProduct}
                  />
                } />
                <Route path="/analytics" element={<Analytics products={products} customers={customers} />} />
                <Route path="/support" element={<CustomerSupport tickets={supportTickets} setTickets={setSupportTickets} />} />
                <Route path="/profile" element={<BusinessProfile user={user} setUser={setUser} />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
