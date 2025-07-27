import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Flag,
  AlertTriangle,
  Package,
  Users,
  CheckCircle,
  BarChart2,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import logo from "@/assets/admin_panel_logo.png";

const navItems = [
  { path: "/admin/dashboard", label: "Dashboard", icon: Home },
  { path: "/admin/content-flagged", label: "Content Flagged", icon: Flag },
  { path: "/admin/escalation", label: "Escalation", icon: AlertTriangle },
  { path: "/admin/products", label: "Products", icon: Package },
  { path: "/admin/providers", label: "Providers", icon: CheckCircle },
  { path: "/admin/users", label: "Users", icon: Users },
  { path: "/admin/analytics", label: "Analytics", icon: BarChart2 },
];

const Sidebar = ({ signOut }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-full bg-[linear-gradient(to_right,_#1c5853,_#1c5853)] text-white shadow-xl flex flex-col justify-between transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo and Toggle */}
      <div className="flex flex-col items-center py-4 border-b border-white/20 space-y-2 relative">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-yellow-400">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        {!collapsed && (
          <span className="text-lg font-extrabold bg-gradient-to-r from-[#ffbb1c] to-[#ffbb1c] bg-clip-text text-transparent text-center">
            Admin Panel
          </span>
        )}
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute top-2 right-2 bg-yellow-400 text-[#1c5853] p-1 rounded hover:bg-yellow-300"
        >
          {collapsed ? <Menu size={18} /> : <X size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-4 space-y-1 px-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center ${
                collapsed ? "justify-center" : "gap-3"
              } px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                isActive
                  ? "bg-[#ffbb1c] text-[#1c5853]"
                  : "hover:bg-[#267a72]"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4">
        <button
          onClick={signOut}
          className={`w-full flex items-center ${
            collapsed ? "justify-center" : "justify-start gap-3"
          } px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium`}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
