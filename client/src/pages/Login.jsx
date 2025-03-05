import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (role) {
            navigate(`/${role.toLowerCase()}`);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
                {/* Login Heading */}
                <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">Login</h2>

                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">
                    Select Role
                </label>
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option value="">Select...</option>
                    <option value="Admin">Admin</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Manufacturer">Manufacturer</option>
                </select>
                
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg focus:ring-2 focus:ring-blue-300"
                >
                    Login
                </button>

                {/* Home Button */}
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 rounded-lg focus:ring-2 focus:ring-gray-300"
                >
                    Home
                </button>
            </form>
        </div>
    );
}

export default Login;
