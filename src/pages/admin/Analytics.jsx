import React, { useState, useEffect } from 'react';
import api from '../../services/api';
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
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const COLORS = ['#10B981', '#A7F3D0', '#065F46'];

function AnalyticsCard({ title, value }) {
  return (
    <div className="bg-emerald-50 p-6 rounded-2xl shadow border border-emerald-200">
      <h3 className="text-lg font-semibold text-emerald-800 mb-2">{title}</h3>
      <p className="text-4xl font-bold text-emerald-700">{value}</p>
    </div>
  );
}

function LineChartCard({ title, data, dataKey, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border border-emerald-100">
      <h3 className="text-xl font-semibold text-emerald-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-emerald-600 mt-4">{description}</p>
    </div>
  );
}

function PieChartCard({ title, data, description, onSliceClick }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border border-emerald-100">
      <h3 className="text-xl font-semibold text-emerald-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            innerRadius={40}
            label
            onClick={(data, index) => {
              if (onSliceClick) onSliceClick(data.name);
            }}
            cursor="pointer"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-sm text-emerald-600 mt-4">{description}</p>
    </div>
  );
}

function TicketModal({ status, onClose, details }) {
  const tickets = details[status] || [];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md border border-emerald-200"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-emerald-800">{status} Tickets</h2>
            <button onClick={onClose} className="text-emerald-700 hover:text-emerald-900">
              <X />
            </button>
          </div>
          {tickets.length > 0 ? (
            <ul className="space-y-2">
              {tickets.map((ticket, idx) => (
                <li key={idx} className="border rounded-lg p-3 bg-emerald-50 border-emerald-100">
                  <p className="text-sm font-medium text-emerald-800">{ticket.subject}</p>
                  <p className="text-xs text-emerald-600">{ticket.id} - {ticket.user}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No details available.</p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Analytics() {
  const [userGrowthData, setUserGrowthData] = useState([]);
  const [productStatusData, setProductStatusData] = useState([]);
  const [ticketStatusData, setTicketStatusData] = useState([]);
  const [ticketDetails, setTicketDetails] = useState({});
  const [modalStatus, setModalStatus] = useState(null);

  useEffect(() => {
    api.get('/analytics/users')
      .then((res) => setUserGrowthData(res.data))
      .catch((err) => console.error('User data error:', err));

    api.get('/analytics/products/status')
      .then((res) => setProductStatusData(res.data))
      .catch((err) => console.error('Product status error:', err));

    api.get('/analytics/tickets/status')
      .then((res) => setTicketStatusData(res.data))
      .catch((err) => console.error('Ticket status error:', err));
  }, []);

  const handleSliceClick = (status) => {
    api.get(`/analytics/tickets/${status.toLowerCase()}`)
      .then((res) => {
        setTicketDetails((prev) => ({ ...prev, [status]: res.data }));
        setModalStatus(status);
      })
      .catch((err) => console.error('Ticket detail error:', err));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow p-8 border border-emerald-100">
        <h2 className="text-3xl font-bold text-emerald-800 mb-2">Analytics Overview</h2>
        <p className="text-emerald-600 mb-6">Track key metrics, trends, and system activity over time.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AnalyticsCard title="Total New Users (Last 30 Days)" value={userGrowthData.reduce((acc, item) => acc + item.users, 0)} />
          <AnalyticsCard title="Approved Providers (Current)" value={productStatusData.find(p => p.name === 'Approved')?.value || 0} />
          <AnalyticsCard title="Avg. Ticket Resolution Time" value="4.2 hrs" />
        </div>

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
            onSliceClick={handleSliceClick}
          />
        </div>
      </div>

      {modalStatus && (
        <TicketModal status={modalStatus} onClose={() => setModalStatus(null)} details={ticketDetails} />
      )}
    </div>
  );
}
