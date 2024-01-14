import { useEffect, useState } from "react";
import "./App.css";
import ButtonsHeader from "./components/ButtonsHeader";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./api/weatherapi";
import fetchWeatherForecast from "./api/daily";

function App() {
  const [query, setQuery] = useState({ q: "Seoul" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [weather2, setWeather2] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then(async (data) => {
        setWeather(data);
        const data2 = await fetchWeatherForecast(data.lat, data.lon);
        setWeather2(data2);
      });
    };

    fetchWeather();
  }, [query, units]);

  const { daily, hourly } = { ...weather2 };

  return (
    <div className='container box-border rounded-2xl m-auto max-w-screen-sm my-4 py-4 px-16 bg-gradient-to-b from-teal-600 to-lime-600 h-fit shadow-xl shadow-gray-500'>
      <ButtonsHeader setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <WeatherInfo weather={weather} />
          <Forecast title='Hourly Forecast' items={hourly} />
          <Forecast title='Daily Forecast' items={daily} />
        </div>
      )}
    </div>
  );
}

export default App;
