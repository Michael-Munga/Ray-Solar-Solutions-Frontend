import React from 'react';

function Dashboard() {
  const stats = [
    { label: 'Pending Providers', value: 5, color: 'text-emerald-600' },
    { label: 'Products for Moderation', value: 12, color: 'text-amber-600' },
    { label: 'Open Support Tickets', value: 3, color: 'text-rose-600' },
    { label: 'Total Active Users', value: 250, color: 'text-sky-600' },
  ];

  const recentActivity = [
    "New provider 'EcoCharge Solar' submitted for approval (2 min ago)",
    "Product 'High-Efficiency Panel X' submitted by 'SunRise Solutions' (1 hour ago)",
    "Content flagged on 'DIY Solar Guide' article (3 hours ago)",
    "User 'jane.doe' updated profile (yesterday)",
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <p className="text-base text-slate-500">{stat.label}</p>
            <p className={`text-4xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Activity</h2>
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((item, idx) => (
              <li key={idx} className="py-3 text-slate-600 text-sm">{item}</li>
            ))}
          </ul>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">User Registrations (Last 30 Days)</h2>
          <div className="h-48 flex items-center justify-center text-slate-400 bg-slate-100 rounded">
            Simple Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
