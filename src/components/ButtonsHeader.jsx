import React from "react";

function ButtonsHeader({ setQuery }) {
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
    <div className='flex items-center justify-around my-2'>
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => setQuery({ q: city.title })}
          className='text-white text-lg font-medium hover:outline hover:scale-110 rounded-2xl px-4 py-2'
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default ButtonsHeader;
