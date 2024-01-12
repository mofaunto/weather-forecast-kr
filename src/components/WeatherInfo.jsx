import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function WeatherInfo() {
  return (
    <div>
      <div className='flex items-center justify-center py-4 text-xl text-green-400'>
        <p>Current weather</p>
      </div>

      <div className='flex flex-row items-center justify-between text-white py-4'>
        <img
          src='http://openweathermap.org/img/wn/01d@2x.png'
          className='w-24'
        />
        <p className='text-4xl'>30°</p>
        {/* Additional weather info */}
        <div className='flex flex-col space-y-2 items-start'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-2' />
            Real feel:
            <span className='font-medium ml-2'>32°</span>
          </div>

          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-2' />
            Humidity:
            <span className='font-medium ml-2'>40%</span>
          </div>

          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-2' />
            Wind Speed:
            <span className='font-medium ml-2'>1.2km/h</span>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-2 text-white py-4'>
        <UilSun size={24} />
        <p className='font-light'>
          Sunrise:<span className='font-medium mx-2'>6:25</span>
        </p>

        <UilSunset size={24} />
        <p className='font-light'>
          Sunset:<span className='font-medium mx-2'>18:00</span>
        </p>

        <UilArrowUp size={24} />
        <p className='font-light'>
          High:<span className='font-medium mx-2'>35°</span>
        </p>

        <UilArrowDown size={24} />
        <p className='font-light'>
          Low:<span className='font-medium mx-2'>25°</span>
        </p>
      </div>
    </div>
  );
}

export default WeatherInfo;
