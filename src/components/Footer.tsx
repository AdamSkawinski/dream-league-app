// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <div>
          <p>© 2024 Dream League. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
