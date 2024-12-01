import React from "react";
function NavAvatar() {
  return (
    <li className="relative group">
      {/* Avatar and Dropdown Trigger */}
      <button
        className="flex items-center focus:outline-none"
        id="dropdown-button"
      >
        <img
          src={profileImg}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="hidden md:inline-block ml-2 font-medium">
          Siddhant Tomar
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1 hidden md:block"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <ul
        className="absolute right-0 hidden group-focus-within:block group-hover:block bg-white shadow-lg mt-2 w-48 rounded-lg overflow-hidden z-10"
      >
        <li className="p-4 border-b text-sm">
          <h6 className="font-semibold">Siddhant</h6>
          <p className="text-gray-500 text-xs">Web Developer</p>
        </li>

        <li>
          <a
            href="users-profile.html"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a5 5 0 00-5 5v3a5 5 0 0010 0V7a5 5 0 00-5-5zm1 9a1 1 0 11-2 0 1 1 0 012 0zm-6 3a8 8 0 1112 0H5z"
                clipRule="evenodd"
              />
            </svg>
            My Profile
          </a>
        </li>

        {/* Account Settings */}
        <li>
          <a
            href="users-profile.html"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11.75 3a1 1 0 01.11 1.99h-3.5a1 1 0 01-.11-1.99h3.5zM2 8a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
            </svg>
            Account Settings
          </a>
        </li>

        {/* Need Help */}
        <li>
          <a
            href="pages-faq.html"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a7 7 0 100 14A7 7 0 109 2zm1 11a1 1 0 11-2 0 1 1 0 012 0zm.25-5a.75.75 0 10-1.5 0 .75.75 0 101.5 0z" />
            </svg>
            Need Help?
          </a>
        </li>

        {/* Sign Out */}
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.293a1 1 0 011.414 0l4-4a1 1 0 00-1.414-1.414L11 12.586V4a1 1 0 10-2 0v8.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4z"
                clipRule="evenodd"
              />
            </svg>
            Sign Out
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
