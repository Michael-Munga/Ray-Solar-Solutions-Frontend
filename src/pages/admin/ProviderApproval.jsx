import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const providers = [
  {
    id: 1,
    name: "SolGrid Energy",
    email: "info@solgrid.com",
    phone: "+254 712 345678",
    status: "pending",
  },
  {
    id: 2,
    name: "RayVolt Solutions",
    email: "support@rayvolt.co.ke",
    phone: "+254 798 123456",
    status: "approved",
  },
  {
    id: 3,
    name: "BrightSpark Solar",
    email: "hello@brightspark.com",
    phone: "+254 701 987654",
    status: "deactivated",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  deactivated: "bg-gray-200 text-gray-800",
};

export default function ProviderApproval() {
  const [search, setSearch] = useState("");
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAction = (status) => {
    if (!selectedProvider) return;
    selectedProvider.status = status;
    setModalOpen(false);
  };

  const filteredProviders = providers.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Pending", count: 1, color: "from-yellow-400 to-yellow-200" },
          { label: "Approved", count: 1, color: "from-green-400 to-green-200" },
          { label: "Deactivated", count: 1, color: "from-gray-300 to-gray-100" },
          { label: "Rejected", count: 0, color: "from-red-400 to-red-200" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="rounded-2xl shadow-md overflow-hidden">
              <CardContent
                className={`bg-gradient-to-br ${stat.color} text-gray-900 p-6`}
              >
                <p className="text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.count}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex items-center gap-4 max-w-md">
        <Search className="text-gray-500" />
        <Input
          placeholder="Search providers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Provider Table */}
      <div className="overflow-auto rounded-xl border border-gray-200">
        <table className="min-w-full text-sm text-left bg-white rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Phone</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProviders.map((provider) => (
              <tr key={provider.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{provider.name}</td>
                <td className="px-6 py-4">{provider.email}</td>
                <td className="px-6 py-4">{provider.phone}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[provider.status]}`}
                  >
                    {provider.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button
                    onClick={() => {
                      setSelectedProvider(provider);
                      setModalOpen(true);
                    }}
                    size="sm"
                    className="bg-orange-400 hover:bg-orange-500 text-white"
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && selectedProvider && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-2">Provider: {selectedProvider.name}</h3>
            <p className="text-sm text-gray-600 mb-6">
              Email: {selectedProvider.email} <br />
              Phone: {selectedProvider.phone}
            </p>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setModalOpen(false)}
                className="rounded-lg border-gray-300"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleAction("rejected")}
                className="rounded-lg"
              >
                Reject
              </Button>
              <Button
                className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
                onClick={() => handleAction("deactivated")}
              >
                Deactivate
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white rounded-lg"
                onClick={() => handleAction("approved")}
              >
                Approve
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
