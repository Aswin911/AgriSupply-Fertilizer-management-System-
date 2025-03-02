import React from 'react';
import './style_sheet/Admin.css';
import { Link, Route, Routes } from 'react-router-dom';
import ManageUsers from './Admin_asset/ManageUsers';
import OverseeOrders from './Admin_asset/Orders';
import ModerateFeedback from './Admin_asset/ModerateFeed';

function Admin() {
    return (
        <div>
            <h1>Admin Panel</h1>
            <nav>
                <ul>
                    <li><Link to="/admin/manage-users">Manage Users</Link></li>
                    <li><Link to="/admin/oversee-orders">Oversee Orders & Payments</Link></li>
                    <li><Link to="/admin/moderate-feedback">Moderate Feedback</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="manage-users" element={<ManageUsers />} />
                <Route path="oversee-orders" element={<OverseeOrders />} />
                <Route path="moderate-feedback" element={<ModerateFeedback />} />
            </Routes>
        </div>
    );
}

export default Admin;




// ADMIN PANEL
// │
// ├── Manage Users │
// │     ├── View Registered Users
// │
// ├── Oversee Orders & Payments
// │     ├── Monitor Transactions
// │    
// │
// └── Moderate Feedback
//       ├── Review & Approve Comments
//       ├── Delete Inappropriate Reviews
