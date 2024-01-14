const formatForecastWeather = async (lat, lon) => {
  const apiKey = import.meta.env.VITE_WEATHER_API;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    const { daily, hourly } = extractForecast(weatherData.list);

    return { daily, hourly };
  } catch (error) {
    console.error("Error fetching weather forecast:", error);
    throw error;
  }
};

const extractForecast = (forecastList) => {
  const dailyForecast = forecastList
    .filter((entry, index) => index % 8 === 0)
    .map((dailyEntry) => ({
      title: dailyEntry.dt_txt,
      temp: dailyEntry.main.temp,
      icon: dailyEntry.weather[0].icon,
    }));

  const hourlyForecast = forecastList.map((hourlyEntry) => ({
    title: hourlyEntry.dt_txt,
    temp: hourlyEntry.main.temp,
    icon: hourlyEntry.weather[0].icon,
  }));

  return { daily: dailyForecast, hourly: hourlyForecast };
};

export default formatForecastWeather;
