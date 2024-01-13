import React from "react";
import { iconUrlFromCode } from "../api/weatherapi";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function WeatherInfo({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
}) {
  let sunriseDate = new Date(sunrise * 1000);
  let sunriseHours = sunriseDate.getHours();

  let sunriseMin = sunriseDate.getMinutes();
  if (sunriseMin < 10) {
    sunriseMin = "0" + sunriseMin;
  }

  let sunSetDate = new Date(sunset * 1000);
  let sunSetHours = sunSetDate.getHours();

  let sunSetMin = sunSetDate.getMinutes();
  if (sunSetMin < 10) {
    sunSetMin = "0" + sunSetMin;
  }

  return (
    <div>
      <div className='flex items-center justify-center py-4 text-xl text-amber-300'>
        <p>{details}</p>
      </div>

      <div className='flex flex-row items-center justify-between text-white py-4'>
        <div className='flex flex-row items-center justify-center'>
          <img src={iconUrlFromCode(icon)} alt='Weather Now' className='w-24' />
          <p className='text-4xl'>{`${temp.toFixed()}°`}</p>
        </div>
        {/* Additional weather info */}
        <div className='flex flex-col space-y-2 items-start'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-2' />
            Real feel:
            <span className='font-medium ml-2'>{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-2' />
            Humidity:
            <span className='font-medium ml-2'>{`${humidity.toFixed()}%`}</span>
          </div>

          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-2' />
            Wind Speed:
            <span className='font-medium ml-2'>{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-2 text-white py-4'>
        <UilSun size={24} />
        <p className='font-light'>
          Sunrise:
          <span className='font-medium mx-2'>{`${sunriseHours}:${sunriseMin} `}</span>
        </p>

        <UilSunset size={24} />
        <p className='font-light'>
          Sunset:
          <span className='font-medium mx-2'>{`${sunSetHours}:${sunSetMin} `}</span>
        </p>

        <UilArrowUp size={24} />
        <p className='font-light'>
          High:
          <span className='font-medium mx-2'>{`${temp_max.toFixed()}°`}</span>
        </p>

        <UilArrowDown size={24} />
        <p className='font-light'>
          Low:
          <span className='font-medium mx-2'>{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default WeatherInfo;
