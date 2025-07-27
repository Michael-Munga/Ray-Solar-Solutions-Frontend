import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { User, Mail, Phone, BadgeCheck, MapPin, IdCard } from 'lucide-react';

const dummyUsers = [
  {
    id: 1,
    name: 'Alice Wanjiku',
    email: 'alice@gmail.com',
    phone: '+254700000001',
    nationalId: '12345678',
    address: 'Nairobi, Kenya',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Brian Otieno',
    email: 'brian@gmail.com',
    phone: '+254700000002',
    nationalId: '23456789',
    address: 'Mombasa, Kenya',
    role: 'Provider',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Caroline Nduta',
    email: 'caroline@gmail.com',
    phone: '+254700000003',
    nationalId: '34567890',
    address: 'Kisumu, Kenya',
    role: 'Customer',
    status: 'Active',
  },
];

export default function UserManagement() {
  const [selectedUser, setSelectedUser] = useState(null);

  const openUserModal = (user) => setSelectedUser(user);
  const closeModal = () => setSelectedUser(null);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-[#145b52]">User Management</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyUsers.map((user) => (
          <Card
            key={user.id}
            className="rounded-2xl shadow-md hover:shadow-xl transition border border-green-100 bg-white"
          >
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2 text-lg font-semibold text-[#145b52]">
                <User className="w-5 h-5 text-lime-500" /> {user.name}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-green-700" /> {user.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BadgeCheck className="w-4 h-4 text-green-500" /> Role: {user.role}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                    user.status === 'Active'
                      ? 'bg-lime-100 text-green-800'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {user.status}
                </span>
              </div>
              <Button
                onClick={() => openUserModal(user)}
                className="w-full bg-[#145b52] hover:bg-lime-600 text-white text-sm"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* User Details Modal */}
      <Dialog open={!!selectedUser} onOpenChange={closeModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#145b52] text-xl">
              {selectedUser?.name}'s Details
            </DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-3 text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-700" /> {selectedUser.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-700" /> {selectedUser.phone}
              </div>
              <div className="flex items-center gap-2">
                <IdCard className="w-4 h-4 text-green-700" /> ID: {selectedUser.nationalId}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-700" /> {selectedUser.address}
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-green-700" /> Role: {selectedUser.role}
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                    selectedUser.status === 'Active'
                      ? 'bg-lime-100 text-green-800'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  Status: {selectedUser.status}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}


