import React from 'react';

const ProviderAnalytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Provider Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
          <p className="text-2xl font-bold text-green-600">$0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          <p className="text-2xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          <p className="text-2xl font-bold text-purple-600">0</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Analytics Overview</h3>
        <p className="text-gray-600">Analytics data will be displayed here once available.</p>
      </div>
    </div>
  );
};

export default ProviderAnalytics;
