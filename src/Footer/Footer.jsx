import React from 'react';
import footer from '../assets/footer.webp'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={footer}
              alt="Suzuki Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              Suzuki Bangladesh is the exclusive distributor of Suzuki motorcycles. Explore our models, prices, accessories, and special offers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/bikes" className="text-gray-400 hover:text-white">Bikes</Link></li>
              <li><Link to="/service" className="text-gray-400 hover:text-white">Service</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
              <li><Link to="/dealer" className="text-gray-400 hover:text-white">Dealer Locator</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400">Address: 387, Tejgaon I/A, Dhaka-1208</p>
            <p className="text-gray-400">Phone: 16638</p>
            <p className="text-gray-400">Email: info@suzuki.com.bd</p>
            <div className="mt-4">
              <a href="https://www.facebook.com/suzukibangladesh" className="text-gray-400 hover:text-white mr-4" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.youtube.com/suzukibangladesh" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Suzuki Bangladesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
