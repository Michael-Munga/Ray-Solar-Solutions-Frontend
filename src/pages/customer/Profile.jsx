import React from 'react';

const Profile = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-900">Your Profile</h1>
      <form>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-green-800" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-green-300 rounded px-3 py-2"
            defaultValue="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-green-800" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-green-300 rounded px-3 py-2"
            defaultValue="john.doe@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-green-800" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border border-green-300 rounded px-3 py-2"
            defaultValue="123-456-7890"
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-1 text-green-800" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            className="w-full border border-green-300 rounded px-3 py-2"
            defaultValue="123 Solar St, Sun City, CA"
          />
        </div>
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
