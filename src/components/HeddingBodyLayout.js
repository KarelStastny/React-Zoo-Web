import "./HeddingBodyLayout.scss"
import React from 'react'
import DataHedding from "../data/DataHedding"
import { Link } from "react-router-dom"

import Weather from "./Weather"

const HeddingBodyLayout = () => {


// Zjistí mi url adresu aktuální webové stránky
const thisUrl = window.location.href

// Do proměné uloží z dat pouze ten výsledek který obsahuje aktuální webovou stránku
const findHedding = DataHedding.find( (one) => {
  if(thisUrl.includes(one.link)){
    return one.link
  }
})

const {hedding, text} = findHedding

  return <div className="bodyLayoutEasy">
    <div className="container">
      <div className="up-container">
        <h1>{hedding}</h1>
        <p>{text}</p>
      </div>
      <div className="down-container">
        <div className="box-layout-easy">
          <div className="weather-box">
            <Weather/>
          </div>
          <div className="link-box">
            <Link to="/" className="link-back">Zpět</Link>
            <Link to="/" className="link-home">Domů</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default HeddingBodyLayout
