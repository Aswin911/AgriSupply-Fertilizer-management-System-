import React, { useState } from 'react';
import axios from 'axios';

const SubmitFeedback = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    Farmer_ID: '',
    Fertilizer_ID: '',
    Feedback_Text: '',
    Rating: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
      const response = await axios.post('http://localhost:3001/feedback', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('Feedback submitted:', response.data);
      setShowForm(false);
      setSuccessMessage('Feedback submitted successfully! ✅');
      
      setFormData({
        Farmer_ID: '',
        Fertilizer_ID: '',
        Feedback_Text: '',
        Rating: ''
      });
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      setError('Failed to submit feedback. Check the backend.');
    } finally {
      setLoading(false);
      setTimeout(() => setSuccessMessage(''), 3000); // Remove success message after 3s
    }
  };

  return (
    <div className="my-6 ml-6">
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
        Submit Feedback
      </h2>
      <div className="mt-4 flex items-center">
        <p className="text-lg text-gray-600">Rate Product</p>
        <button
          className="ml-auto bg-blue-600 text-white px-6 py-1.5 rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setShowForm(true)}
        >
          Submit
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
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Submit Feedback</h3>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'Farmer_ID', label: 'Farmer ID', type: 'number' },
                { name: 'Fertilizer_ID', label: 'Fertilizer ID', type: 'number' },
                { name: 'Feedback_Text', label: 'Feedback Text' },
                { name: 'Rating', label: 'Rating', type: 'number' }
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
    </div>
  );
};

export default SubmitFeedback;