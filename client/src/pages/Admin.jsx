import React, { useEffect } from "react";
import { Link, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./style_sheet/Admin.css";
import ManageUsers from "./Admin_asset/ManageUsers";
import Orders from "./Admin_asset/Orders";
import ModerateFeed from "./Admin_asset/ModerateFeed";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Current path:", location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 fixed h-screen left-0 top-0 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel</h1>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin/manage-users"
                className={`block p-3 rounded-lg text-gray-700 font-medium ${
                  location.pathname === "/admin/manage-users"
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                Manage Users
              </Link>
            </li>
            <li>
              <Link
                to="/admin/oversee-orders"
                className={`block p-3 rounded-lg text-gray-700 font-medium ${
                  location.pathname === "/admin/oversee-orders"
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                Oversee Orders & Payments
              </Link>
            </li>
            <li>
              <Link
                to="/admin/moderate-feedback"
                className={`block p-3 rounded-lg text-gray-700 font-medium ${
                  location.pathname === "/admin/moderate-feedback"
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                Moderate Feedback
              </Link>
            </li>
          </ul>
        </nav>

        {/* Home and Logout Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    to="/"
                    className="text-center bg-white-500 text-grey hover:bg-blue-100 p-3 rounded-lg font-medium"
                  >
                    Home
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-center bg-white-500 text-grey hover:bg-blue-100 p-3 rounded-lg font-medium"
                  >
                    Logout
                  </button>
                </div>
              </aside>

      {/* Main Content */}
      <main className="ml-64 p-6 flex-1 overflow-auto bg-gray-50">
        <Routes>
          <Route index element={<Navigate to="manage-users" replace />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="oversee-orders" element={<Orders />} />
          <Route path="moderate-feedback" element={<ModerateFeed />} />
        </Routes>
      </main>
    </div>
  );
};

export default Admin;