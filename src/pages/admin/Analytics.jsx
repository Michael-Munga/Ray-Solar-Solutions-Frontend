import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

function AnalyticsCard({ title, value, color, borderColor, textColor }) {
  return (
    <div className={`bg-${color}-50 p-6 rounded-2xl shadow-sm border border-${borderColor}-200`}>
      <h3 className={`text-lg font-semibold text-${textColor} mb-2`}>{title}</h3>
      <p className={`text-4xl font-bold text-${textColor}`}>{value}</p>
    </div>
  );
}

// Sample data
const userGrowthData = [
  { month: 'Jan', users: 20 },
  { month: 'Feb', users: 35 },
  { month: 'Mar', users: 45 },
  { month: 'Apr', users: 60 },
  { month: 'May', users: 70 },
  { month: 'Jun', users: 85 },
];

const productStatusData = [
  { name: 'Approved', value: 45 },
  { name: 'Pending', value: 12 },
  { name: 'Rejected', value: 5 },
];

const ticketStatusData = [
  { name: 'Open', value: 10 },
  { name: 'In Progress', value: 6 },
  { name: 'Resolved', value: 20 },
];

const COLORS = ['#34D399', '#FBBF24', '#EF4444'];

function LineChartCard({ title, data, dataKey, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-500 mt-4">{description}</p>
    </div>
  );
}

function PieChartCard({ title, data, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            innerRadius={40}
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-500 mt-4">{description}</p>
    </div>
  );
}

export default function Analytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Analytics Overview</h2>
        <p className="text-gray-600 mb-6">Track key metrics, trends, and system activity over time.</p>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AnalyticsCard
            title="Total New Users (Last 30 Days)"
            value="85"
            color="blue"
            borderColor="blue"
            textColor="blue-600"
          />
          <AnalyticsCard
            title="Approved Providers (Current)"
            value="45"
            color="green"
            borderColor="green"
            textColor="green-600"
          />
          <AnalyticsCard
            title="Avg. Ticket Resolution Time"
            value="4.2 hrs"
            color="yellow"
            borderColor="yellow"
            textColor="yellow-600"
          />
        </div>

        {/* Chart Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChartCard
            title="User Growth Trend"
            data={userGrowthData}
            dataKey="users"
            description="Shows new user registrations over time."
          />

          <PieChartCard
            title="Product Status Distribution"
            data={productStatusData}
            description="Breakdown of products by moderation status."
          />
        </div>

        <div className="mt-6">
          <PieChartCard
            title="Ticket Status Breakdown"
            data={ticketStatusData}
            description="Current state of all support tickets."
          />
        </div>
      </div>
    </div>
  );
}
