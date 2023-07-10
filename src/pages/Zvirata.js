import React from 'react'
import animals from "../data/animals"
import "./Zvirata.scss"
import { Link } from 'react-router-dom'


const Zvirata = () => {
  // Funkce pro scrollUp po kliknutí
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    })
  }


  return <div className="zoo-animal ">
    <div className="zoo-animal-container ">
        {
          animals.map( (one, index) => {
        
          return  <Link onClick={() => ScrollTop()} to={`/zvirata/${index}`} key={index} className="animal-box" style={{background: `url( ${one.url})`, backgroundPosition: "center", backgroundSize: "cover"  }}>
     
            <div className="box">
              <div className="up-box">
                <h2>{one.name}</h2>
                <div className="favourite"></div>
              </div>

       
                <Link to={`/podpora/${index}`}>Podpořit</Link>
              
              </div>
    
      
          
            </Link>
          })
        }


    </div>
  </div>
}

export default Zvirata
