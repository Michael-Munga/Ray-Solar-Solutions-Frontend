import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';


const getPageTitle = (pathname) => {
  switch (pathname) {
    case '/dashboard': return 'Dashboard';
    case '/content-flagged': return 'Content Flagged';
    case '/escalation': return 'Escalation Cases';
    case '/products': return 'Product Moderation';
    case '/providers': return 'Provider Approvals';
    case '/users': return 'User Management';
    case '/analytics': return 'Analytics Overview';
    default: return null;
  }
};


const formatTitle = (str) =>
  str
    .replace('/', '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const AdminLayout = ({ signOut }) => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname) || formatTitle(location.pathname);

 
  const mainGreen = '#145b52'; 
  const headerBg = '#d7f7ec';  
  const textColor = '#094d3b'; 
  const pageBg = '#f0fdf9';    
 
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen" style={{ backgroundColor: pageBg }}>
      {sidebarOpen && <Sidebar signOut={signOut} />}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Header */}
        <header
          className="backdrop-blur-md shadow-md border-b p-4 flex items-center justify-between"
          style={{
            backgroundColor: headerBg,
            borderColor: mainGreen,
            boxShadow: '0 2px 8px rgba(20, 91, 82, 0.1)',
          }}
        >
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: textColor }}>
            {pageTitle}
          </h1>

          {/* Optional: Toggle sidebar on small screens */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-sm px-3 py-1 rounded border"
            style={{ borderColor: mainGreen, color: textColor }}
          >
            {sidebarOpen ? 'Hide Menu' : 'Show Menu'}
          </button>
        </header>

        {/* Main Content */}
        <main
          className="flex-1 overflow-x-hidden overflow-y-auto p-6"
          style={{ backgroundColor: pageBg }}
        >
          <React.Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </React.Suspense>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

