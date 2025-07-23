import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const dummyUsers = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'jane@solar.com',
    role: 'customer',
    status: 'active',
    phone: '0700123456',
  },
  {
    id: 2,
    name: 'John Provider',
    email: 'john@solar.com',
    role: 'provider',
    status: 'inactive',
    phone: '0711223344',
  },
  {
    id: 3,
    name: 'Admin User',
    email: 'admin@solar.com',
    role: 'admin',
    status: 'active',
    phone: '0799887766',
  },
];

const statusColor = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-red-100 text-red-800',
};

export default function UserManagement() {
  const [users, setUsers] = useState(dummyUsers);

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  const handleStatusChange = (id, newStatus) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: newStatus } : user));
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <Card key={user.id} className="p-4 shadow-sm border rounded-xl">
            <CardContent className="space-y-2">
              <div className="text-lg font-semibold">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
              <div className="text-sm text-gray-500">Phone: {user.phone}</div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Role:</span>
                <Select value={user.role} onValueChange={(val) => handleRoleChange(user.id, val)}>
                  <SelectTrigger className="w-[120px] text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer">Customer</SelectItem>
                    <SelectItem value="provider">Provider</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Status:</span>
                <Select value={user.status} onValueChange={(val) => handleStatusChange(user.id, val)}>
                  <SelectTrigger className="w-[120px] text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="mt-2 text-xs">View Details</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{user.name}'s Details</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><strong>Status:</strong> <Badge className={statusColor[user.status]}>{user.status}</Badge></p>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

