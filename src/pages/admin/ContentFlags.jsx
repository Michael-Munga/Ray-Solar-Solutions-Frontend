import React, { useState } from 'react';
import { X } from 'lucide-react'; // For modal close icon

function ContentFlagged() {
  // Dummy Data for Flagged Content
  const [flaggedItems, setFlaggedItems] = useState([
    { id: 1, type: 'Comment', content: 'Offensive comment on Solar Panel Review.', reporter: 'user123', status: 'Pending Review', date: '2025-07-20' },
    { id: 2, type: 'Product Description', content: 'Misleading claims on "Infinity Energy" product.', reporter: 'provider_xyz', status: 'Pending Review', date: '2025-07-19' },
    { id: 3, type: 'Profile Bio', content: 'Inappropriate language in provider profile.', reporter: 'user789', status: 'Resolved', date: '2025-07-18' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleAction = (id, actionType) => {
    // In a real app, send API request here
    const updatedItems = flaggedItems.map(item =>
      item.id === id ? { ...item, status: actionType === 'resolve' ? 'Resolved' : 'Dismissed' } : item
    );
    setFlaggedItems(updatedItems);
    setIsModalOpen(false);
    alert(`Item ${id} ${actionType}d! (Simulated)`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Flagged Content</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content Summary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {flaggedItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 truncate max-w-xs">{item.content}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.reporter}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' :
                      item.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleViewDetails(item)} className="text-blue-600 hover:text-blue-900 mr-2">View</button>
                    {item.status === 'Pending Review' && (
                      <>
                        <button onClick={() => handleAction(item.id, 'resolve')} className="text-green-600 hover:text-green-900 mr-2">Resolve</button>
                        <button onClick={() => handleAction(item.id, 'dismiss')} className="text-red-600 hover:text-red-900">Dismiss</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Basic Modal Implementation */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">Flagged Content Details</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <p><strong>ID:</strong> {selectedItem.id}</p>
              <p><strong>Type:</strong> {selectedItem.type}</p>
              <p><strong>Content:</strong> {selectedItem.content}</p>
              <p><strong>Reported By:</strong> {selectedItem.reporter}</p>
              <p><strong>Status:</strong> {selectedItem.status}</p>
              <p><strong>Date:</strong> {selectedItem.date}</p>
              {/* Add more details as needed */}
            </div>
            <div className="p-4 border-t flex justify-end space-x-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Close</button>
              {selectedItem.status === 'Pending Review' && (
                <>
                  <button onClick={() => handleAction(selectedItem.id, 'resolve')} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Resolve</button>
                  <button onClick={() => handleAction(selectedItem.id, 'dismiss')} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Dismiss</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentFlagged;