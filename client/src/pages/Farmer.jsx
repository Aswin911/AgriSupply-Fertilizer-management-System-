import React, { useEffect } from "react";
import { Link, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./style_sheet/Admin.css";
import PlaceOrder from "./Farmer_asset/PlaceOrder";
import TrackOrder from "./Farmer_asset/TrackOrder";
import ViewFertilizers from "./Farmer_asset/ViewFertilizers";
import SubmitFeedback from "./Farmer_asset/SubmitFeedback";

const Farmer = () => {
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
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Farmer Panel</h1>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link
                to="/farmer/place-order"
                className={`block p-3 rounded-lg text-gray-700 font-medium ${
                  location.pathname === "/farmer/place-order"
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                Place Order
              </Link>
            </li>
            <li>
              <Link
                to="/farmer/track-order"
                className={`block p-3 rounded-lg text-gray-700 font-medium ${
                  location.pathname === "/farmer/track-order"
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                Track Order
              </Link>
            </li>
            <li>
              <Link
                to="/farmer/view-fertilizers"
                className={`block p-3 rounded-lg text-gray-700 font-medium ${
                  location.pathname === "/farmer/view-fertilizers"
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                View Fertilizers
              </Link>
            </li>
            <li>
              <Link
                to="/farmer/submit-feedback"
                className={`block p-3 rounded-lg text-gray-700 font-medium ${
                  location.pathname === "/farmer/submit-feedback"
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                Submit Feedback
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
          <Route index element={<Navigate to="place-order" replace />} />
          <Route path="place-order" element={<PlaceOrder />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="view-fertilizers" element={<ViewFertilizers />} />
          <Route path="submit-feedback" element={<SubmitFeedback />} />
        </Routes>
      </main>
    </div>
  );
};

export default Farmer;