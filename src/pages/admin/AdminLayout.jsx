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
    <div className="flex h-screen bg-solar-light">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-yellow-100/70 backdrop-blur-md shadow border-b-2 border-solar-dark p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-yellow-900">{pageTitle}</h1>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-solar-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
