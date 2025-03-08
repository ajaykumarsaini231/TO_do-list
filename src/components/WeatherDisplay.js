import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherDisplay = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=85144a2d61502b9ab1e56bbfd8b6c9ca` 
               );
        setWeatherData(response.data);
      } catch (err) {
        setError("Failed to fetch weather data");
      }
    };

    fetchWeather();
  }, [location]);

  if (error) return <p>{error}</p>;
  if (!weatherData) return <p>Loading weather...</p>;

  return (
    <div className="weather-display">
      <h3>Weather in {location}</h3>
      <p>{weatherData.weather[0].description}</p>
      <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
    </div>
  );
};

export default WeatherDisplay;
