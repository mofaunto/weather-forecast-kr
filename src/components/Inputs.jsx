import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";

function Inputs({ setQuery }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  let onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      handleSearchClick();
    }
  };

  return (
    <div className='flex flex-row justify-center my-8'>
      <div className='flex flex-row w-full items-center justify-center space-x-4'>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={onKeyDownHandler}
          type='text'
          placeholder='Enter a city name'
          className='text-lg font-light p-2 w-full shadow-xl focus:outline-none capitalize'
        />
        <UilSearch
          size={24}
          onClick={handleSearchClick}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
        />
      </div>
    </div>
  );
}

export default Inputs;
