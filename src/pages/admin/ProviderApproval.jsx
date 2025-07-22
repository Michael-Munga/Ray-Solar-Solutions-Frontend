import React, { useState } from 'react';
import { X } from 'lucide-react'; // For modal close icon

function ProviderApproval() {
  // Dummy Data for Providers
  const [providers, setProviders] = useState([
    { id: 1, company_name: 'SunPower Solutions', contact_person: 'Alice Smith', email: 'alice@sunpower.com', phone: '111-222-3333', status: 'Pending Approval', applied_date: '2025-07-20', address: '123 Solar St', city: 'Nairobi', country: 'Kenya' },
    { id: 2, company_name: 'Bright Energy Kenya', contact_person: 'Bob Johnson', email: 'bob@brightenergy.com', phone: '444-555-6666', status: 'Approved', applied_date: '2025-07-18', address: '456 Bright Ave', city: 'Mombasa', country: 'Kenya' },
    { id: 3, company_name: 'GreenSpark Systems', contact_person: 'Charlie Brown', email: 'charlie@greenspark.com', phone: '777-888-9999', status: 'Pending Approval', applied_date: '2025-07-22', address: '789 Spark Rd', city: 'Kisumu', country: 'Kenya' },
    { id: 4, company_name: 'EcoLight Innovations', contact_person: 'Diana Prince', email: 'diana@ecolight.com', phone: '101-202-3030', status: 'Deactivated', applied_date: '2025-07-15', address: '101 Light Blvd', city: 'Nakuru', country: 'Kenya', deactivationReason: 'Failed compliance check.' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [actionType, setActionType] = useState(null); // 'view', 'approve', 'deactivate', 'reject'
  const [reasonInput, setReasonInput] = useState('');

  const handleViewDetails = (provider) => {
    setSelectedProvider(provider);
    setActionType('view');
    setIsModalOpen(true);
  };

  const handleApproveClick = (provider) => {
    setSelectedProvider(provider);
    setActionType('approve');
    setIsModalOpen(true);
  };

  const handleDeactivateClick = (provider) => {
    setSelectedProvider(provider);
    setActionType('deactivate');
    setIsModalOpen(true);
  };

  const handleRejectClick = (provider) => {
    setSelectedProvider(provider);
    setActionType('reject');
    setIsModalOpen(true);
  };

  const confirmAction = () => {
    // api request
    if (!selectedProvider) return;

    let newStatus;
    let message = '';
    const updatedProviders = providers.map(p => {
      if (p.id === selectedProvider.id) {
        if (actionType === 'approve') {
          newStatus = 'Approved';
          message = `Provider '${p.company_name}' approved!`;
          return { ...p, status: newStatus, deactivationReason: '' }; // Clear any old deactivation reason
        } else if (actionType === 'deactivate') {
          if (!reasonInput) { alert('Reason is required for deactivation.'); return p; }
          newStatus = 'Deactivated';
          message = `Provider '${p.company_name}' deactivated.`;
          return { ...p, status: newStatus, deactivationReason: reasonInput };
        } else if (actionType === 'reject') {
          if (!reasonInput) { alert('Reason is required for rejection.'); return p; }
          newStatus = 'Rejected';
          message = `Provider '${p.company_name}' rejected.`;
          return { ...p, status: newStatus, rejectionReason: reasonInput };
        }
      }
      return p;
    });

    setProviders(updatedProviders);
    setIsModalOpen(false);
    setSelectedProvider(null);
    setReasonInput('');
    alert(message + " (Simulated)");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Provider Approvals</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Person</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {providers.map((provider) => (
                <tr key={provider.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{provider.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{provider.company_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{provider.contact_person}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{provider.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      provider.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      provider.status === 'Pending Approval' ? 'bg-yellow-100 text-yellow-800' :
                      provider.status === 'Deactivated' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {provider.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{provider.applied_date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleViewDetails(provider)} className="text-blue-600 hover:text-blue-900 mr-2">View</button>
                    {provider.status === 'Pending Approval' && (
                      <>
                        <button onClick={() => handleApproveClick(provider)} className="text-green-600 hover:text-green-900 mr-2">Approve</button>
                        <button onClick={() => handleRejectClick(provider)} className="text-red-600 hover:text-red-900">Reject</button>
                      </>
                    )}
                    {provider.status === 'Approved' && (
                        <button onClick={() => handleDeactivateClick(provider)} className="text-orange-600 hover:text-orange-900">Deactivate</button>
                    )}
                    {provider.status === 'Deactivated' && (
                        <button onClick={() => handleApproveClick(provider)} className="text-green-600 hover:text-green-900">Reactivate</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Basic Modal Implementation */}
      {isModalOpen && selectedProvider && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                {actionType === 'view' ? 'Provider Details' :
                 actionType === 'approve' ? 'Confirm Approval' :
                 actionType === 'deactivate' ? 'Deactivate Provider' :
                 actionType === 'reject' ? 'Reject Provider' : 'Action'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              {actionType === 'view' && (
                <>
                  <p><strong>Company Name:</strong> {selectedProvider.company_name}</p>
                  <p><strong>Contact Person:</strong> {selectedProvider.contact_person}</p>
                  <p><strong>Email:</strong> {selectedProvider.email}</p>
                  <p><strong>Phone:</strong> {selectedProvider.phone}</p>
                  <p><strong>Status:</strong> {selectedProvider.status}</p>
                  <p><strong>Address:</strong> {selectedProvider.address}, {selectedProvider.city}, {selectedProvider.country}</p>
                  <p><strong>Applied On:</strong> {selectedProvider.applied_date}</p>
                  {selectedProvider.deactivationReason && <p className="text-red-600"><strong>Reason:</strong> {selectedProvider.deactivationReason}</p>}
                </>
              )}
              {actionType === 'approve' && (
                <p>Are you sure you want to approve **{selectedProvider.company_name}**?</p>
              )}
              {(actionType === 'deactivate' || actionType === 'reject') && (
                <div>
                  <p>Please provide a reason for {actionType}ing **{selectedProvider.company_name}**:</p>
                  <textarea
                    className="w-full mt-2 p-2 border rounded resize-y"
                    rows="3"
                    value={reasonInput}
                    onChange={(e) => setReasonInput(e.target.value)}
                    placeholder="Enter reason here..."
                  />
                </div>
              )}
            </div>
            <div className="p-4 border-t flex justify-end space-x-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
              {actionType !== 'view' && (
                <button onClick={confirmAction} className={`px-4 py-2 rounded text-white ${
                  actionType === 'approve' ? 'bg-green-600 hover:bg-green-700' :
                  (actionType === 'deactivate' || actionType === 'reject') ? 'bg-red-600 hover:bg-red-700' : ''
                }`}>
                  {actionType === 'approve' ? 'Approve' : 'Confirm'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProviderApproval;