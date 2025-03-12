import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageFertilizers = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    Fertilizer_Name: '',
    Type: '',
    NPK_Composition: '',
    Price_per_Unit: '',
    Stock_Quantity: '',
    Manufacturer_ID: ''
  });
  const [fertilizers, setFertilizers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchFertilizers();
  }, []);

  const fetchFertilizers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/fertilizers');
      setFertilizers(response.data);
    } catch (error) {
      console.error('Failed to fetch fertilizers:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:3001/fertilizers', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('Fertilizer added:', response.data);
      setShowForm(false);
      setSuccessMessage('Fertilizer added successfully! ✅');
      
      setFormData({
        Fertilizer_Name: '',
        Type: '',
        NPK_Composition: '',
        Price_per_Unit: '',
        Stock_Quantity: '',
        Manufacturer_ID: ''
      });

      fetchFertilizers(); 
    } catch (error) {
      console.error('Failed to add fertilizer:', error);
      setError('Failed to add fertilizer. Check the backend.');
    } finally {
      setLoading(false);
      setTimeout(() => setSuccessMessage(''), 3000); // Remove success message after 3s
    }
  };

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Manage Fertilizers
      </h2>
      <div className="mt-4 flex items-center">
        <p className="text-lg text-gray-600">Add New Fertilizer</p>
        <button
          className="ml-auto bg-blue-600 text-white px-6 py-1.5 rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setShowForm(true)}
        >
          Add
        </button>
      </div>

      {successMessage && (
        <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded-md">
          {successMessage}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Add New Fertilizer</h3>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'Fertilizer_Name', label: 'Fertilizer Name' },
                { name: 'Type', label: 'Type' },
                { name: 'NPK_Composition', label: 'NPK Composition' },
                { name: 'Price_per_Unit', label: 'Price per Unit', type: 'number' },
                { name: 'Stock_Quantity', label: 'Stock Quantity', type: 'number' },
                { name: 'Manufacturer_ID', label: 'Manufacturer ID', type: 'number' }
              ].map(({ name, label, type = 'text' }) => (
                <div key={name} className="relative">
                  <input
                    type={type}
                    name={name}
                    id={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    placeholder={label}
                    required
                  />
                </div>
              ))}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>

            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {!showForm && (
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
      )}
    </div>
  );
};

export default ManageFertilizers;
