import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrackOrder = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3001/orders'); // Replace with the correct endpoint
      setOrders(response.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      setError('Failed to fetch orders. Check the backend.');
    }
  };

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Track Order
      </h2>
      {error && <p className="text-red-600">{error}</p>}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3 border-b border-gray-700">Order ID</th>
              <th className="px-6 py-3 border-b border-gray-700">Fertilizer Name</th>
              <th className="px-6 py-3 border-b border-gray-700">Order Status</th>
              <th className="px-6 py-3 border-b border-gray-700">Order Date</th>
              <th className="px-6 py-3 border-b border-gray-700">Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.Order_ID} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                <td className="px-6 py-4 border-b border-gray-700 text-white">{order.Order_ID}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-white">{order.Fertilizer_Name}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-white">{order.Order_Status}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-white">
                  {new Date(order.Order_Date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 border-b border-gray-700 text-white">
                  {order.Delivery_Date ? new Date(order.Delivery_Date).toLocaleDateString() : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackOrder;