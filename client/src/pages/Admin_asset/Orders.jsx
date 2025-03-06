import React from 'react';

function Orders() {
  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
      Oversee Orders & Payments
      </h2>
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Monitor Transactions</p>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          View
        </button>
      </div>
    </div>
  );
}

export default Orders;