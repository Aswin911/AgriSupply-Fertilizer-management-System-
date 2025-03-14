import axios from 'axios';
import React, { useState, useEffect } from 'react';

function ModerateFeed() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/feedback');
        setFeedback(response.data);
      } catch (error) {
        console.error('Failed to fetch feedback:', error);
      }
    };

    if (showFeedback) {
      fetchData();
    }
  }, [showFeedback]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/feedback/${id}`);
      setFeedback(feedback.filter(item => item.Feedback_ID !== id));
    } catch (error) {
      console.error('Failed to delete feedback:', error);
    }
  };

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Moderate Feedback
      </h2>
      <div className="mt-4 flex items-center space-x-4">
        <p className="text-lg text-gray-600">View feedback</p>
        <button
          className="ml-auto bg-blue-600 text-white px-6 py-1.5 rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setShowFeedback(true)}
        >
          View
        </button>
      </div>
      {showFeedback && feedback.map((item, index) => (
        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.Feedback_Text}</h5>
          <p className="mb-3 font-normal text-gray-700">Rating: {item.Rating}/5</p>
          <p className="mb-3 font-normal text-gray-700">Farmer ID: {item.Farmer_ID}</p>
          <button
            className="bg-red-600 text-white px-4 py-1.5 rounded-lg shadow-md hover:bg-red-700 transition"
            onClick={() => handleDelete(item.Feedback_ID)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ModerateFeed;