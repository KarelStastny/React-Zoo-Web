import React from 'react'
import animals from "../data/animals"
import "./Zvirata.scss"
import { Link } from 'react-router-dom'


const Zvirata = () => {
  return <div className="zoo-animal ">
    <div className="zoo-animal-container ">
        {
          animals.map( (one, index) => {
            console.log(one.url);

            const {name, url} = animals
          return  <Link to="/xxxx" key={index} className="animal-box" style={{background: `url( ${one.url})`, backgroundPosition: "center", backgroundSize: "cover"  }}>
     
            <div className="box">
              <div className="up-box">
                <h2>{one.name}</h2>
                <div className="favourite">*</div>
              </div>

              <div className="down-box">
                <Link to="/xxxx">Podpořit</Link>
                <Link to="/xxxx">O zvířeti</Link>
              </div>
            </div>
      
          
            </Link>
          })
        }


    </div>
  </div>
}

export default Zvirata
