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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Role:
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="Admin">Admin</option>
                        <option value="Farmer">Farmer</option>
                        <option value="Manufacturer">Manufacturer</option>
                    </select>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;