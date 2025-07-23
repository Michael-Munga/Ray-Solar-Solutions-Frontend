import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Dummy data
const dummyEscalations = [
  {
    id: 1,
    title: "Power Outage in Sector 5",
    status: "Pending",
    priority: "High",
    description: "Residents in Sector 5 have reported a complete power outage affecting 45 homes.",
  },
  {
    id: 2,
    title: "Panel Malfunction - Ridge Estate",
    status: "Resolved",
    priority: "Medium",
    description: "Several users reported malfunctioning solar panels in Ridge Estate.",
  },
  {
    id: 3,
    title: "Billing Discrepancy Complaint",
    status: "In Progress",
    priority: "Low",
    description: "A customer raised an issue about incorrect billing for the last two months.",
  },
];

// Utility functions for status and priority styling
const getStatusBadge = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Resolved":
      return "bg-green-100 text-green-800";
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "text-red-600";
    case "Medium":
      return "text-yellow-600";
    case "Low":
      return "text-green-600";
    default:
      return "text-gray-600";
  }
};

function Escalation() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [escalations, setEscalations] = useState(dummyEscalations);

  const handleCloseModal = () => setSelectedCase(null);

  const handleMarkResolved = (id) => {
    const confirmed = window.confirm("Mark this case as resolved?");
    if (!confirmed) return;

    const updated = escalations.map((item) =>
      item.id === id ? { ...item, status: "Resolved" } : item
    );
    setEscalations(updated);
    setSelectedCase(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        className="text-2xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Escalated Cases
      </motion.h2>

      {escalations.length === 0 ? (
        <p className="text-gray-500 text-center">No escalation cases to display.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {escalations.map((escalation) => (
                <tr key={escalation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {escalation.title}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                        escalation.status
                      )}`}
                    >
                      {escalation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => setSelectedCase(escalation)}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
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

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {selectedCase.title}
            </h3>
            <p className="text-gray-700 mb-4">{selectedCase.description}</p>

            <div className="flex items-center gap-4 mb-4">
              <span
                className={`text-sm px-2 py-1 rounded-full font-medium ${getStatusBadge(
                  selectedCase.status
                )}`}
              >
                {selectedCase.status}
              </span>
              <span className={`text-sm font-semibold ${getPriorityColor(selectedCase.priority)}`}>
                Priority: {selectedCase.priority}
              </span>
            </div>

            {selectedCase.status !== "Resolved" && (
              <button
                onClick={() => handleMarkResolved(selectedCase.id)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Mark as Resolved
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Escalation;
