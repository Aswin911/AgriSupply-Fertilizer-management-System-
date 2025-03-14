import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3001/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setErrorMessage("Failed to fetch orders. Check the backend.");
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3001/orders/${orderId}`);
      setOrders(orders.filter(order => order.Order_ID !== orderId));
    } catch (error) {
      console.error("Failed to delete order:", error);
      setErrorMessage("Failed to delete order. Check the backend.");
    }
  };

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Oversee Orders
      </h2>

      {/* Error Message */}
      {errorMessage && (
        <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded-md">
          {errorMessage}
        </div>
      )}

      {/* Orders Table */}
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
                  <button
                    className="text-red-400 hover:underline"
                    onClick={() => handleDeleteOrder(order.Order_ID)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;