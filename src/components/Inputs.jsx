import React from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-4'>
      <div className='flex flex-row w-full items-center justify-center space-x-4'>
        <input
          type='text'
          placeholder='Enter a city name'
          className='text-lg font-light p-2 w-full shadow-xl focus:outline-none capitalize'
        />
        <UilSearch
          size={24}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
        />
        <UilMapMarker
          size={24}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
        />
      </div>
    </div>
  );
}

export default Inputs;
