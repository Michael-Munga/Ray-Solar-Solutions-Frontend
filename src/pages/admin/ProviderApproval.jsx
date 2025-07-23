import React, { useState } from 'react';
import { motion } from 'framer-motion';

const providers = [
  {
    id: 1,
    name: 'SolarHub Ltd.',
    email: 'contact@solarhub.com',
    status: 'Pending',
    location: 'Nairobi, Kenya',
    dateSubmitted: '2025-07-20',
  },
  {
    id: 2,
    name: 'SunBeam Co.',
    email: 'info@sunbeam.co',
    status: 'Approved',
    location: 'Kisumu, Kenya',
    dateSubmitted: '2025-07-18',
  },
  {
    id: 3,
    name: 'EcoSolar Africa',
    email: 'support@ecosolar.africa',
    status: 'Rejected',
    location: 'Mombasa, Kenya',
    dateSubmitted: '2025-07-19',
  },
];

const statusColors = {
  Pending: 'bg-yellow-100 text-yellow-800',
  Approved: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
  Deactivated: 'bg-gray-200 text-gray-600',
};

export default function ProviderApproval() {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [reason, setReason] = useState('');

  const openModal = (provider) => {
    setSelectedProvider(provider);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProvider(null);
    setReason('');
    setModalOpen(false);
  };

  const handleAction = (action) => {
    console.log(`${action} provider ID ${selectedProvider?.id} for reason: ${reason}`);
    closeModal();
  };

  return (
    <div className="p-6">
      <motion.h2
        className="text-2xl font-semibold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Provider Moderation
      </motion.h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-200">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-slate-50">
            <tr className="text-gray-700 uppercase tracking-wider">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Date Submitted</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider) => (
              <tr
                key={provider.id}
                className="hover:bg-gray-50 transition border-t border-gray-200"
              >
                <td className="px-4 py-3 font-medium">{provider.name}</td>
                <td className="px-4 py-3">{provider.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      statusColors[provider.status] || 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {provider.status}
                  </span>
                </td>
                <td className="px-4 py-3">{provider.location}</td>
                <td className="px-4 py-3">{provider.dateSubmitted}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => openModal(provider)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && selectedProvider && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Review Provider: {selectedProvider.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Choose an action and provide a reason below:
            </p>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Write a reason here..."
              className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows={3}
            />
            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => handleAction('Approved')}
                className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Approve
              </button>
              <button
                onClick={() => handleAction('Deactivated')}
                className="px-4 py-2 text-sm font-medium bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              >
                Deactivate
              </button>
              <button
                onClick={() => handleAction('Rejected')}
                className="px-4 py-2 text-sm font-medium bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Reject
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm font-medium bg-slate-200 text-gray-700 rounded hover:bg-slate-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
