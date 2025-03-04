import React from "react";
import { Link, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./style_sheet/Admin.css";
import ManageUsers from "./Admin_asset/ManageUsers";
import OverseeOrders from "./Admin_asset/Orders";
import ModerateFeedback from "./Admin_asset/ModerateFeed";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens)
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 fixed h-full">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
        <nav>
          <ul className="space-y-3">
            <li>
              <Link
                to="manage-users"
                className={`block p-3 rounded ${
                  location.pathname.includes("manage-users") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                Manage Users
              </Link>
            </li>
            <li>
              <Link
                to="oversee-orders"
                className={`block p-3 rounded ${
                  location.pathname.includes("oversee-orders") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                Oversee Orders & Payments
              </Link>
            </li>
            <li>
              <Link
                to="moderate-feedback"
                className={`block p-3 rounded ${
                  location.pathname.includes("moderate-feedback") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                Moderate Feedback
              </Link>
            </li>
          </ul>
        </nav>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute bottom-6 w-full bg-red-600 hover:bg-red-700 p-3 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-6 flex-1 overflow-auto">
        <Routes>
          <Route index element={<Navigate to="manage-users" replace />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="oversee-orders" element={<OverseeOrders />} />
          <Route path="moderate-feedback" element={<ModerateFeedback />} />
        </Routes>
      </main>
    </div>
  );
};

export default Admin;