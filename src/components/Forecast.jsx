import React from "react";
import { iconUrlFromCode } from "../api/weatherapi";

function Forecast({ title, items }) {
  const maxHourlyItems = 5;

  const getCurrentTimeIndex = () => {
    const currentTime = new Date().getHours();
    const currentDay = new Date().getDate();

    // Find the index of the first hourly forecast for the current day and time
    const currentIndex = items.findIndex(
      (item) =>
        new Date(item.title).getDate() === currentDay &&
        new Date(item.title).getHours() >= currentTime
    );

    return currentIndex !== -1 ? currentIndex : 0;
  };

  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>

      <hr className='my-2' />

      <div className='flex flex-row items-center justify-between text-white'>
        {items
          ?.slice(getCurrentTimeIndex(), getCurrentTimeIndex() + maxHourlyItems)
          .map((item) => (
            <div
              key={item.title}
              className='flex flex-col items-center justify-center'
            >
              <p className='font-light text-sm'>
                {title === "Hourly Forecast"
                  ? item.title.slice(11, 16)
                  : `${item.title.slice(8, 11)} ${new Date(
                      0,
                      Number(item.title.slice(6, 7)) - 1
                    )
                      .toLocaleString("en-US", { month: "long" })
                      .slice(0, 3)}`}
              </p>

              <img
                src={iconUrlFromCode(item.icon)}
                className='w-12 my-0'
                alt='Temp'
              />
              <p className='font-medium'>{`${Math.round(item.temp - 273)}°`}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Forecast;
