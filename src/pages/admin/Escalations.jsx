import React, { useState } from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

const dummyEscalatedCases = [
  {
    id: 1,
    providerName: 'SolarTech Kenya',
    issue: 'Installation delayed',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 2,
    providerName: 'SunPower Solutions',
    issue: 'System malfunction',
    status: 'Pending Review',
    priority: 'Critical',
  },
  {
    id: 3,
    providerName: 'EcoLight Energy',
    issue: 'Panel damage reported',
    status: 'In Progress',
    priority: 'Medium',
  },
];

const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'In Progress':
      return 'bg-blue-100 text-blue-800';
    case 'Pending Review':
      return 'bg-yellow-100 text-yellow-800';
    case 'Resolved':
      return 'bg-green-100 text-green-800';
    case 'Closed':
      return 'bg-gray-200 text-gray-800';
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

function Escalation() {
  const [escalatedCases, setEscalatedCases] = useState(dummyEscalatedCases);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCase(null);
    setIsModalOpen(false);
  };

  const handleAction = (id, actionType) => {
    const confirmMsg =
      actionType === 'resolve'
        ? 'Are you sure you want to mark this case as resolved?'
        : 'Are you sure you want to close this case?';

    if (!window.confirm(confirmMsg)) return;

    const updatedCases = escalatedCases.map((caseItem) =>
      caseItem.id === id
        ? {
            ...caseItem,
            status: actionType === 'resolve' ? 'Resolved' : 'Closed',
          }
        : caseItem
    );

    setEscalatedCases(updatedCases);
    setIsModalOpen(false);
    alert(`Case ${id} ${actionType === 'resolve' ? 'marked as resolved' : 'closed'} (Simulated)`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Escalation Cases</h1>
      {escalatedCases.length === 0 ? (
        <div className="text-gray-500 text-center py-8">No escalation cases available.</div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Provider</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Issue</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Priority</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {escalatedCases.map((caseItem) => (
                <tr key={caseItem.id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">{caseItem.providerName}</td>
                  <td className="py-3 px-4">{caseItem.issue}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                        caseItem.status
                      )}`}
                    >
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`font-semibold ${getPriorityTextClass(caseItem.priority)}`}
                    >
                      {caseItem.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => openModal(caseItem)}
                      className="text-indigo-600 hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && selectedCase && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-center mb-4">
              <Info className="text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">
                Case #{selectedCase.id} - {selectedCase.providerName}
              </h2>
            </div>
            <p className="mb-2 text-gray-700">
              <strong>Issue:</strong> {selectedCase.issue}
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Status:</strong> {selectedCase.status}
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Priority:</strong>{' '}
              <span className={`${getPriorityTextClass(selectedCase.priority)}`}>
                {selectedCase.priority}
              </span>
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => handleAction(selectedCase.id, 'resolve')}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                <CheckCircle size={18} /> Mark Resolved
              </button>
              <button
                onClick={() => handleAction(selectedCase.id, 'close')}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                <XCircle size={18} /> Close Case
              </button>
              <button
                onClick={closeModal}
                className="ml-2 px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
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

export default Escalation;
