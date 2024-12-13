import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

function HomeP() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data/list.json'); 
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
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
