import React from 'react';

const ProviderDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Provider Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600">$0</p>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Active Orders</h3>
          <p className="text-3xl font-bold text-blue-600">0</p>
          <p className="text-sm text-gray-500 mt-1">Pending fulfillment</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Products</h3>
          <p className="text-3xl font-bold text-purple-600">0</p>
          <p className="text-sm text-gray-500 mt-1">Active listings</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Customers</h3>
          <p className="text-3xl font-bold text-orange-600">0</p>
          <p className="text-sm text-gray-500 mt-1">Total served</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
          <p className="text-gray-600">No recent orders to display.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Add New Product
            </button>
            <button className="w-full text-left px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              View Analytics
            </button>
            <button className="w-full text-left px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
              Manage Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
