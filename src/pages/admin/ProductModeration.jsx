import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const stats = [
  { label: "Pending Providers", value: 5, color: "bg-amber-100 text-amber-700" },
  { label: "Products for Moderation", value: 12, color: "bg-yellow-100 text-yellow-700" },
  { label: "Open Support Tickets", value: 3, color: "bg-orange-100 text-orange-700" },
  { label: "Total Active Users", value: 48, color: "bg-lime-100 text-lime-700" },
];

const tableData = [
  { name: "SolarTech Ltd.", status: "Pending", submitted: "2025-07-20" },
  { name: "SunRay Systems", status: "Pending", submitted: "2025-07-21" },
  { name: "GreenLight Africa", status: "Pending", submitted: "2025-07-22" },
  { name: "SolMate Energy", status: "Pending", submitted: "2025-07-23" },
];

const ProviderModeration = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProviders = tableData.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-amber-700">Provider Moderation Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-2xl shadow p-4 ${stat.color}`}
          >
            <p className="text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-semibold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Search + Table */}
      <div className="bg-white rounded-2xl shadow p-4 space-y-4">
        {/* Search Bar */}
        <div className="flex items-center border rounded-lg px-3 py-2 w-full max-w-sm">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search providers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none w-full text-sm"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border">
            <thead className="bg-amber-100 text-amber-700">
              <tr>
                <th className="p-2 border-b">Provider Name</th>
                <th className="p-2 border-b">Status</th>
                <th className="p-2 border-b">Submitted On</th>
              </tr>
            </thead>
            <tbody>
              {filteredProviders.length > 0 ? (
                filteredProviders.map((provider, index) => (
                  <tr key={index} className="hover:bg-amber-50">
                    <td className="p-2 border-b">{provider.name}</td>
                    <td className="p-2 border-b">{provider.status}</td>
                    <td className="p-2 border-b">{provider.submitted}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-4 text-gray-500">
                    No providers match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProviderModeration;

