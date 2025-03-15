import React, { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { Backendurl } from "../../Private/backend";
function AdditionalButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {logout,user} = useAuth();
  const handleLogout = async () => {
    try {
      logout();
      const response = await axios.get(`${Backendurl}/api/v1/users/logout`, {
        withCredentials: true,
      });
  
      console.log('Response is:', response.data);
      // Clear user session or state here
      // logout(); // Uncomment and implement as needed
    } catch (error) {
      console.error('Error during logout:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        {/* Replace the placeholder below with your image */}
        <img
          src={`https://avatar.iran.liara.run/public/${user.gender === 'Male' ? `boy` : `girl`}?username=${user.name}`}
          alt="Dropdown Icon"
          className="w-10 h-10 rounded-full"
        />
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2 text-gray-700">
            <li>
              <a
                link=""
                className="block px-4 py-2 hover:bg-gray-100"
              >
                My Profile
              </a>
            </li>
            <li>
              <a
                link=""
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Need Help
              </a>
            </li>
            <li>
              <a
                onClick={handleLogout}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdditionalButton;
