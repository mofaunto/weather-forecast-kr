import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import ButtonsHeader from "./components/ButtonsHeader";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className='mx-auto max-w-screen-sm mt-4 py-4 px-16 bg-gradient-to-br from-green-700 to-yellow-700 h-fit shadow-xl shadow-gray-500'>
      <ButtonsHeader />
      <Inputs />
      <TimeAndLocation />
      <WeatherInfo />
      <Forecast title='Hourly Forecast' />
      <Forecast title='Daily Forecast' />
    </div>
  );
}

export default App;
