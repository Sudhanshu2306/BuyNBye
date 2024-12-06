import React, { useState } from "react";

const Sell = () => {
    const [imagePreviews, setImagePreviews] = useState([]);

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
      });
    });
  
    Promise.all(newPreviews).then((loadedImages) => {
        setImagePreviews((prev) => [...prev, ...loadedImages]);
        });
    };
  

    // Remove the uploaded image
    const handleRemoveImage = (index) => {
        setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    };
  

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-20">
    
    <div className="flex flex-col md:flex-row min-h-screen bg-white rounded-sm p-20">
      {/* Left Side - Image Preview Area */}
      <div className="flex flex-1 items-center justify-center border-dashed border-2 border-gray-300 rounded-lg bg-white p-6">
        {imagePreviews.length > 0 ? (
        imagePreviews.map((preview, index) => (
        <div key={index} className="relative flex flex-col items-center">
            <img
            src={preview}
            alt={`Uploaded Preview ${index + 1}`}
            className="max-h-40 max-w-full object-contain mb-2"
            />
            <button
            onClick={() => handleRemoveImage(index)}
            className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 text-sm"
            >
            Remove
            </button>
        </div>
        ))
    ) : (
        <div className="text-center">
            <p className="text-gray-500 mb-4">Drop files to upload or</p>
            <label
                htmlFor="fileInput"
                className="text-blue-500 cursor-pointer underline"
            >
                browse
            </label>
            <input
                id="fileInput"
                type="file"
                className="hidden"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
            />
            </div>
        )}
        </div>


      {/* Right Side - Options */}
      <div className=" border-solid border-2 border-gray-100 flex flex-col flex-1 bg-white rounded-sm p-6 mt-6 md:mt-0 md:ml-6">

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Item Name
          </label>
          <textarea className="overflow-ellipsis w-full mt-1 border rounded-md p-2 text-sm"></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select className="w-full mt-1 border rounded-md p-2 text-sm">
            <option>None</option>
            <option>Important</option>
            <option>General</option>
          </select>
        </div>

        <div className="mb-4">
          <label className=" h-4 block text-sm font-medium text-gray-700">
            Price
          </label>
          <textarea className=" w-full mt-1 border rounded-md p-2 text-sm"></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea className=" overflow-ellipsis w-full mt-1 border rounded-md p-2 text-sm"></textarea>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="sendCopy"
            className="mr-2 border-gray-300"
          />
          <label htmlFor="sendCopy" className="text-sm text-gray-700">
            Send me a copy
          </label>
        </div>

        <div className="flex justify-between">
          <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
            Upload files
          </button>
          <button className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700">
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sell;
