import React, { useEffect } from "react";
import { Link, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./style_sheet/Manufacturer.css";
import ManageFertilizers from "./Manufac_asset/ManageFertilizers";
import ReceiveOrders from "./Manufac_asset/ReceiveOrders";
import UpdateInventory from "./Manufac_asset/UpdateInventory";

const Manufacturer = () => {
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
      <aside className="w-64 bg-gray-800 text-white p-6 fixed h-screen left-0 top-0 flex flex-col">
        <h1 className="text-xl font-bold mb-6">Manufacturer Panel</h1>
        <nav className="flex-1">
          <ul className="space-y-3">
            <li>
              <Link to="/manufacturer/manage-fertilizers" className={`block p-3 rounded ${location.pathname === "/manufacturer/manage-fertilizers" ? "bg-gray-700" : "hover:bg-gray-700"}`}>
                Manage Fertilizers
              </Link>
              <Link to="/manufacturer/receive-orders" className={`block p-3 rounded ${location.pathname === "/manufacturer/receive-orders" ? "bg-gray-700" : "hover:bg-gray-700"}`}>
                Receive Orders
              </Link>
              <Link to="/manufacturer/update-inventory" className={`block p-3 rounded ${location.pathname === "/manufacturer/update-inventory" ? "bg-gray-700" : "hover:bg-gray-700"}`}>
                Update Inventory
              </Link>
            </li>
          </ul>
        </nav>

        {/* Home and Logout Buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          <Link to="/" className="text-center bg-gray-700 hover:bg-gray-600 p-3 rounded">
            Home
          </Link>
          <button onClick={handleLogout} className="text-center bg-gray-700 hover:bg-gray-600 p-3 rounded">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-6 flex-1 overflow-auto">
        <Routes>
          <Route index element={<Navigate to="manage-fertilizers" replace />} />
          <Route path="manage-fertilizers" element={<ManageFertilizers />} />
          <Route path="receive-orders" element={<ReceiveOrders />} />
          <Route path="update-inventory" element={<UpdateInventory />} />
        </Routes>
      </main>
    </div>
  );
};

export default Manufacturer;
