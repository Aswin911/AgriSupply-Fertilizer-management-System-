import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Farmer from './pages/Farmer';
import Manufacturer from './pages/Manufacturer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
