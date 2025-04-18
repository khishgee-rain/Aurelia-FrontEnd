import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#181818] text-gray-300 text-base border-t-4 border-[#C19D69] pt-20 pb-12 px-4 sm:px-8 md:px-12 relative">
    {/* Decorative Diamond */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#181818] border-l-4 border-t-4 border-[#C19D69] rotate-45 z-10" />

    {/* Footer Content */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
      
      {/* Company Info */}
      <div className="text-center sm:text-left">
        <h4 className="text-white text-2xl font-bold tracking-wide mb-4">Aurelia</h4>
        <p className="leading-relaxed text-base">
          Seoul Street 16-22, Near State Department Store<br />
          +976 99999999<br />
          Aurelia.hotels@gmail.com
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-center sm:text-left">
  <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-base">
          

          <li className="hover:text-white cursor-pointer transition">
            <Link to="/aboutus" className="text-[#C19D69] hover:text-white transition">About Us</Link>
            </li>
    
    <li className="hover:text-white cursor-pointer transition">
      <Link to="/faq"  className="text-[#C19D69] hover:text-white transition">FAQ</Link>
    </li>

          <li className="hover:text-white cursor-pointer transition">
            <Link to="/location" className="text-[#C19D69] hover:text-white transition">Location</Link>
    </li>
  </ul>
</div>

      {/* Social Media */}
<div className="text-center sm:text-left">
  <h4 className="text-white text-xl font-semibold mb-4">Follow Us</h4>
  <ul className="space-y-2 text-base">
    <li className="flex justify-center sm:justify-start items-center gap-2 hover:text-white cursor-pointer transition">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <FaFacebookF className="text-[#C19D69]" /> Facebook
      </a>
    </li>
    <li className="flex justify-center sm:justify-start items-center gap-2 hover:text-white cursor-pointer transition">
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <FaTwitter className="text-[#C19D69]" /> Twitter
      </a>
    </li>
    <li className="flex justify-center sm:justify-start items-center gap-2 hover:text-white cursor-pointer transition">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <FaInstagram className="text-[#C19D69]" /> Instagram
      </a>
    </li>
  </ul>
</div>


      {/* Newsletter */}
      <div className="text-center sm:text-left">
        <h4 className="text-white text-xl font-semibold mb-4">Subscribe to our newsletter</h4>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded text-black placeholder-gray-500 focus:outline-none text-base w-full"
          />
          <button className="bg-[#C19D69] text-black px-5 py-3 rounded hover:bg-[#b68a4d] transition font-semibold text-base">
            OK
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
