import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import ButtonsHeader from "./components/ButtonsHeader";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-4 px-32 bg-gradient-to-br from-green-700 to-yellow-700 h-fit shadow-xl shadow-gray-500'>
      <ButtonsHeader />
      <Inputs />
      <TimeAndLocation />
    </div>
  );
}

export default App;
