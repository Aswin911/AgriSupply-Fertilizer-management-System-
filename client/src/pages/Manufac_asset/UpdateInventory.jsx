import React from 'react';

const UpdateInventory = () => {
  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Update Inventory
      </h2>
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Adjust Stock Levels</p>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Adjust
        </button>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Update Last Updated Date</p>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateInventory;