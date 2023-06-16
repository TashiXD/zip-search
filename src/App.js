import logo from "./logo.svg";
import "./App.css";
import Zip_search from "./components/zip_search";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [zipCodeChange, setZipCodeChange] = useState("");
  const [cityState, setCityState] = useState([]);

  const handleZipCodeChange = (event) => {
    setZipCodeChange(event.target.value);
  };

  const getCity = async () => {
    try {
      const list = await axios.get(
        `https://zip-api.eu/api/v1/info/US-${zipCodeChange}`
      );

      setCityState(list.data.place_name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <input onChange={handleZipCodeChange} />
      <button onClick={getCity}>Enter</button>

      <Zip_search cityState={cityState} />
    </div>
  );
}

export default App;
