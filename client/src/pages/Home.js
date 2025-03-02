import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/login">Login</Link></li>
                    <li className="navbar-item"><Link to="/register">Register</Link></li>
                    <li className="navbar-item"><Link to="/contact">Contact Us</Link></li>
                    <li className="navbar-item"><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
            <div className="home-content">
                <h1>Home!!!</h1>
            </div>
        </div>
    );
}

export default Home;