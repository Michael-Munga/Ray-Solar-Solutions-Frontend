import React, { useState } from 'react';
import { X, Eye, CheckCircle } from 'lucide-react';

const Escalation = () => {
  const [escalatedCases, setEscalatedCases] = useState([
    {
      id: 1,
      provider: 'SolarNet Ltd.',
      issue: 'Frequent system downtimes reported.',
      dateReported: '2025-07-20',
      status: 'In Progress',
      priority: 'Critical',
    },
    {
      id: 2,
      provider: 'EcoSun Power',
      issue: 'Delayed installations in multiple regions.',
      dateReported: '2025-07-18',
      status: 'Pending Review',
      priority: 'High',
    },
  ]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleView = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const handleAction = (id) => {
    if (!window.confirm('Are you sure you want to mark this case as reviewed?')) return;
    const updatedCases = escalatedCases.map((caseItem) =>
      caseItem.id === id ? { ...caseItem, status: 'Reviewed' } : caseItem
    );
    setEscalatedCases(updatedCases);
    setIsModalOpen(false);
    alert(`Case ${id} marked as reviewed (simulated).`);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Reviewed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityTextClass = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'text-red-600';
      case 'High':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Escalation Management</h2>

      {escalatedCases.length === 0 ? (
        <div className="text-gray-500 text-center py-8">No escalation cases available.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Issue</th>
                <th className="px-4 py-3">Reported</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {escalatedCases.map((caseItem) => (
                <tr key={caseItem.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">{caseItem.provider}</td>
                  <td className="px-4 py-3">{caseItem.issue}</td>
                  <td className="px-4 py-3">{caseItem.dateReported}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                        caseItem.status
                      )}`}
                    >
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`font-semibold ${getPriorityTextClass(caseItem.priority)}`}
                    >
                      {caseItem.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleView(caseItem)}
                      className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-900"
                    >
                      <Eye className="w-4 h-4" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedCase && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-lg rounded-lg shadow-xl relative p-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Case Details</h3>
            <p className="mb-2">
              <span className="font-semibold">Provider:</span> {selectedCase.provider}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Issue:</span> {selectedCase.issue}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Reported on:</span> {selectedCase.dateReported}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Priority:</span>{' '}
              <span className={getPriorityTextClass(selectedCase.priority)}>
                {selectedCase.priority}
              </span>
            </p>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => handleAction(selectedCase.id)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                <CheckCircle className="w-5 h-5" /> Mark as Reviewed
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Escalation;

