import React, { useEffect } from "react";
import { Link, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./style_sheet/Admin.css";
import MakePayment from "./Farmer_asset/MakePayment";
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
      <aside className="w-64 bg-gray-800 text-white p-6 fixed h-screen left-0 top-0 flex flex-col">
        <h1 className="text-xl font-bold mb-6">Farmer Panel</h1>
        <nav className="flex-1">
          <ul className="space-y-3">
            <li>
              <Link to="/farmer/make-payment" className={`block p-3 rounded ${location.pathname === "/farmer/make-payment" ? "bg-gray-700" : "hover:bg-gray-700"}`}>
                Make Payment
              </Link>
              <Link to="/farmer/place-order" className={`block p-3 rounded ${location.pathname === "/farmer/place-order" ? "bg-gray-700" : "hover:bg-gray-700"}`}>
                Place Order
              </Link>
              <Link to="/farmer/track-order" className={`block p-3 rounded ${location.pathname === "/farmer/track-order" ? "bg-gray-700" : "hover:bg-gray-700"}`}>
                Track Order
              </Link>
              <Link to="/farmer/view-fertilizers" className={`block p-3 rounded ${location.pathname === "/farmer/view-fertilizers" ? "bg-gray-700" : "hover:bg-gray-700"}`}>
                View Fertilizers
              </Link>
              <Link to="/farmer/submit-feedback" className={`block p-3 rounded ${location.pathname === "/farmer/submit-feedback" ? "bg-gray-700" : "hover:bg-gray-700"}`}>
                Submit Feedback
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
          <Route index element={<Navigate to="make-payment" replace />} />
          <Route path="make-payment" element={<MakePayment />} />
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




