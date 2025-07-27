import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-100 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Orders</h2>
          <p className="text-blue-700">You have 5 active orders.</p>
        </div>
        <div className="bg-blue-100 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Cart</h2>
          <p className="text-blue-700">3 items in your cart.</p>
        </div>
        <div className="bg-blue-100 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Profile</h2>
          <p className="text-blue-700">Update your profile information.</p>
        </div>
      </div>
      <div className="bg-blue-100 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Recent Activity</h2>
        <ul className="list-disc list-inside text-blue-800">
          <li>Order #1234 has been shipped.</li>
          <li>New product "Solar Lantern" added to your wishlist.</li>
          <li>Your profile was updated successfully.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
