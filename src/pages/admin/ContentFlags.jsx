import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Search } from "lucide-react";
import toast from "react-hot-toast";

const dummyFlags = [
  {
    id: 1,
    reason: "Inappropriate content",
    createdAt: "2025-07-21T09:30:00Z",
    provider: {
      name: "SolarTech Ltd.",
      email: "info@solartech.com",
      phone: "+254712345678",
    },
    status: "Pending",
  },
  {
    id: 2,
    reason: "Fake location",
    createdAt: "2025-07-20T14:15:00Z",
    provider: {
      name: "SunRay Systems",
      email: "contact@sunray.com",
      phone: "+254799876543",
    },
    status: "Pending",
  },
];

const ContentFlags = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [flags, setFlags] = useState(dummyFlags);
  const [selectedFlag, setSelectedFlag] = useState(null);

  const filteredFlags = flags.filter((flag) =>
    flag.provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAction = (id, action) => {
    const updated = flags.map((flag) =>
      flag.id === id ? { ...flag, status: action } : flag
    );
    setFlags(updated);
    setSelectedFlag(null);
    toast.success(`Flag marked as ${action}`);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-solar-dark">Provider Moderation</h1>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="flex items-center border border-solar-dark/20 rounded-lg px-3 py-2 w-full max-w-sm">
          <Search className="w-4 h-4 text-solar-dark/50 mr-2" />
          <input
            type="text"
            placeholder="Search by provider name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none w-full text-sm text-solar-dark placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow p-4 overflow-x-auto">
        <table className="w-full text-left text-sm border border-solar-dark/10">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="p-2 border-b">Reason</th>
              <th className="p-2 border-b">Provider</th>
              <th className="p-2 border-b">Status</th>
              <th className="p-2 border-b">Reported</th>
              <th className="p-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredFlags.length > 0 ? (
              filteredFlags.map((flag) => (
                <tr key={flag.id} className="hover:bg-green-50">
                  <td className="p-2 border-b">{flag.reason}</td>
                  <td className="p-2 border-b">
                    {flag.provider.name}
                    <br />
                    <span className="text-xs text-gray-500">
                      {flag.provider.email}
                    </span>
                  </td>
                  <td className="p-2 border-b">
                    <span
                      className={`px-2 py-1 rounded-xl text-xs font-medium ${
                        flag.status === "Resolved"
                          ? "bg-green-100 text-green-800"
                          : flag.status === "Dismissed"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {flag.status}
                    </span>
                  </td>
                  <td className="p-2 border-b">
                    {formatDistanceToNow(new Date(flag.createdAt))} ago
                  </td>
                  <td className="p-2 border-b">
                    {flag.status === "Pending" ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAction(flag.id, "Resolved")}
                          className="px-3 py-1 text-xs bg-green-600 hover:bg-green-700 text-white rounded"
                        >
                          Resolve
                        </button>
                        <button
                          onClick={() => handleAction(flag.id, "Dismissed")}
                          className="px-3 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded"
                        >
                          Dismiss
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setSelectedFlag(flag)}
                        className="text-green-700 hover:underline text-xs"
                      >
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-4 text-gray-500 italic"
                >
                  No flags found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedFlag && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-[95%] max-w-md shadow-xl">
            <h3 className="text-xl font-bold text-solar-dark mb-4">
              Flag Details
            </h3>
            <div className="text-sm space-y-2 text-gray-700">
              <p>
                <strong>Reason:</strong> {selectedFlag.reason}
              </p>
              <p>
                <strong>Status:</strong> {selectedFlag.status}
              </p>
              <p>
                <strong>Reported:</strong>{" "}
                {formatDistanceToNow(new Date(selectedFlag.createdAt))} ago
              </p>
              <p>
                <strong>Provider:</strong> {selectedFlag.provider.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedFlag.provider.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedFlag.provider.phone}
              </p>
            </div>
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setSelectedFlag(null)}
                className="px-4 py-2 rounded-md bg-green-100 text-green-800 hover:bg-green-200 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentFlags;
