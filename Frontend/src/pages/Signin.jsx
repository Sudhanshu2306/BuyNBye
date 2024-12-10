import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Signin() {
  const [formdata,setformdata] = useState({
    email : "",
    password : ""
  });
  const { isLoggedIn , storeTokenInLS } = useAuth();
  if(isLoggedIn){
    console.log("What happen ")
    return <Navigate to={"/"} />
  }
  
  function handleinputchange(event) {
    const { name, value } = event.target;
  
    setformdata((temp) => ({
      ...temp,
      [name]: value,
    }));
  }

  const getmeloggedin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/login',formdata , { withCredentials : true});
      storeTokenInLS(response.data.data.accessToken);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row text-black rounded-lg shadow-lg bg-[#FFF7D1] max-w-4xl w-full ">
        {/* Left Section */}
        <div className="p-8 md:w-1/2 md:flex-col rounded-s-2xl">
          <h1 className="text-3xl font-bold mb-4">BuyNBye</h1>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-4">
                ✓
              </span>
              <span>Get started quickly</span>
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-4">
                ✓
              </span>
              <span>Support any business model</span>
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-4">
                ✓
              </span>
              <span>Join millions of businesses</span>
            </li>
          </ul>
          <div className="mt-8 md:mt-[245px] text-gray-400 text-sm self-baseline">
            <p>About Us</p>
            <p>Term & Conditions</p>
            <p>Contact Us</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 md:w-1/2 bg-white rounded-r-lg">
          <h2 className="text-2xl font-bold mb-6">Welcome back</h2>
          <div className="flex space-x-4 mb-6">
            <button className="w-full py-2 rounded-lg hover:bg-gray-500 bg-slate-100 ">
              {/*Google Auth Logic Here*/}Log in with Google
            </button>
          </div>
          <div className="text-center text-gray-400 mb-6">or</div>
          <form onSubmit={getmeloggedin}>
            <div className="mb-4">
              <label className="block text-black text-sm mb-2">Email</label>
              <input
                type="email"
                name='email'
                value={formdata.email}
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring focus:ring-[#6A42C2] border"
                onChange={handleinputchange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm mb-2">Password</label>
              <input
                type="password"
                name='password'
                value={formdata.password}
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring focus:ring-[#6A42C2] border"
                onChange={handleinputchange}
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <Link href="#" className="text-[#6A42C2] hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B5DFF] py-2 rounded-lg hover:bg-[#6A42C2] "
            >
              Sign in to your account
            </button>
          </form>
          <div className="text-gray-400 mt-4 text-center">
            Don't have an account yet?{' '}
            <Link to='/Signup' className="text-[#6A42C2] hover:underline">
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin