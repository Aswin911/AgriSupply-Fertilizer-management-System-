import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewFertilizers = () => {
  const [fertilizers, setFertilizers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFertilizers();
  }, []);

  const fetchFertilizers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/fertilizers');
      setFertilizers(response.data);
    } catch (error) {
      console.error('Failed to fetch fertilizers:', error);
      setError('Failed to fetch fertilizers. Check the backend.');
    }
  };

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        View Fertilizers
      </h2>
      {error && <p className="text-red-600">{error}</p>}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3 border-b border-gray-700">Fertilizer Name</th>
              <th className="px-6 py-3 border-b border-gray-700">Type</th>
              <th className="px-6 py-3 border-b border-gray-700">NPK Composition</th>
              <th className="px-6 py-3 border-b border-gray-700">Price per Unit</th>
              <th className="px-6 py-3 border-b border-gray-700">Stock Quantity</th>
              <th className="px-6 py-3 border-b border-gray-700">Manufacturer ID</th>
            </tr>
          </thead>
          <tbody>
            {fertilizers.map((fertilizer, index) => (
              <tr key={fertilizer.Fertilizer_ID} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                <td className="px-6 py-4 border-b border-gray-700 text-white">{fertilizer.Fertilizer_Name}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-white">{fertilizer.Type}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-white">{fertilizer.NPK_Composition}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-white">{fertilizer.Price_per_Unit}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-white">{fertilizer.Stock_Quantity}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-white">{fertilizer.Manufacturer_ID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewFertilizers;