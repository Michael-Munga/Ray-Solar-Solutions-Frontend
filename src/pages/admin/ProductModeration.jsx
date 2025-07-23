import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bolt, CheckCircle, Clock } from 'lucide-react';

const providers = [
  {
    id: 1,
    name: 'SunSmart Solutions',
    status: 'Pending',
    registeredOn: '2025-07-21',
  },
  {
    id: 2,
    name: 'GreenRay Solar Co.',
    status: 'Approved',
    registeredOn: '2025-07-20',
  },
  {
    id: 3,
    name: 'EcoWatt Energy',
    status: 'Pending',
    registeredOn: '2025-07-18',
  },
];

const ProviderModeration = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-yellow-900">Provider Moderation</h2>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-yellow-50 shadow-sm border border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Bolt className="text-yellow-600" />
              <div>
                <p className="text-sm text-yellow-700">Energy Saved</p>
                <p className="text-xl font-bold text-yellow-900">5.2 MWh</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 shadow-sm border border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="text-yellow-600" />
              <div>
                <p className="text-sm text-yellow-700">Pending Providers</p>
                <p className="text-xl font-bold text-yellow-900">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 shadow-sm border border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-yellow-600" />
              <div>
                <p className="text-sm text-yellow-700">Approved Providers</p>
                <p className="text-xl font-bold text-yellow-900">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Provider Table */}
      <div className="mt-6 bg-white rounded-xl shadow border border-yellow-100">
        <table className="min-w-full divide-y divide-yellow-200">
          <thead className="bg-yellow-100">
            <tr>
              <th className="text-left text-yellow-800 text-sm font-semibold px-4 py-2">Name</th>
              <th className="text-left text-yellow-800 text-sm font-semibold px-4 py-2">Status</th>
              <th className="text-left text-yellow-800 text-sm font-semibold px-4 py-2">Registered On</th>
              <th className="text-left text-yellow-800 text-sm font-semibold px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-yellow-100">
            {providers.map((provider) => (
              <tr key={provider.id}>
                <td className="px-4 py-3 text-sm text-gray-800">{provider.name}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      provider.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {provider.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{provider.registeredOn}</td>
                <td className="px-4 py-3 text-sm">
                  <button className="text-blue-600 hover:underline">Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProviderModeration;
