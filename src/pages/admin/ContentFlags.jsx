import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import toast from "react-hot-toast";

const dummyFlags = [
  {
    id: 1,
    reason: "Inappropriate content",
    createdAt: "2025-07-21T09:30:00Z",
    provider: {
      name: "SolarTech Ltd",
      email: "info@solartech.com",
      phone: "+254712345678",
      id: 101,
    },
    status: "pending",
  },
  {
    id: 2,
    reason: "Fake location",
    createdAt: "2025-07-20T14:15:00Z",
    provider: {
      name: "BrightSun Energy",
      email: "support@brightsun.com",
      phone: "+254799876543",
      id: 102,
    },
    status: "pending",
  },
];

export default function ContentFlags() {
  const [flags, setFlags] = useState(dummyFlags);
  const [selectedFlag, setSelectedFlag] = useState(null);

  const handleAction = (id, action) => {
    setFlags((prev) =>
      prev.map((flag) =>
        flag.id === id ? { ...flag, status: action } : flag
      )
    );
    toast.success(`Flag ${action} successfully`);
    setSelectedFlag(null);
  };

  return (
    <div className="p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {flags.length === 0 ? (
          <p className="text-gray-500">No flagged content found.</p>
        ) : (
          flags.map((flag) => (
            <div
              key={flag.id}
              className="bg-white border border-yellow-100 rounded-2xl shadow-sm p-5 flex flex-col gap-3 transition hover:shadow-md"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-yellow-800">
                  {flag.reason}
                </span>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-xl ${
                    flag.status === "resolved"
                      ? "bg-green-100 text-green-700"
                      : flag.status === "dismissed"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {flag.status}
                </span>
              </div>

              <p className="text-sm text-gray-500">
                Reported {formatDistanceToNow(new Date(flag.createdAt))} ago
              </p>

              <div className="flex gap-3 mt-auto">
                <button
                  onClick={() => setSelectedFlag(flag)}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Details
                </button>
                {flag.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleAction(flag.id, "resolved")}
                      className="text-green-600 hover:underline text-sm font-medium"
                    >
                      Resolve
                    </button>
                    <button
                      onClick={() => handleAction(flag.id, "dismissed")}
                      className="text-red-600 hover:underline text-sm font-medium"
                    >
                      Dismiss
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedFlag && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-[95%] max-w-md shadow-xl">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">
              Flag Details
            </h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">Reason:</span>{" "}
                {selectedFlag.reason}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {selectedFlag.status}
              </p>
              <p>
                <span className="font-semibold">Reported:</span>{" "}
                {formatDistanceToNow(new Date(selectedFlag.createdAt))} ago
              </p>
              <p>
                <span className="font-semibold">Provider:</span>{" "}
                {selectedFlag.provider.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {selectedFlag.provider.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {selectedFlag.provider.phone}
              </p>
              <span className="text-gray-400 text-sm italic">
                Profile access restricted
              </span>
            </div>
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setSelectedFlag(null)}
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

