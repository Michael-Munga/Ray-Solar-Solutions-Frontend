import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Package, DollarSign, Eye, Heart } from 'lucide-react';

const Analytics = ({ products, customers }) => {
  // Mock data for analytics
  const salesData = [
    { month: 'Jan', sales: 0, revenue: 0 },
    { month: 'Feb', sales: 0, revenue: 0 },
    { month: 'Mar', sales: 0, revenue: 0 },
    { month: 'Apr', sales: 0, revenue: 0 },
    { month: 'May', sales: 0, revenue: 0 },
    { month: 'Jun', sales: 0, revenue: 0 }
  ];

  const categoryData = products.length > 0 ? [
    { name: 'Solar Panels', value: products.filter(p => p.category === 'solar-panel').length, color: '#10B981' },
    { name: 'Inverters', value: products.filter(p => p.category === 'inverter').length, color: '#F59E0B' },
    { name: 'Batteries', value: products.filter(p => p.category === 'battery').length, color: '#8B5CF6' },
    { name: 'Mounting', value: products.filter(p => p.category === 'mounting').length, color: '#06B6D4' },
    { name: 'Accessories', value: products.filter(p => p.category === 'accessories').length, color: '#EF4444' }
  ].filter(item => item.value > 0) : [];

  const engagementData = [
    { metric: 'Views', value: 0, icon: Eye, color: 'text-blue-600' },
    { metric: 'Likes', value: 0, icon: Heart, color: 'text-red-600' },
    { metric: 'Inquiries', value: 0, icon: Users, color: 'text-green-600' },
    { metric: 'Conversions', value: 0, icon: TrendingUp, color: 'text-purple-600' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your solar business performance</p>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-medium">Growth Tracking</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {engagementData.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{metric.metric}</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{metric.value}</p>
                <p className="text-sm text-gray-500 mt-1">This month</p>
              </div>
              <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Monthly Sales</h3>
          {products.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-300 flex items-center justify-center">
              <div className="text-center">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Add products to see sales analytics</p>
              </div>
            </div>
          )}
        </div>

        {/* Product Categories */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Product Categories</h3>
          {categoryData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-300 flex items-center justify-center">
              <div className="text-center">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Add products to see category breakdown</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Revenue Trend</h3>
        {products.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#F59E0B" 
                strokeWidth={3}
                dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-400 flex items-center justify-center">
            <div className="text-center">
              <DollarSign className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">No Revenue Yet</h4>
              <p className="text-gray-500 mb-6">Start adding products and making sales to see revenue trends</p>
              <div className="bg-yellow-500 text-white px-8 py-4 rounded-lg inline-block">
                <p className="font-semibold">Expected earnings when you add products:</p>
                <p className="text-2xl font-bold mt-2">$0 → $1,000+ per month</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Performance Summary */}
      <div className="bg-green-500 rounded-xl shadow-xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Package className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-2xl font-bold">{products.length}</h4>
            <p className="text-green-100">Products Listed</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-2xl font-bold">{customers.length}</h4>
            <p className="text-green-100">Active Customers</p>
          </div>
          <div className="text-center">
            <DollarSign className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-2xl font-bold">$0.00</h4>
            <p className="text-green-100">Total Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;