import React, { useState, useEffect } from 'react';
import api from '@/services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/orders');
      setOrders(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch orders');
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };

  const calculateOrderTotal = (order) => {
    return order.items.reduce((total, item) => total + item.total_price, 0);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      {orders.length === 0 ? (
        <div className="bg-orange-100 rounded-lg shadow p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
          <p className="mb-4">You haven't placed any orders yet.</p>
          <a href="/customer/products" className="text-green-600 hover:text-green-800 font-medium">
            Browse products
          </a>
        </div>
      ) : (
        <table className="min-w-full bg-orange-100 rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-orange-300">Order ID</th>
              <th className="py-2 px-4 border-b border-orange-300">Date</th>
              <th className="py-2 px-4 border-b border-orange-300">Status</th>
              <th className="py-2 px-4 border-b border-orange-300">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b border-orange-300">#{order.id}</td>
                <td className="py-2 px-4 border-b border-orange-300">{formatDate(order.created_at)}</td>
                <td className="py-2 px-4 border-b border-orange-300">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    order.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
                    order.status === 'shipped' ? 'bg-blue-200 text-blue-800' :
                    order.status === 'delivered' ? 'bg-green-200 text-green-800' :
                    'bg-gray-200 text-gray-800'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-orange-300">${calculateOrderTotal(order).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
