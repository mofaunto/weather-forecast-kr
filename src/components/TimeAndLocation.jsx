import React from "react";

function TimeAndLocation({ weather: { timezone, name, country } }) {
  const getCityTime = () => {
    const currentUtcTime =
      new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    const cityOffset = currentUtcTime + 1000 * timezone;
    const cityTime = new Date(cityOffset);

    return {
      date: cityTime.toDateString().split(" "),
      time: cityTime.toTimeString().split(" ")[0].split(":"),
    };
  };

  const { date: cityDate, time: cityTime } = getCityTime();
  const [hours, minutes] = cityTime;

  return (
    <div>
      <div className='flex items-center justify-center my-8'>
        <p className='text-white text-xl font-light'>
          {`${cityDate[0]} , ${cityDate[1]} ${cityDate[2]} ${cityDate[3]}`} |
          Local Time : {`${hours}:${minutes}`}
        </p>
      </div>
      <div className='flex items-center justify-center my-2'>
        <p className='text-white text-3xl font-medium'>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
