import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Pending Providers", value: 5, color: "bg-[#e0f2f1] text-[#145b52]" },
  { label: "Products for Moderation", value: 12, color: "bg-[#fff8e1] text-[#b59f00]" },
  { label: "Open Support Tickets", value: 3, color: "bg-[#fdecea] text-[#c62828]" },
  { label: "Total Active Users", value: 142, color: "bg-[#e8f5e9] text-[#1b5e20]" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 md:p-10">
      <h1 className="text-3xl font-bold text-[#145b52] mb-8 tracking-tight">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <Card className="rounded-2xl shadow hover:shadow-md transition-all duration-300 bg-white border border-gray-200">
              <CardContent className="p-5">
                <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                <div className={cn("text-2xl font-bold", stat.color)}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
        <div className="text-lg font-semibold text-[#145b52] mb-4">
          Recent Provider Activity
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="text-sm font-medium text-gray-600">
                <th className="text-left px-4 py-2">Provider</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Location</th>
                <th className="text-left px-4 py-2">Last Updated</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 font-medium">SolarTech Ltd</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-2">Nairobi, KE</td>
                <td className="px-4 py-2">2 hours ago</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 font-medium">GreenVolt Solutions</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-2">Mombasa, KE</td>
                <td className="px-4 py-2">1 day ago</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 font-medium">RaySolar Africa</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs">
                    Deactivated
                  </span>
                </td>
                <td className="px-4 py-2">Kisumu, KE</td>
                <td className="px-4 py-2">3 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
