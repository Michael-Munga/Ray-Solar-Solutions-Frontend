import React, { useState } from 'react';
import { X } from 'lucide-react'; // For modal close icon

function Escalation() {
  // Dummy Data for Escalated Cases
  const [escalatedCases, setEscalatedCases] = useState([
    { id: 101, subject: 'Critical system outage affecting solar monitoring', reporter: 'SysAdmin', status: 'In Progress', priority: 'High', date: '2025-07-21' },
    { id: 102, subject: 'Legal dispute with Provider "GreenEnergy Co."', reporter: 'Legal Dept', status: 'Pending Review', priority: 'Critical', date: '2025-07-20' },
    { id: 103, subject: 'Data breach concern from user personal info', reporter: 'Security', status: 'Resolved', priority: 'High', date: '2025-07-19' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const handleViewDetails = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const handleAction = (id, actionType) => {
    // In a real app, send API request here
    const updatedCases = escalatedCases.map(caseItem =>
      caseItem.id === id ? { ...caseItem, status: actionType === 'resolve' ? 'Resolved' : 'Closed' } : caseItem
    );
    setEscalatedCases(updatedCases);
    setIsModalOpen(false);
    alert(`Case ${id} ${actionType}d! (Simulated)`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Escalation Cases</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {escalatedCases.map((caseItem) => (
                <tr key={caseItem.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{caseItem.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 truncate max-w-xs">{caseItem.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{caseItem.reporter}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      caseItem.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      caseItem.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' :
                      caseItem.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`font-semibold ${
                      caseItem.priority === 'Critical' ? 'text-red-600' :
                      caseItem.priority === 'High' ? 'text-orange-600' :
                      'text-gray-600'
                    }`}>
                      {caseItem.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{caseItem.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleViewDetails(caseItem)} className="text-blue-600 hover:text-blue-900 mr-2">View</button>
                    {caseItem.status !== 'Resolved' && (
                      <button onClick={() => handleAction(caseItem.id, 'resolve')} className="text-green-600 hover:text-green-900">Resolve</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Basic Modal Implementation */}
      {isModalOpen && selectedCase && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">Escalation Case Details</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <p><strong>ID:</strong> {selectedCase.id}</p>
              <p><strong>Subject:</strong> {selectedCase.subject}</p>
              <p><strong>Reported By:</strong> {selectedCase.reporter}</p>
              <p><strong>Status:</strong> {selectedCase.status}</p>
              <p><strong>Priority:</strong> {selectedCase.priority}</p>
              <p><strong>Date:</strong> {selectedCase.date}</p>
              {/* Add more case details like description, internal notes etc. */}
            </div>
            <div className="p-4 border-t flex justify-end space-x-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Close</button>
              {selectedCase.status !== 'Resolved' && (
                <button onClick={() => handleAction(selectedCase.id, 'resolve')} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Mark as Resolved</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Escalation;