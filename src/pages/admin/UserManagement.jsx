import React, { useState } from 'react';
import { X } from 'lucide-react'; // For modal close icon

function UserManagement() {
  // Dummy Data for Users
  const [users, setUsers] = useState([
    { id: 1, username: 'admin_user', email: 'admin@solar.com', role: 'Admin', status: 'Active', lastLogin: '2025-07-22', registered: '2024-01-01' },
    { id: 2, username: 'provider_alpha', email: 'alpha@provider.com', role: 'Provider', status: 'Active', lastLogin: '2025-07-21', registered: '2024-03-10' },
    { id: 3, username: 'customer_jane', email: 'jane@example.com', role: 'Customer', status: 'Active', lastLogin: '2025-07-22', registered: '2024-05-15' },
    { id: 4, username: 'inactive_user', email: 'inactive@example.com', role: 'Customer', status: 'Inactive', lastLogin: '2025-06-01', registered: '2024-02-20' },
    { id: 5, username: 'provider_beta', email: 'beta@provider.com', role: 'Provider', status: 'Pending Approval', lastLogin: null, registered: '2025-07-21' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionType, setActionType] = useState(null); // 'view', 'edit', 'toggle_status', 'reset_password'
  const [editedUser, setEditedUser] = useState(null);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setActionType('view');
    setIsModalOpen(true);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditedUser({ ...user }); // Copy for editing
    setActionType('edit');
    setIsModalOpen(true);
  };

  const handleToggleStatus = (user) => {
    setSelectedUser(user);
    setActionType('toggle_status');
    setIsModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const confirmAction = () => {
    // In a real app, send API request here
    if (!selectedUser) return;

    let updatedUsers = [...users];
    let message = "";

    if (actionType === 'edit' && editedUser) {
      updatedUsers = updatedUsers.map(u => u.id === editedUser.id ? editedUser : u);
      message = `User '${editedUser.username}' updated!`;
    } else if (actionType === 'toggle_status') {
      const newStatus = selectedUser.status === 'Active' ? 'Inactive' : 'Active';
      updatedUsers = updatedUsers.map(u => u.id === selectedUser.id ? { ...u, status: newStatus } : u);
      message = `User '${selectedUser.username}' status changed to ${newStatus}!`;
    } else if (actionType === 'reset_password') {
      message = `Password reset for '${selectedUser.username}' (Simulated: email sent)!`;
    } else {
      return;
    }

    setUsers(updatedUsers);
    setIsModalOpen(false);
    setSelectedUser(null);
    setEditedUser(null);
    alert(message);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Management</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.lastLogin || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleViewDetails(user)} className="text-blue-600 hover:text-blue-900 mr-2">View</button>
                    <button onClick={() => handleEditClick(user)} className="text-purple-600 hover:text-purple-900 mr-2">Edit</button>
                    {user.status === 'Active' ? (
                      <button onClick={() => handleToggleStatus(user)} className="text-orange-600 hover:text-orange-900">Deactivate</button>
                    ) : (
                      <button onClick={() => handleToggleStatus(user)} className="text-green-600 hover:text-green-900">Activate</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Basic Modal Implementation */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                {actionType === 'view' ? 'User Details' :
                 actionType === 'edit' ? 'Edit User' :
                 actionType === 'toggle_status' ? 'Change User Status' : 'Action'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              {actionType === 'view' && (
                <>
                  <p><strong>Username:</strong> {selectedUser.username}</p>
                  <p><strong>Email:</strong> {selectedUser.email}</p>
                  <p><strong>Role:</strong> {selectedUser.role}</p>
                  <p><strong>Status:</strong> {selectedUser.status}</p>
                  <p><strong>Last Login:</strong> {selectedUser.lastLogin || 'N/A'}</p>
                  <p><strong>Registered:</strong> {selectedUser.registered}</p>
                </>
              )}
              {actionType === 'edit' && editedUser && (
                <form>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" name="username" value={editedUser.username} onChange={handleEditChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" value={editedUser.email} onChange={handleEditChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select name="role" value={editedUser.role} onChange={handleEditChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                      <option value="Admin">Admin</option>
                      <option value="Provider">Provider</option>
                      <option value="Customer">Customer</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select name="status" value={editedUser.status} onChange={handleEditChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Pending Approval">Pending Approval</option> {/* For new providers */}
                    </select>
                  </div>
                </form>
              )}
              {actionType === 'toggle_status' && (
                <p>Are you sure you want to change the status of **{selectedUser.username}** to **{selectedUser.status === 'Active' ? 'Inactive' : 'Active'}**?</p>
              )}
            </div>
            <div className="p-4 border-t flex justify-end space-x-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
              {(actionType === 'edit' || actionType === 'toggle_status') && (
                <button onClick={confirmAction} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  {actionType === 'edit' ? 'Save Changes' : 'Confirm'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserManagement;