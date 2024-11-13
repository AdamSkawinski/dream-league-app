// src/components/Header.tsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">F</span>
          <span className="text-xl font-bold">Dream League</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-500">Players</a>
          <a href="#" className="hover:text-green-500">Squad Builder</a>
          <a href="#" className="hover:text-green-500">SBCs</a>
          <a href="#" className="hover:text-green-500">Squads</a>
          <a href="#" className="hover:text-green-500">Market</a>
          <a href="#" className="hover:text-green-500">Evolutions</a>
        </nav>

        {/* Secondary Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-green-500">News</a>
          <a href="#" className="hover:text-green-500">Objectives</a>
          <a href="#" className="hover:text-green-500">Rush</a>
          <a href="#" className="hover:text-green-500">More</a>
        </nav>

        {/* Sign In Button */}
        <button className="ml-4 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-400">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
