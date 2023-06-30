import "./Weather.scss"
import React, { useEffect } from 'react'
import { useState } from "react"

const urlWeather = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pilsen&appid=024489430bce7ca9795a31a111671049"


// Funuje jméno ale má pak problémnačíst teplotu proč?

const Weather = () => {
const [weather, setWeather] = useState("")

useEffect( () =>{
    fetch(urlWeather)
    .then( (res) => res.json())
    .then( (result) =>{
        setWeather(result)
    })
},[])



  return <div >
    <p>{`V naší zoo máme AKTUÁLNĚ krásných ${weather.name}°C`}</p>
  </div>
}

export default Weather
