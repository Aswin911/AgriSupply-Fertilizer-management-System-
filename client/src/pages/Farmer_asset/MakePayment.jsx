import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MakePayment = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/farmers')
      .then(response => {
        setFarmers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the farmers!", error);
      });
  }, []);

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Make Payment
      </h2>
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">Choose Payment Mode</p>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Proceed
        </button>
      </div>
      <div>
        <h3>Farmers List:</h3>
        <ul>
          {farmers.map(farmer => (
            <li key={farmer.Farmer_ID}>{farmer.Name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MakePayment;