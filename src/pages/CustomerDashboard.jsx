"use client";

import React, { useEffect, useState } from "react";
import {
  TrendingUp,
  Users,
  Package,
  DollarSign,
  Zap,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { getCart } from "@/services/CartService";

const Dashboard = () => {
  const [cartStats, setCartStats] = useState({ count: 0, total: 0 });

  useEffect(() => {
    const fetchCartStats = async () => {
      try {
        const cart = await getCart();
        const count = cart?.length || 0;
        const total = cart.reduce((sum, item) => {
          const price = parseFloat(item.price) || 0;
          return sum + price * item.quantity;
        }, 0);
        setCartStats({ count, total });
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchCartStats();
  }, []);

  const stats = [
    {
      name: "Items in Cart",
      value: `${cartStats.count} item${cartStats.count !== 1 ? "s" : ""}`,
      change: "+0.0%",
      changeType: "increase",
      icon: ShoppingCart,
      color: "bg-indigo-500",
    },
    {
      name: "Cart Total",
      value: `$${cartStats.total.toFixed(2)}`,
      change: "+0.0%",
      changeType: "increase",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      name: "Active Customers",
      value: "1,234",
      change: "+8.2%",
      changeType: "increase",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      name: "Energy Generated",
      value: "2.4 MWh",
      change: "-2.4%",
      changeType: "decrease",
      icon: Zap,
      color: "bg-yellow-500",
    },
  ];

  const recentOrders = [
    { id: "1001", customer: "Alice Johnson", product: "Solar Panel 400W", amount: "$1,200", status: "Completed" },
    { id: "1002", customer: "Bob Smith", product: "Inverter 5kW", amount: "$2,500", status: "Processing" },
    { id: "1003", customer: "Carol Davis", product: "Battery Pack 10kWh", amount: "$8,900", status: "Shipped" },
    { id: "1004", customer: "David Wilson", product: "Solar Panel 300W", amount: "$900", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here’s what’s happening with your solar business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.changeType === "increase" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
            <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">View all</button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <div>
                  <p className="font-medium text-gray-900">{order.customer}</p>
                  <p className="text-sm text-gray-600">{order.product}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{order.amount}</p>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                        ? "bg-blue-100 text-blue-800"
                        : order.status === "Shipped"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Sales Performance</h3>
          <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-2" />
              <p className="text-gray-600">Chart visualization would go here</p>
              <p className="text-sm text-gray-500">Sales trending upward by 15% this quarter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
