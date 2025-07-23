import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Dialog } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

const dummyFlags = [
  {
    id: 1,
    contentType: 'Provider',
    providerName: 'SolarTech Co.',
    reason: 'Inaccurate address details',
    flaggedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    submittedBy: 'Admin Jane',
    phone: '+254712345678',
    email: 'contact@solartech.co.ke',
    status: 'pending',
  },
  {
    id: 2,
    contentType: 'Product',
    providerName: 'GreenVolt',
    reason: 'Suspicious pricing info',
    flaggedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    submittedBy: 'Admin Mike',
    phone: '+254701112233',
    email: 'support@greenvolt.com',
    status: 'pending',
  },
];

export default function ContentFlags() {
  const [flags, setFlags] = useState(dummyFlags);
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAction = (id, action) => {
    setFlags((prev) =>
      prev.map((flag) =>
        flag.id === id ? { ...flag, status: action } : flag
      )
    );
    toast.success(`Flag ${action === 'resolved' ? 'resolved' : 'dismissed'} successfully`);
    setIsModalOpen(false);
  };

  const openModal = (flag) => {
    setSelectedFlag(flag);
    setIsModalOpen(true);
  };

  const formatTime = (time) => {
    try {
      return formatDistanceToNow(new Date(time), { addSuffix: true });
    } catch {
      return 'Invalid date';
    }
  };

  return (
    <div className="p-6">
      <Toaster />
      <h2 className="text-3xl font-bold mb-6 text-yellow-800">Content Moderation</h2>

      {flags.length === 0 ? (
        <p className="text-gray-600">No flagged content at the moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {flags.map((flag) => (
            <div
              key={flag.id}
              className="rounded-2xl shadow-md border border-yellow-200 bg-white p-6 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {flag.contentType} - {flag.providerName}
                </h3>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    flag.status === 'resolved'
                      ? 'bg-green-100 text-green-700'
                      : flag.status === 'dismissed'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {flag.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm italic">Reason: {flag.reason}</p>
              <p className="text-sm text-gray-500">
                Flagged {formatTime(flag.flaggedAt)} by {flag.submittedBy}
              </p>

              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-200"
                  onClick={() => openModal(flag)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl space-y-4">
            {selectedFlag && (
              <>
                <Dialog.Title className="text-xl font-semibold text-gray-800">
                  {selectedFlag.contentType} - {selectedFlag.providerName}
                </Dialog.Title>
                <div className="space-y-1 text-sm text-gray-700">
                  <p><strong>Reason:</strong> {selectedFlag.reason}</p>
                  <p><strong>Flagged:</strong> {formatTime(selectedFlag.flaggedAt)}</p>
                  <p><strong>Submitted by:</strong> {selectedFlag.submittedBy}</p>
                  <p><strong>Phone:</strong> {selectedFlag.phone}</p>
                  <p><strong>Email:</strong> {selectedFlag.email}</p>
                  <p><strong>Status:</strong> {selectedFlag.status}</p>
                </div>

                <div className="flex justify-end gap-3 mt-4">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-1"
                    onClick={() => handleAction(selectedFlag.id, 'resolved')}
                  >
                    <CheckCircle className="w-4 h-4" />
                    Resolve
                  </Button>
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-1"
                    onClick={() => handleAction(selectedFlag.id, 'dismissed')}
                  >
                    <XCircle className="w-4 h-4" />
                    Dismiss
                  </Button>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
