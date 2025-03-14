import React, { useState, useEffect } from "react";
import axios from "axios";

const PlaceOrder = () => {
  const [fertilizers, setFertilizers] = useState([]);
  const [selectedFertilizer, setSelectedFertilizer] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchFertilizers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/fertilizers");
        setFertilizers(response.data);
      } catch (error) {
        console.error("Failed to fetch fertilizers:", error);
        setErrorMessage("Failed to fetch fertilizers. Check the backend.");
      }
    };

    fetchFertilizers();
  }, []);

  const handleOrder = (fertilizer) => {
    setSelectedFertilizer(fertilizer);
    setShowPopup(true);
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (quantity > selectedFertilizer.Stock_Quantity) {
      alert("Quantity exceeds available stock.");
      return;
    }
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const orderData = {
        Farmer_ID: 1, // Replace with actual Farmer ID
        Fertilizer_ID: selectedFertilizer?.Fertilizer_ID,
        Fertilizer_Name: selectedFertilizer?.Fertilizer_Name,
        Order_Quantity: quantity,
        Order_Status: "Pending",
        Order_Date: new Date().toISOString(),
        Delivery_Date: new Date(
          new Date().setDate(new Date().getDate() + 5)
        ).toISOString(),
      };

      console.log("Submitting order:", orderData);
      const response = await axios.post("http://localhost:3001/orders", orderData);
      console.log("Order placed successfully:", response.data);

      // Update the stock quantity in the table
      setFertilizers((prevFertilizers) =>
        prevFertilizers.map((fertilizer) =>
          fertilizer.Fertilizer_ID === selectedFertilizer.Fertilizer_ID
            ? { ...fertilizer, Stock_Quantity: fertilizer.Stock_Quantity - quantity }
            : fertilizer
        )
      );

      setShowPopup(false);
      setQuantity("");
      setSelectedFertilizer(null);
      setSuccessMessage("Order placed successfully! ✅");
    } catch (error) {
      console.error("Error placing order:", error);
      setErrorMessage("Failed to place order. Check the backend.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div className={`my-6 ml-6 ${showPopup ? 'bg-white' : ''}`}>
      <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">Place Order</h2>

      {/* Success and Error Messages */}
      {successMessage && (
        <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded-md">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded-md">
          {errorMessage}
        </div>
      )}

      {/* Fertilizer Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left text-gray-400 bg-gray-800">
          <thead className="text-xs text-gray-300 uppercase bg-gray-700">
            <tr>
              <th className="px-6 py-3">Fertilizer Name</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {fertilizers.map((fertilizer) => (
              <tr
                key={fertilizer.Fertilizer_ID}
                className="border-b bg-gray-900 hover:bg-gray-700"
              >
                <td className="px-6 py-4">{fertilizer.Fertilizer_Name}</td>
                <td className="px-6 py-4">{fertilizer.Type}</td>
                <td className="px-6 py-4">{fertilizer.Stock_Quantity}</td>
                <td className="px-6 py-4">{fertilizer.Price_per_Unit}</td>
                <td className="px-6 py-4">
                  <button
                    className="text-blue-400 hover:underline"
                    onClick={() => handleOrder(fertilizer)}
                  >
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Order Fertilizer</h3>

            {/* Fertilizer Details in Popup */}
            {selectedFertilizer && (
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Fertilizer:</span> {selectedFertilizer.Fertilizer_Name}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Type:</span> {selectedFertilizer.Type}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Available Stock:</span> {selectedFertilizer.Stock_Quantity}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Price per Unit:</span> ${selectedFertilizer.Price_per_Unit}
                </p>
              </div>
            )}

            {/* Order Form */}
            <form onSubmit={handleSubmitOrder} className="space-y-4 bg-white p-4 rounded-md">
              <div className="relative">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;