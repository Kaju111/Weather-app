import React, { useState } from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/sunny.png";
import cloud_icon from "../Assets/sun.png";
import drizzle_icon from "../Assets/cloudy.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humiditly_icon from "../Assets/humidity.png";

const WeatherApp = () => {
  let api_key = "d3dc14d60aae5e53f340d98974645716";

  const [wicon, setWicon] = useState(cloud_icon);
  

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");


    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " % ";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp) + "°c";
    location[0].innerHTML = data.name;
  
    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      setWicon(clear_icon)
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
      setWicon(cloud_icon)
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
      setWicon(drizzle_icon)
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
      setWicon(drizzle_icon)
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setWicon(rain_icon)
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
      setWicon(rain_icon)
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
      setWicon(snow_icon)
    }
    else{
      search_icon(clear_icon)
    }
  };

  return (
    <div className="Main-Con">
    <div className="container">
      <div className="top-bar">
        <input type="text" 
        className="cityInput" 
        placeholder="Search" 
        />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" className="search-img" />
        </div>
      </div>
      <div className="weather-img">
        <img src={cloud_icon} alt="" className="cloud-img" />
      </div>
      <div className="weather-temp">0°c</div>
      <div className="weather-location">Location</div>
      <div className="data-container">
        <div className="element">
          <img src={humiditly_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">0%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">0 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WeatherApp;
