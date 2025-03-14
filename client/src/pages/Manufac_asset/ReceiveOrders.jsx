import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReceiveOrders = () => {
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [showProcessOrders, setShowProcessOrders] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3001/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      setErrorMessage("Failed to fetch orders. Check the backend.");
    }
  };

  const handleViewOrders = () => {
    fetchOrders();
    setShowOrders(true);
    setShowProcessOrders(false);
  };

  const handleProcessOrders = () => {
    fetchOrders();
    setShowProcessOrders(true);
    setShowOrders(false);
  };

  const handleShipOrder = async (orderId) => {
    try {
      await axios.put(`http://localhost:3001/orders/${orderId}`, { Order_Status: "Shipped" });
      setOrders(orders.map(order => order.Order_ID === orderId ? { ...order, Order_Status: "Shipped" } : order));
    } catch (error) {
      console.error("Failed to update order status:", error);
      setErrorMessage("Failed to update order status. Check the backend.");
    }
  };

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Receive Orders
      </h2>
      <div className="mt-4 flex items-center">
        <p className="text-lg text-gray-600">View New Orders</p>
        <button
          className="ml-auto bg-blue-600 text-white px-6 py-1.5 rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={handleViewOrders}
        >
          View
        </button>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-lg text-gray-600">Process & Dispatch</p>
        <button
          className="ml-auto bg-blue-600 text-white px-4 py-1.5 rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={handleProcessOrders}
        >
          Process
        </button>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded-md">
          {errorMessage}
        </div>
      )}

      {/* Orders Table */}
      {showOrders && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left text-gray-400 bg-gray-800">
            <thead className="text-xs text-gray-300 uppercase bg-gray-700">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Farmer ID</th>
                <th className="px-6 py-3">Fertilizer Name</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Order Status</th>
                <th className="px-6 py-3">Order Date</th>
                <th className="px-6 py-3">Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.Order_ID}
                  className="border-b bg-gray-900 hover:bg-gray-700"
                >
                  <td className="px-6 py-4">{order.Order_ID}</td>
                  <td className="px-6 py-4">{order.Farmer_ID}</td>
                  <td className="px-6 py-4">{order.Fertilizer_Name}</td>
                  <td className="px-6 py-4">{order.Order_Quantity}</td>
                  <td className="px-6 py-4">{order.Order_Status}</td>
                  <td className="px-6 py-4">{new Date(order.Order_Date).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{new Date(order.Delivery_Date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Process Orders Table */}
      {showProcessOrders && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left text-gray-400 bg-gray-800">
            <thead className="text-xs text-gray-300 uppercase bg-gray-700">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Farmer ID</th>
                <th className="px-6 py-3">Fertilizer Name</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Order Status</th>
                <th className="px-6 py-3">Order Date</th>
                <th className="px-6 py-3">Delivery Date</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.Order_ID}
                  className="border-b bg-gray-900 hover:bg-gray-700"
                >
                  <td className="px-6 py-4">{order.Order_ID}</td>
                  <td className="px-6 py-4">{order.Farmer_ID}</td>
                  <td className="px-6 py-4">{order.Fertilizer_Name}</td>
                  <td className="px-6 py-4">{order.Order_Quantity}</td>
                  <td className="px-6 py-4">{order.Order_Status}</td>
                  <td className="px-6 py-4">{new Date(order.Order_Date).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{new Date(order.Delivery_Date).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    {order.Order_Status === "Pending" && (
                      <button
                        className="text-blue-400 hover:underline"
                        onClick={() => handleShipOrder(order.Order_ID)}
                      >
                        Ship
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReceiveOrders;