import React from 'react';
import { Package, Users, MessageSquare, DollarSign, TrendingUp, Zap } from 'lucide-react';

const Dashboard = ({ products, customers, supportTickets }) => {
  const stats = [
    {
      title: 'Total Products',
      value: products.length.toString(),
      icon: Package,
      color: 'from-green-500 to-green-600',
      change: products.length > 0 ? '+12%' : '0%'
    },
    {
      title: 'Active Customers',
      value: customers.length.toString(),
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      change: customers.length > 0 ? '+8%' : '0%'
    },
    {
      title: 'Support Tickets',
      value: supportTickets.length.toString(),
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      change: supportTickets.length > 0 ? '-5%' : '0%'
    },
    {
      title: 'Revenue',
      value: '$0.00',
      icon: DollarSign,
      color: 'from-yellow-500 to-yellow-600',
      change: '0%'
    }
  ];

  const recentProducts = products.slice(-3);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
          <Zap className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-medium">Status</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">{stat.change}</span>
                </div>
              </div>
              <div className={`w-12 h-12 ${index === 3 ? 'bg-yellow-500' : 'bg-green-500'} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Products</h3>
          {recentProducts.length > 0 ? (
            <div className="space-y-4">
              {recentProducts.map((product) => (
                <div key={product.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{product.name}</p>
                    <p className="text-green-600 font-bold">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-600 mb-2">No Products Yet</h4>
              <p className="text-gray-500 mb-4">Start adding solar products to begin earning</p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all">
                Add Your First Product
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-all">
              <div className="flex items-center">
                <Package className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Add New Product</p>
                  <p className="text-sm text-gray-600">Upload solar panels, inverters, or accessories</p>
                </div>
              </div>
            </button>
            
            <button className="w-full text-left p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-all">
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">View Analytics</p>
                  <p className="text-sm text-gray-600">Check customer engagement and sales</p>
                </div>
              </div>
            </button>
            
            <button className="w-full text-left p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-all">
              <div className="flex items-center">
                <MessageSquare className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Customer Support</p>
                  <p className="text-sm text-gray-600">Respond to customer inquiries</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Earnings Summary */}
      <div className="bg-yellow-500 rounded-xl shadow-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Your Earnings</h3>
            <p className="text-yellow-100">As a provider, you earn from every product sale</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold">$0.00</p>
            <p className="text-yellow-100">Total earned</p>
          </div>
        </div>
        <div className="mt-6 bg-white bg-opacity-20 rounded-lg p-4">
          <p className="text-center text-white">
            add products to start earning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;