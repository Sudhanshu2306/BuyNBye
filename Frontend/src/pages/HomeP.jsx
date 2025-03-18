import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Backendurl } from "../../Private/backend";

const HomeP = () => {
    const { isLoggedIn } = useAuth();
    if(!isLoggedIn){
        toast.error("Please Login Before Sell !!");
        return <Navigate to={"/signin"} />
    }
    // const token = useState(localStorage.getItem('accessToken') || "");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Backendurl}/api/v1/products/getAllProducts`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const text = await response.text(); 
        // console.log("Raw Response:", text); // Log response to check for HTML errors

        const result = JSON.parse(text);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=' h-full py-4'>
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-10">
          Latest Comodities for Sale!
        </h2>
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {data.length > 0 ? (
            data.map((item) => (
            <div
              className="flex-1 sm:flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_31%] xl:flex-[0_0_23%] max-w-xs"
              key={item.id}
            >
              <Card data={item} />
            </div>
          ))
          ) : (
            <p className="text-center text-gray-600">No items available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeP;
