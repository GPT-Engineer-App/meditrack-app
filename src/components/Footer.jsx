import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <div className="flex justify-center space-x-4">
          <Link to="/terms-and-conditions" className="text-white">Terms and Conditions</Link>
          <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
          <Link to="/faq" className="text-white">FAQ</Link>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Medicine Management App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;