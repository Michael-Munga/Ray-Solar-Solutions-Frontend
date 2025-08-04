import React from 'react';

const ProviderSupportInbox = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Support Inbox</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Support Messages</h3>
        
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">No messages</h4>
                <p className="text-gray-600 text-sm mt-1">Your support inbox is empty</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-semibold mb-3">Quick Actions</h4>
          <div className="flex space-x-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              New Message
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
              View Archived
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderSupportInbox;
