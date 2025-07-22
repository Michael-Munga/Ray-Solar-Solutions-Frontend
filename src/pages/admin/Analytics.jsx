import React from 'react';

function Analytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Analytics Overview</h2>
        <p className="text-gray-700 mb-6">This page displays key metrics and trends in a simplified manner.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/*  Metric Car*/}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Total New Users (Last 30 Days)</h3>
            <p className="text-4xl font-bold text-blue-600">85</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-200">
            <h3 className="text-lg font-medium text-green-800 mb-2">Approved Providers (Current)</h3>
            <p className="text-4xl font-bold text-green-600">45</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-sm border border-yellow-200">
            <h3 className="text-lg font-medium text-yellow-800 mb-2">Avg. Ticket Resolution Time</h3>
            <p className="text-4xl font-bold text-yellow-600">4.2 hours</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/*  User Growth Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">User Growth Trend</h3>
            <div className="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded">
              Line Chart Placeholder
            </div>
            <p className="text-sm text-gray-500 mt-4">Shows new user registrations over time.</p>
          </div>

          {/*  Product Status Distribution Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Product Status Distribution</h3>
            <div className="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded">
              Pie Chart Placeholder
            </div>
            <p className="text-sm text-gray-500 mt-4">Breakdown of products by moderation status.</p>
          </div>

          {/*  Ticket Status Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Ticket Status Breakdown</h3>
            <div className="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded">
              Bar Chart Placeholder
            </div>
            <p className="text-sm text-gray-500 mt-4">Current state of all support tickets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;