import React from 'react'

function Card({data}) {
    const t=2;
    const {price ,description, date, isFeatured, img} = data;
    return (
        <div className="max-w-sm bg-gray-800 h-100 w-80 rounded-3xl shadow-md overflow-hidden">
        {/* Image Section */}
        <div className="bg-lime-500">
          <img
            src={img} // Replace this with the actual image URL
            alt="Shoes"
            className="w-80 h-52 object-cover items-center justify-center"
          />
        </div>
  
        {/* Content Section */}
        <div className="p-4">
          {/* Title Section */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Shoes!</h3>
            <span className= { `text-sm font-semibold text-pink-500 ${isFeatured==true?"block":"hidden"} bg-pink-100 px-2 py-1 rounded-full `}>
              NEW
            </span>
          </div>
  
          {/* Description */}
          <p className="text-sm text-gray-400 mt-2">
            {description}
          </p>
  
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs font-medium text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
              Fashion
            </span>
            <span className="text-xs font-medium text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
              <h1>Price - <span>{price}</span></h1>
            </span>
            <span className="text-xs font-medium text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
              {date}
            </span>
          </div>
        </div>
      </div>
  
    )
}

export default Card