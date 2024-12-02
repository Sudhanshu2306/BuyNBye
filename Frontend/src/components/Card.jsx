import React from 'react'

function Card() {
    const t=2;
    return (
        <div className="max-w-sm bg-gray-800 h-80 w-80 rounded-3xl shadow-md overflow-hidden">
        {/* Image Section */}
        <div className="bg-lime-500">
          <img
            src="https://via.placeholder.com/300x200" // Replace this with the actual image URL
            alt="Shoes"
            className="w-full object-cover"
          />
        </div>
  
        {/* Content Section */}
        <div className="p-4">
          {/* Title Section */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Shoes!</h3>
            <span className= { `text-sm font-semibold text-pink-500 ${t>=2?"block":"hidden"} bg-pink-100 px-2 py-1 rounded-full `}>
              NEW
            </span>
          </div>
  
          {/* Description */}
          <p className="text-sm text-gray-400 mt-2">
            If a dog chews shoes whose shoes does he choose?
          </p>
  
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs font-medium text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
              Fashion
            </span>
            <span className="text-xs font-medium text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
              Products
            </span>
          </div>
        </div>
      </div>
  
    )
}

export default Card