import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Medicine Management App</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/user-profile" className="text-white">User Profile</Link>
          <Link to="/add-medicine" className="text-white">Add Medicine</Link>
          <Link to="/dashboard" className="text-white">Dashboard</Link>
          <Link to="/medication-tracker" className="text-white">Medication Tracker</Link>
          <Link to="/faq" className="text-white">FAQ</Link>
          <Link to="/signup" className="text-white">Sign Up</Link>
          <Link to="/terms-and-conditions" className="text-white">Terms and Conditions</Link>
          <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;