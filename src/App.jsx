import { useState } from 'react'

import './App.css'

/*Images*/
import searchIcon from "./assets/search.png";
import clearIcon from "./assets/clear.png";
import cloudIcon from "./assets/cloud.png";
import drizzleIcon from "./assets/drizzle.png";
import humidityIcon from "./assets/humidity.png";
import rainIcon from "./assets/rain.png";
import snowIcon from "./assets/snow.png";
import windIcon from "./assets/wind.png";

const WeatherDetails=({icon,temp,city,country,lat,log}) =>{
  return(
  <>
    <div className="image">
      <img src={icon} alt="Image"/>
    </div>
    <div className="temp">{temp}°C</div>
    <div className="location">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
      <div>
        <span className="lat">latitude</span>
        <span>{lat}</span>
      </div>
      <div>
        <span className="log">longitute</span>
        <span>{log}</span>
      </div>
    </div>
    <div className="data-container">
      <div className="element">
        <img src={humidityIcon} alt="humidity"
        className="icon"/>
        <div className="data">
          <div className="humidity-percent">85%</div>
          <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={windIcon} alt="wind"
        className="icon"/>
        <div className="data">
          <div className="wind-percent">5 km/h</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
    </div>

  </>
  );
};

function App() {
  const[icon,setIcon]= useState(snowIcon);
  const[temp,setTemp]= useState(0);
  const[city,setCity]= useState("Chennai");
  const[country,setCountry]= useState("IN");
  const[lat,setLat]= useState(0);
  const[log,setLog]= useState(0);
   return (
    <>
      <div className="container">
      <div className="input-container">
        <input type="text" 
        className="cityInput"
        placeholder="Search City"/>
        <div className="search-icon">
          <img src={searchIcon}
          alt="Search"/>

        </div>
        

      </div>
      <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log}/>

      </div>
    </>
  )
}

export default App
