import React from 'react';

const ProviderProfile = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Provider Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows="3"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Update Profile
              </button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Account Stats</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="font-semibold">January 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Sales</p>
                <p className="font-semibold">$0</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Products Listed</p>
                <p className="font-semibold">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
