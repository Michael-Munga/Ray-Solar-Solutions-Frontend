import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Package, 
  DollarSign, 
  CalendarDays,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Analytics = () => {
  const monthlyData = [
    { month: 'Jan', sales: 45000, customers: 120, orders: 85 },
    { month: 'Feb', sales: 52000, customers: 135, orders: 92 },
    { month: 'Mar', sales: 48000, customers: 128, orders: 88 },
    { month: 'Apr', sales: 61000, customers: 156, orders: 105 },
    { month: 'May', sales: 58000, customers: 142, orders: 98 },
    { month: 'Jun', sales: 67000, customers: 168, orders: 115 }
  ];

  const topProducts = [
    { name: 'Solar Panel 400W', sales: 156, revenue: 46800 },
    { name: 'String Inverter 5kW', sales: 89, revenue: 115700 },
    { name: 'Battery Pack 10kWh', sales: 34, revenue: 169966 },
    { name: 'Solar Panel 300W', sales: 123, revenue: 24600 }
  ];

  const customerMetrics = [
    {
      title: 'Customer Acquisition',
      value: '+23%',
      description: 'New customers this month',
      trend: 'increase',
      icon: Users
    },
    {
      title: 'Customer Retention',
      value: '94%',
      description: 'Returning customers',
      trend: 'increase',
      icon: TrendingUp
    },
    {
      title: 'Average Order Value',
      value: '$2,450',
      description: 'Per customer transaction',
      trend: 'increase',
      icon: DollarSign
    },
    {
      title: 'Customer Satisfaction',
      value: '4.8/5',
      description: 'Average rating',
      trend: 'increase',
      icon: Users
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track your solar business performance and customer insights</p>
      </div>

      {/* Date Range Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
          <div className="flex items-center space-x-2">
            <CalendarDays className="h-4 w-4 text-gray-400" />
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Last 6 months</option>
              <option>Last 3 months</option>
              <option>Last month</option>
              <option>Last week</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sales Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue Trend</h3>
        <div className="h-80 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Interactive Revenue Chart</p>
            <p className="text-sm text-gray-500 mt-2">Monthly revenue: $67,000 (+15.9% vs last month)</p>
            <div className="mt-4 flex justify-center space-x-8 text-sm">
              {monthlyData.map((data) => (
                <div key={data.month} className="text-center">
                  <div className="text-gray-500">{data.month}</div>
                  <div className="font-semibold text-gray-900">${(data.sales/1000).toFixed(0)}k</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Customer Engagement</h3>
          <div className="space-y-4">
            {customerMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <metric.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{metric.title}</p>
                    <p className="text-sm text-gray-500">{metric.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center text-sm text-green-600">
                    <ArrowUpRight className="h-3 w-3" />
                    <span>+5.2%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.sales} units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">${product.revenue.toLocaleString()}</p>
                  <div className="flex items-center text-sm text-green-600">
                    <ArrowUpRight className="h-3 w-3" />
                    <span>+12%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Conversion Rate</h4>
            <Package className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">8.4%</p>
          <div className="flex items-center text-sm text-green-600 mt-2">
            <ArrowUpRight className="h-3 w-3" />
            <span>+1.2% vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Average Response Time</h4>
            <Users className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">2.3h</p>
          <div className="flex items-center text-sm text-green-600 mt-2">
            <ArrowUpRight className="h-3 w-3" />
            <span>-0.5h improvement</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Market Share</h4>
            <TrendingUp className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">12.7%</p>
          <div className="flex items-center text-sm text-green-600 mt-2">
            <ArrowUpRight className="h-3 w-3" />
            <span>+2.1% growth</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
