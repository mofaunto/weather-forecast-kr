import React from "react";
import { iconUrlFromCode } from "../api/weatherapi";

function Forecast({ title, items }) {
  return (
    <div>
      <div className='flex items-center justify-start mt-4'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        {items?.map((item) => {
          const month_num = Number(item.title.slice(6, 7));
          let month = new Date(0, month_num - 1)
            .toLocaleString("en-US", { month: "long" })
            .slice(0, 3);

          const key = item.title;

          return (
            <div
              key={key}
              className='flex flex-col items-center justify-center'
            >
              <p className='font-light text-sm'>{`${item.title.slice(
                8,
                11
              )} ${month}`}</p>

              <img
                src={iconUrlFromCode(item.icon)}
                className='w-12 my-1'
                alt='Temp'
              ></img>
              <p className='font-medium'>{`${Math.round(item.temp - 273)}°`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
