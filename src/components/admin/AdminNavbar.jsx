// src/components/admin/AdminNavbar.jsx
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session/token
    localStorage.removeItem("user"); // adjust key if different

    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="text-xl font-semibold">Admin Panel</div>
      
      <div className="flex items-center gap-4">
        {/* other nav links if any */}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm font-medium transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default AdminNavbar;

