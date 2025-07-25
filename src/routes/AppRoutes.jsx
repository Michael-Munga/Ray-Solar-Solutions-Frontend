import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminLayout from '../pages/admin/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import ContentFlagged from '../pages/admin/ContentFlags';
import Escalation from '../pages/admin/Escalations';
import ProductModeration from '../pages/admin/ProductModeration';
import ProviderApproval from '../pages/admin/ProviderApproval';
import UserManagement from '../pages/admin/UserManagement';
import Analytics from '../pages/admin/Analytics';

function AppRoutes() {
  return (
    <Routes>
      {/* All admin-related routes are nested under AdminLayout */}
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="content-flagged" element={<ContentFlagged />} />
        <Route path="escalation" element={<Escalation />} />
        <Route path="products" element={<ProductModeration />} />
        <Route path="providers" element={<ProviderApproval />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      {/* Fallback route in case of unknown URL */}
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
