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
import logo from '../assets/logo.jpg';

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
    <aside className="w-64 h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center py-6 shadow-lg shadow-blue-500/10">
      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={logo}
          alt="Admin"
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_20px_#3b82f6]"
        />
        <h2 className="mt-3 text-xl font-semibold tracking-wide text-blue-400 drop-shadow-[0_0_5px_#3b82f6]">
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
                      ? 'bg-blue-600/30 text-blue-400 border-l-4 border-blue-500 shadow-inner shadow-blue-500/30'
                      : 'hover:bg-white/10 hover:text-blue-300'
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
      <div className="w-full h-1 mt-auto bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
    </aside>
  );
}

export default Sidebar;
