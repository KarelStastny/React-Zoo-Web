import React, { useEffect } from "react";
import { useState } from "react";

const urlWeather =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pilsen&appid=024489430bce7ca9795a31a111671049";

// Funuje jméno ale má pak problémnačíst teplotu proč?

const Weather = () => {
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    fetch(urlWeather)
      .then((res) => res.json())
      .then((result) => {
        setTemperature(result.main.temp);
      });
  }, [temperature]);

  return (
    <div className="weather-component">
      <p style={{fontSize:"14px", paddingBottom:"20px", paddingLeft:"5px"}
      }>
        V naší Světové Zoo máme krásných{" "}
        <span style={{ fontWeight: "900" }}>{temperature} °C</span>
      </p>
    </div>
  );
};

export default Weather;
