import React from 'react'
import HeddingBodyLayout from '../components/HeddingBodyLayout'
import "./Aktuality.scss"

const Aktuality = () => {
  // VYtažení dat z Local Storage
  const actualityData = JSON.parse(localStorage.getItem("actuality")) || [];


  return <div className='actuality-user'>
      <HeddingBodyLayout/>
      <div className="actuality-user-container row">
        <h1>Aktuality </h1>
        {
          actualityData.map( (one, index) => {
          return  <div key={index} className="actuality-box">
              <p>{one.date}</p>
              <p>{one.heading}</p>
              <p>{one.text}</p>
            </div>
          })
        }
      </div>
    </div>
  
}

export default Aktuality


