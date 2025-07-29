import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  BarChart3, 
  MessageCircle, 
  User, 
  Sun,
  DollarSign 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/products', icon: Package, label: 'Products' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/support', icon: MessageCircle, label: 'Support' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="w-64 bg-white shadow-xl border-r border-green-100">
      <div className="p-6 border-b border-green-100">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
            <Sun className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Solar Pro</h1>
            <div className="flex items-center text-sm text-green-600">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>Contributor Panel</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map(({ path, icon: Icon, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === path
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">Earnings</p>
              <p className="text-2xl font-bold text-yellow-600">$0.00</p>
            </div>
            <DollarSign className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Add products to start earning</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;