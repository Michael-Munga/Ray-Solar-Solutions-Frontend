import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

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

const getStatusBadge = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Resolved":
      return "bg-emerald-100 text-emerald-700";
    case "In Progress":
      return "bg-lime-100 text-lime-700";
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
    <div className="p-6 space-y-6">
      <motion.h2
        className="text-2xl font-bold text-emerald-700"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Escalated Cases
      </motion.h2>

      {escalations.length === 0 ? (
        <p className="text-gray-500 text-center">No escalation cases to display.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded-2xl border border-gray-200 bg-white">
          <table className="min-w-full text-sm text-left divide-y divide-gray-200">
            <thead className="bg-emerald-100 text-emerald-700">
              <tr>
                <th className="px-6 py-3 font-semibold">Title</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {escalations.map((escalation) => (
                <tr key={escalation.id} className="hover:bg-emerald-50">
                  <td className="px-6 py-4">{escalation.title}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full font-medium text-xs ${getStatusBadge(
                        escalation.status
                      )}`}
                    >
                      {escalation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedCase(escalation)}
                      className="text-emerald-700 hover:underline font-medium"
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
          <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-2 text-emerald-700">
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
                className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
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
