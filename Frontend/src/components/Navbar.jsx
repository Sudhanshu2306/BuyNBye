import React, { useState } from 'react';
import NavAvatar from './NavAvatar';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white  border-gray-200 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0 text-black font-bold text-xl">
            Buy N Bye
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex justify-center flex-grow space-x-8">
            <a
              href="#"
              className="text-gray-800 hover:text-black font-medium transition"
            >
              Sell
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-black font-medium transition"
            >
              Buy
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-black font-medium transition"
            >
              Events
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-black font-medium transition"
            >
              About
            </a>
          </div>

          {/* Placeholder for Button or Additional Content */}
          <div className="hidden md:flex">
            <NavAvatar></NavAvatar>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-2 px-4 pt-4 pb-6">
            <a
              href="#"
              className="block text-gray-800 hover:text-black font-medium transition"
            >
              New Stuff
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-black font-medium transition"
            >
              Shop
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-black font-medium transition"
            >
              Events
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-black font-medium transition"
            >
              About
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
