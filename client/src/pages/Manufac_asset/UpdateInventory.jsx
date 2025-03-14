import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateInventory = () => {
  const [fertilizers, setFertilizers] = useState([]);
  const [selectedFertilizer, setSelectedFertilizer] = useState(null);
  const [formData, setFormData] = useState({
    Fertilizer_Name: '',
    Type: '',
    Price_per_Unit: '',
    Stock_Quantity: ''
  });

  useEffect(() => {
    const fetchFertilizers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fertilizers');
        setFertilizers(response.data);
      } catch (error) {
        console.error('Failed to fetch fertilizers:', error);
      }
    };

    fetchFertilizers();
  }, []);

  const handleUpdate = (fertilizer) => {
    setSelectedFertilizer(fertilizer);
    setFormData({
      Fertilizer_Name: fertilizer.Fertilizer_Name,
      Type: fertilizer.Type,
      Price_per_Unit: fertilizer.Price_per_Unit,
      Stock_Quantity: fertilizer.Stock_Quantity
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/fertilizers/${id}`);
      setFertilizers(fertilizers.filter(item => item.Fertilizer_ID !== id));
    } catch (error) {
      console.error('Failed to delete fertilizer:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/fertilizers/${selectedFertilizer.Fertilizer_ID}`, formData);
      setFertilizers(fertilizers.map(fertilizer => 
        fertilizer.Fertilizer_ID === selectedFertilizer.Fertilizer_ID ? response.data : fertilizer
      ));
      setSelectedFertilizer(null);
    } catch (error) {
      console.error('Failed to update fertilizer:', error);
    }
  };

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Update Inventory
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Fertilizer Name</th>
              <th scope="col" className="px-6 py-3">Type</th>
              <th scope="col" className="px-6 py-3">Stock Quantity</th>
              <th scope="col" className="px-6 py-3">Price per Unit</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fertilizers.map((fertilizer) => (
              <tr key={fertilizer.Fertilizer_ID} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {fertilizer.Fertilizer_Name}
                </th>
                <td className="px-6 py-4">{fertilizer.Type}</td>
                <td className="px-6 py-4">{fertilizer.Stock_Quantity}</td>
                <td className="px-6 py-4">{fertilizer.Price_per_Unit}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleUpdate(fertilizer)}
                  >
                    Update
                  </button>
                  <button
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => handleDelete(fertilizer.Fertilizer_ID)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedFertilizer && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Update Fertilizer</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'Fertilizer_Name', label: 'Fertilizer Name' },
                { name: 'Type', label: 'Type' },
                { name: 'Price_per_Unit', label: 'Price per Unit', type: 'number' },
                { name: 'Stock_Quantity', label: 'Stock Quantity', type: 'number' }
              ].map(({ name, label, type = 'text' }) => (
                <div key={name} className="relative">
                  <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    type={type}
                    name={name}
                    id={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              ))}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setSelectedFertilizer(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedFertilizer(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateInventory;