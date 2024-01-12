import React from "react";

function ButtonsHeader() {
  //Cities for the top header buttons
  const cities = [
    {
      id: 1,
      title: "Seoul",
    },
    {
      id: 2,
      title: "Daejeon",
    },
    {
      id: 3,
      title: "Daegu",
    },
    {
      id: 4,
      title: "Busan",
    },
  ];

  return (
    <div className='flex items-center justify-around my-4'>
      {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium'>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default ButtonsHeader;
