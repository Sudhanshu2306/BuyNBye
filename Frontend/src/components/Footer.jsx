import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Contact Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">CONTACT</h3>
          <p className="text-sm">
            Street: NIT RAIPUR<br />
            City: Raipur<br />
            State Full: <br />
            Zip Code: 490201<br />
            Phone Number: 4132312432<br/>
          </p>
        </div>

        {/* Menu Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">MENU</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-200"
              >
                SELL
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-200"
              >
                BUY
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-200"
              >
                
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-200"
              >
                Our Blog
              </a>
            </li>
           
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">RECENT POSTS</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-200"
              >
                Breaking Down Barriers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-200"
              >
                A Celebration of Success
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition duration-200"
              >
                A World of Opportunities
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">NEWSLETTER</h3>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className=" px-3 py-2 rounded-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring focus:ring-gray-600"
            />
            <button className="bg-red-600 h-10 w-50 hover:bg-red-700 text-sm text-white px-2 py-1 rounded-md">
              SIGN UP
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
             
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2024 
      </div>
    </footer>
  );
}

export default Footer;
