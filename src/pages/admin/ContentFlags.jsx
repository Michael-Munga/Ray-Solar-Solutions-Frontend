import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    content: "Inappropriate language in post.",
    date: "2025-07-21",
    status: "Pending Review",
    type: "Comment",
    reporter: "Alice",
    reason: "Harassment",
    notes: "Repeated incidents noted"
  },
  {
    id: 2,
    name: "Jane Smith",
    content: "Suspicious promotional content.",
    date: "2025-07-20",
    status: "Resolved",
    type: "Post",
    reporter: "Bob",
    reason: "Spam",
    notes: "Link to suspicious site"
  },
];

function ContentFlagged() {
  const [flaggedItems, setFlaggedItems] = useState(dummyData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleAction = (id, actionType) => {
    if (!window.confirm(`Are you sure you want to ${actionType} this item?`)) return;
    const updatedItems = flaggedItems.map((item) =>
      item.id === id ? { ...item, status: actionType } : item
    );
    setFlaggedItems(updatedItems);
    handleCloseModal();
  };

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "Pending Review": return "bg-yellow-100 text-yellow-800";
      case "Resolved": return "bg-green-100 text-green-800";
      case "Dismissed": return "bg-gray-100 text-gray-800";
      default: return "";
    }
  };

  const filteredItems = flaggedItems.filter(item =>
    filterStatus === "All" ? true : item.status === filterStatus
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Flagged Content</h2>

      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="mb-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
      >
        <option value="All">All</option>
        <option value="Pending Review">Pending Review</option>
        <option value="Resolved">Resolved</option>
        <option value="Dismissed">Dismissed</option>
      </select>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">{item.name}</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                    {item.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{item.date}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getStatusBadgeStyle(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button
                    onClick={() => handleViewDetails(item)}
                    className="text-indigo-600 hover:text-indigo-900 underline"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Flagged Content Details</h3>
            <p><strong>Name:</strong> {selectedItem.name}</p>
            <p><strong>Type:</strong> {selectedItem.type}</p>
            <p><strong>Date:</strong> {selectedItem.date}</p>
            <p><strong>Status:</strong> {selectedItem.status}</p>
            <p><strong>Reported By:</strong> {selectedItem.reporter}</p>
            <p><strong>Reason:</strong> {selectedItem.reason}</p>
            <p><strong>Notes:</strong> {selectedItem.notes}</p>
            <p><strong>Content Preview:</strong> {selectedItem.content}</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
              >
                Close
              </button>
              <button
                onClick={() => handleAction(selectedItem.id, "Resolved")}
                className="px-4 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600"
              >
                Resolve
              </button>
              <button
                onClick={() => handleAction(selectedItem.id, "Dismissed")}
                className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentFlagged;
