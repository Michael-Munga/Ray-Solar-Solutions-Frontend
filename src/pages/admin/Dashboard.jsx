import React from 'react';

function Dashboard() {
  // Dummy statistics data
  const stats = [
    { label: 'Pending Providers', value: 5, color: 'text-blue-600' },
    { label: 'Products for Moderation', value: 12, color: 'text-yellow-600' },
    { label: 'Open Support Tickets', value: 3, color: 'text-red-600' },
    { label: 'Total Active Users', value: 250, color: 'text-green-600' },
  ];

  // Dummy recent activity list
  const recentActivity = [
    "New provider 'EcoCharge Solar' submitted for approval (2 min ago)",
    "Product 'High-Efficiency Panel X' submitted by 'SunRise Solutions' (1 hour ago)",
    "Content flagged on 'DIY Solar Guide' article (3 hours ago)",
    "User 'jane.doe' updated profile (yesterday)",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-lg font-medium text-gray-600 mb-2">{stat.label}</p>
            <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Activity and Chart sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity, index) => (
              <li key={index} className="py-3 text-gray-700 text-sm">
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">User Registrations (Last 30 Days)</h3>
          <div className="h-48 flex items-center justify-center text-gray-400 bg-gray-50 rounded">
            Simple Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
