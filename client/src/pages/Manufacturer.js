import React from 'react';
import './style_sheet/Manufacturer.css';
import { Link, Route, Routes } from 'react-router-dom';
import ManageFertilizers from './Manufac_asset/ManageFertilizers';
import ReceiveOrders from './Manufac_asset/ReceiveOrders';
import UpdateInventory from './Manufac_asset/UpdateInventory';

function Manufacturer() {
  return (
    <div>
      <h1>Manufacturer Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/manufacturer/manage-fertilizers">Manage Fertilizers</Link></li>
          <li><Link to="/manufacturer/receive-orders">Receive Orders</Link></li>
          <li><Link to="/manufacturer/update-inventory">Update Inventory</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="manage-fertilizers" element={<ManageFertilizers />} />
        <Route path="receive-orders" element={<ReceiveOrders />} />
        <Route path="update-inventory" element={<UpdateInventory />} />
      </Routes>
    </div>
  );
}

export default Manufacturer;



// MANUFACTURER DASHBOARD
// │
// ├── Manage Fertilizers
// │     ├── Add New Fertilizer
// │     ├── Update Stock
// │     ├── Modify Details
// │
// ├── Receive Orders
// │     ├── View New Orders
// │     ├── Process & Dispatch
// │
// └── Update Inventory
//       ├── Adjust Stock Levels
//       ├── Update Last Updated Date
