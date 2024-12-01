import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-black">
        <span className="italic">Z.</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-8 text-gray-700">
        <a href="#new" className="hover:text-black transition">
          New Stuff
        </a>
        <a href="#shop" className="hover:text-black transition">
          Shop
        </a>
        <a href="#events" className="hover:text-black transition">
          Events
        </a>
        <a href="#about" className="hover:text-black transition">
          About
        </a>
      </div>

      {/* Shopping Bag Icon */}
      <div className="flex items-center space-x-2">
        <div className="relative">
        
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar