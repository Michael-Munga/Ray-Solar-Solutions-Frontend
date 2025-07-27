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
    default: return 'Admin Panel';
  }
};

const AdminLayout = () => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  // Theme colors
  const mainGreen = '#145b52'; // Primary dark green
  const headerBg = '#d7f7ec';  // Light mint green
  const textColor = '#094d3b'; // Deep teal green
  const pageBg = '#f0fdf9';    // Eco clean background

  return (
    <div className="flex h-screen" style={{ backgroundColor: pageBg }}>
      <Sidebar />
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
        </header>

        {/* Main Content */}
        <main
          className="flex-1 overflow-x-hidden overflow-y-auto p-6"
          style={{ backgroundColor: pageBg }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
