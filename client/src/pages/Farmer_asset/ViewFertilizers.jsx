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
      <div className="relative overflow-x-auto mt-6">
        <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="text-xs uppercase bg-gray-100 text-gray-800">
            <tr>
              <th className="px-6 py-3 border-b">Fertilizer Name</th>
              <th className="px-6 py-3 border-b">Type</th>
              <th className="px-6 py-3 border-b">NPK Composition</th>
              <th className="px-6 py-3 border-b">Price per Unit</th>
              <th className="px-6 py-3 border-b">Stock Quantity</th>
              <th className="px-6 py-3 border-b">Manufacturer ID</th>
            </tr>
          </thead>
          <tbody>
            {fertilizers.map((fertilizer, index) => (
              <tr key={fertilizer.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 border">{fertilizer.Fertilizer_Name}</td>
                <td className="px-6 py-4 border">{fertilizer.Type}</td>
                <td className="px-6 py-4 border">{fertilizer.NPK_Composition}</td>
                <td className="px-6 py-4 border">{fertilizer.Price_per_Unit}</td>
                <td className="px-6 py-4 border">{fertilizer.Stock_Quantity}</td>
                <td className="px-6 py-4 border">{fertilizer.Manufacturer_ID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewFertilizers;