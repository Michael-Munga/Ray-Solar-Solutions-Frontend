import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '@/services/api';

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await api.get('/api/cart');
      setCartItems(response.data);
    } catch (err) {
      setError('Failed to load cart items');
      console.error('Error fetching cart:', err);
    }
  };

  const handlePurchase = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Create order from cart
      const response = await api.post('/api/orders');
      
      // Success - redirect to orders page
      navigate('/orders');
    } catch (err) {
      setError('Failed to process order. Please try again.');
      console.error('Error creating order:', err);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Your cart is empty</h2>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      <div className="border border-gray-300 rounded p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center py-2 border-b">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <h3 className="text-lg font-bold">Total:</h3>
          <p className="text-lg font-bold text-amber-600">${calculateTotal().toFixed(2)}</p>
        </div>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      <button
        onClick={handlePurchase}
        disabled={loading}
        className={`w-full py-3 rounded transition ${
          loading 
            ? 'bg-amber-400 cursor-not-allowed' 
            : 'bg-amber-500 hover:bg-amber-600'
        } text-white`}
      >
        {loading ? 'Processing...' : 'Confirm Purchase'}
      </button>
    </div>
  );
};

export default Checkout;
