import React from 'react';

const ManageFertilizers = () => {
  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Manage Fertilizers
      </h2>
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Add New Fertilizer</p>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Add
        </button>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Update Stock</p>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Update
        </button>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Modify Details</p>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Modify
        </button>
      </div>
    </div>
  );
};

export default ManageFertilizers;