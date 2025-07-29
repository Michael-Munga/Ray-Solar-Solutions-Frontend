import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home,
  Users,
  CheckCircle,
  Package,
  Flag,
  AlertTriangle,
  BarChart2,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import logo from '../assets/admin_panel_logo.png';

const navItems = [
  { path: '/admin/dashboard', label: 'Dashboard', icon: Home },
  { path: '/admin/providers', label: 'Provider Approvals', icon: CheckCircle },
  { path: '/admin/products', label: 'Product Moderation', icon: Package },
  { path: '/admin/content-flagged', label: 'Content Flagged', icon: Flag },
  { path: '/admin/escalation', label: 'Escalation', icon: AlertTriangle },
  { path: '/admin/users', label: 'User Management', icon: Users },
  { path: '/admin/analytics', label: 'Analytics', icon: BarChart2 },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const mainGreen = '#099687';
  const lightGreen = '#d1f4ef';
  const glowGreen = '#43bdae';

  return (
    <aside
      className={`h-screen flex flex-col transition-all duration-300 shadow-xl ${
        collapsed ? 'w-20' : 'w-64'
      }`}
      style={{
        background: `linear-gradient(to bottom, ${lightGreen}, white)`,
        color: '#1f2f2e',
        boxShadow: `0 0 20px ${mainGreen}30`,
      }}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-600 hover:text-black"
        >
          {collapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
        </button>
      </div>

      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-6 transition-all">
        <img
          src={logo}
          alt="Admin"
          className="w-16 h-16 rounded-full object-cover border-4"
          style={{
            borderColor: mainGreen,
            boxShadow: `0 0 20px ${glowGreen}`,
          }}
        />
        {!collapsed && (
          <h2
            className="mt-3 text-lg font-semibold tracking-wide"
            style={{
              color: mainGreen,
              textShadow: `0 0 5px ${glowGreen}`,
            }}
          >
            Admin Panel
          </h2>
        )}
      </div>

      {/* Navigation */}
      <nav className="w-full px-2 flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded transition duration-200 ease-in-out ${
                    isActive
                      ? 'text-white border-l-4 shadow-inner'
                      : 'hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: `${mainGreen}33`,
                        borderColor: mainGreen,
                        boxShadow: `inset 0 0 10px ${mainGreen}33`,
                        color: mainGreen,
                      }
                    : undefined
                }
              >
                <item.icon className="mr-2" size={20} />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="w-full px-3 mb-4">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full p-2 text-white rounded transition duration-200 shadow hover:shadow-md"
          style={{
            backgroundColor: mainGreen,
            boxShadow: `0 0 8px ${glowGreen}`,
          }}
        >
          <LogOut className="mr-2" size={20} />
          {!collapsed && 'Logout'}
        </button>
      </div>

      {/* Bottom Glow Strip */}
      <div
        className="w-full h-1"
        style={{
          backgroundColor: mainGreen,
          boxShadow: `0 0 10px ${mainGreen}`,
        }}
      />
    </aside>
  );
}

export default Sidebar;
