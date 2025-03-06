import React from 'react';

function ReceiveOrders() {
  return (
    <div className="my-6 ml-6">
      {/* Page Heading */}
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Receive Orders
      </h2>

      {/* View New Orders */}
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">View New Orders</p>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          View
        </button>
      </div>

      {/* Process & Dispatch */}
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Process & Dispatch</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Process
        </button>
      </div>
    </div>
  );
}

export default ReceiveOrders;
