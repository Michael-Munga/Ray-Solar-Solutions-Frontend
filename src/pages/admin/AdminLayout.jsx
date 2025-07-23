import { Outlet, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const pageTitle = getPageTitle(location.pathname);

  const handleLogout = () => {
    // Clear any auth tokens or session logic if used
    localStorage.removeItem('token'); // Adjust this based on your auth strategy
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-solar-light">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-solar-base shadow border-b-2 border-solar-dark p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-yellow-900">{pageTitle}</h1>
          <div className="flex items-center gap-4">
            <span className="text-yellow-800">Welcome, Admin!</span>
            <button
              onClick={handleLogout}
              className="bg-solar-dark hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded transition-all"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-solar-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
