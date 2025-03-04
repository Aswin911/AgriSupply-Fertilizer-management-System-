import React from 'react';
import './style_sheet/Farmer.css'
import { Link, Route, Routes } from 'react-router-dom';
import ViewFertilizers from './Farmer_asset/ViewFertilizers';
import PlaceOrder from './Farmer_asset/PlaceOrder';
import MakePayment from './Farmer_asset/MakePayment';
import TrackOrder from './Farmer_asset/TrackOrder';
import SubmitFeedback from './Farmer_asset/SubmitFeedback';

function Farmer() {
  return (
    <div>
      <h1>Farmer Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/farmer/view-fertilizers">View Fertilizers</Link></li>
          <li><Link to="/farmer/place-order">Place Order</Link></li>
          <li><Link to="/farmer/make-payment">Make Payment</Link></li>
          <li><Link to="/farmer/track-order">Track Order</Link></li>
          <li><Link to="/farmer/submit-feedback">Submit Feedback</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="view-fertilizers" element={<ViewFertilizers />} />
        <Route path="place-order" element={<PlaceOrder />} />
        <Route path="make-payment" element={<MakePayment />} />
        <Route path="track-order" element={<TrackOrder />} />
        <Route path="submit-feedback" element={<SubmitFeedback />} />
      </Routes>
    </div>
  );
}

export default Farmer;




// FARMER DASHBOARD
// │
// ├── View Fertilizers
// │     ├── Search & Filter
// │     ├── View Details
// │
// ├── Place Order
// │     ├── Select Fertilizer
// │     ├── Enter Quantity
// │     ├── Confirm Order
// │
// ├── Make Payment
// │     ├── Choose Payment Mode
// │     ├── Confirm Payment
// │
// ├── Track Order
// │     ├── View Order Status
// │     ├── Estimated Delivery Date
// │
// └── Submit Feedback
//       ├── Rate Product
//       ├── Write Review
