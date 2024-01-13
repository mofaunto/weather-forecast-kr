const formatForecastWeather = async (lat, lon) => {
  const apiKey = "API";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    const dailyForecast = extractDailyForecast(weatherData.list);

    return { daily: dailyForecast };
  } catch (error) {
    console.error("Error fetching weather forecast:", error);
    throw error;
  }
};

const extractDailyForecast = (forecastList) => {
  return forecastList
    .filter((entry, index) => index % 8 === 0)
    .map((dailyEntry) => ({
      title: dailyEntry.dt_txt,
      temp: dailyEntry.main.temp,
      icon: dailyEntry.weather[0].icon,
    }));
};

export default formatForecastWeather;
