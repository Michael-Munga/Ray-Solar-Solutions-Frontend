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

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">{pageTitle}</h1>
          <span className="text-gray-700">Welcome, Admin!</span>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
