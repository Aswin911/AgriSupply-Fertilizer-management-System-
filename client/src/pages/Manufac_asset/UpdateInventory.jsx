import React from 'react';

const UpdateInventory = () => {
  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Update Inventory
      </h2>
      <div className="mt-4 flex items-center">
        <p className="text-lg text-gray-600">Adjust Stock Levels</p>
        <button className="ml-auto bg-blue-600 text-white px-4 py-1.5 rounded-lg shadow-md hover:bg-blue-700 transition">
          Adjust
        </button>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-lg text-gray-600">Update Last Updated Date</p>
        <button className="ml-auto bg-blue-600 text-white px-4 py-1.5 rounded-lg shadow-md hover:bg-blue-700 transition">
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateInventory;
