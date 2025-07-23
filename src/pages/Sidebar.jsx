import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Users,
  CheckCircle,
  Package,
  Flag,
  AlertTriangle,
  BarChart2,
} from 'lucide-react';
import logo from '../assets/admin_panel_logo.png';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: Home },
  { path: '/providers', label: 'Provider Approvals', icon: CheckCircle },
  { path: '/products', label: 'Product Moderation', icon: Package },
  { path: '/content-flagged', label: 'Content Flagged', icon: Flag },
  { path: '/escalation', label: 'Escalation', icon: AlertTriangle },
  { path: '/users', label: 'User Management', icon: Users },
  { path: '/analytics', label: 'Analytics', icon: BarChart2 },
];

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-yellow-100 via-orange-200 to-yellow-50 text-gray-800 flex flex-col items-center py-6 shadow-xl shadow-yellow-400/40">
      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={logo}
          alt="Admin"
          className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 shadow-[0_0_20px_#facc15]"
        />
        <h2 className="mt-3 text-xl font-semibold tracking-wide text-yellow-600 drop-shadow-[0_0_5px_#facc15]">
          Admin Panel
        </h2>
      </div>

      {/* Navigation */}
      <nav className="w-full px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded transition duration-200 ease-in-out ${
                    isActive
                      ? 'bg-yellow-300/40 text-yellow-700 border-l-4 border-yellow-500 shadow-inner shadow-yellow-300/40'
                      : 'hover:bg-yellow-100 hover:text-yellow-800'
                  }`
                }
              >
                <item.icon className="mr-3" size={20} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Glow Strip */}
      <div className="w-full h-1 mt-auto bg-yellow-400 shadow-[0_0_10px_#facc15]" />
    </aside>
  );
}

export default Sidebar;



