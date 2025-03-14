import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [farmers, setFarmers] = useState([]);
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('Manufacturers');

  useEffect(() => {
    fetchUsers();
    fetchManufacturers();
    fetchFarmers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setError('Failed to fetch users. Check the backend.');
    }
  };

  const fetchManufacturers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/manufacturers');
      setManufacturers(response.data);
    } catch (error) {
      console.error('Failed to fetch manufacturers:', error);
      setError('Failed to fetch manufacturers. Check the backend.');
    }
  };

  const fetchFarmers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/farmers');
      setFarmers(response.data);
    } catch (error) {
      console.error('Failed to fetch farmers:', error);
      setError('Failed to fetch farmers. Check the backend.');
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const handleDeleteManufacturer = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/manufacturers/${id}`);
      setManufacturers(manufacturers.filter(manufacturer => manufacturer.id !== id));
    } catch (error) {
      console.error('Failed to delete manufacturer:', error);
    }
  };

  const handleDeleteFarmer = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/farmers/${id}`);
      setFarmers(farmers.filter(farmer => farmer.id !== id));
    } catch (error) {
      console.error('Failed to delete farmer:', error);
    }
  };

  const renderTable = () => {
    switch (selectedOption) {
      case 'Users':
        return (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 border-b border-gray-700">Username</th>
                <th className="px-6 py-3 border-b border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                  <td className="px-6 py-4 border-b border-gray-700 text-white">{user.username}</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-white">
                    <button
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'Manufacturers':
        return (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 border-b border-gray-700">Manufacturer Name</th>
                <th className="px-6 py-3 border-b border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map((manufacturer, index) => (
                <tr key={manufacturer.id} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                  <td className="px-6 py-4 border-b border-gray-700 text-white">{manufacturer.Name}</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-white">
                    <button
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => handleDeleteManufacturer(manufacturer.Manufacturer_ID)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'Farmers':
        return (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 border-b border-gray-700">Farmer Name</th>
                <th className="px-6 py-3 border-b border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {farmers.map((farmer, index) => (
                <tr key={farmer.id} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                  <td className="px-6 py-4 border-b border-gray-700 text-white">{farmer.Name}</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-white">
                    <button
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => handleDeleteFarmer(farmer.Farmer_ID)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Manage Users
      </h2>
      {error && <p className="text-red-600">{error}</p>}
      <div className="mt-4">
        <label htmlFor="selectOption" className="block text-sm font-medium text-gray-700 mb-2">Select Category</label>
        <select
          id="selectOption"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
        >
          <option value="Manufacturers">Manufacturers</option>
          <option value="Farmers">Farmers</option>
          <option value="Users">Users</option>
        </select>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        {renderTable()}
      </div>
    </div>
  );
};

export default ManageUsers;