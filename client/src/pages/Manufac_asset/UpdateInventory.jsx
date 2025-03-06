import React from 'react';

function UpdateInventory() {
  return (
    <div className="my-6 ml-6">
      {/* Page Heading */}
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Update Inventory
      </h2>

      {/* Adjust Stock Levels */}
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Adjust Stock Levels</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Adjust
        </button>
      </div>

      {/* Update Last Updated Date */}
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Update Last Updated Date</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdateInventory;
