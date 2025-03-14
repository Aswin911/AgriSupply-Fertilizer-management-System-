// filepath: d:\web dev\AgriSupply\client\src\App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Manufacturer from './pages/Manufacturer';
import Farmer from './pages/Farmer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/manufacturer/*" element={<Manufacturer />} />
            <Route path="/farmer/*" element={<Farmer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;