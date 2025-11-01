import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-6 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
              <span className="text-btnColor text-lg font-bold">S</span>
            </div>
            <h2 className="text-xl font-bold">Shrinklink</h2>
          </div>

          <div className="flex gap-8 items-center">
            <a href="/" className="text-gray-200 hover:text-white transition-colors text-base font-medium">Home</a>
            <a href="/about" className="text-gray-200 hover:text-white transition-colors text-base font-medium">About</a>
            <a href="/dashboard" className="text-gray-200 hover:text-white transition-colors text-base font-medium">Dashboard</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-btnColor transition-colors hover:scale-105 transform duration-200">
              <FaFacebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-btnColor transition-colors hover:scale-105 transform duration-200">
              <FaInstagram size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-btnColor transition-colors hover:scale-105 transform duration-200">
              <FaTwitter size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-btnColor transition-colors hover:scale-105 transform duration-200">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-200">
            &copy; 2025 Shrinklink. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-200">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;