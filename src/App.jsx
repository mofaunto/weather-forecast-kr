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

  const { daily } = { ...weather2 };

  return (
    <div
      className='mx-auto max-w-screen-sm mt-4 py-4 px-16 bg-gradient-to-br from-green-700 to-yellow-700 h-fit shadow-xl shadow-gray-500'
      id='form'
    >
      <ButtonsHeader setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <WeatherInfo weather={weather} />
          <Forecast title='Daily Forecast' items={daily} />
        </div>
      )}
    </div>
  );
}

export default App;
