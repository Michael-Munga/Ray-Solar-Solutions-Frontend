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
    <div className="p-6 space-y-10">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Pending", count: 1, color: "from-yellow-400 to-yellow-200" },
          { label: "Approved", count: 1, color: "from-green-500 to-green-300" },
          { label: "Deactivated", count: 1, color: "from-gray-300 to-gray-100" },
          { label: "Rejected", count: 0, color: "from-red-400 to-red-200" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <CardContent
                className={`bg-gradient-to-br ${stat.color} text-gray-900 p-6`}
              >
                <p className="text-sm font-semibold">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.count}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 max-w-md bg-white rounded-lg px-4 py-2 border border-gray-300 shadow-sm">
        <Search className="text-gray-500" />
        <Input
          placeholder="Search providers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-none focus:ring-0"
        />
      </div>

      {/* Provider Table */}
      <div className="overflow-auto rounded-xl border border-gray-300 shadow">
        <table className="min-w-full text-sm bg-white rounded-xl overflow-hidden">
          <thead className="bg-green-50 text-green-900 font-semibold text-left">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProviders.map((provider) => (
              <tr key={provider.id} className="border-t hover:bg-green-50/20">
                <td className="px-6 py-4">{provider.name}</td>
                <td className="px-6 py-4">{provider.email}</td>
                <td className="px-6 py-4">{provider.phone}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[provider.status]}`}
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
                    className="bg-green-600 hover:bg-green-700 text-white rounded-lg"
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-solar-dark">
              Provider: {selectedProvider.name}
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
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
                className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
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
