
import animals from '../data/animals'
import { useParams, Link } from 'react-router-dom'
import "./OneZvire.scss"
import SocialMedia from '../components/SocialMedia'
import React, { useEffect, useState } from 'react';
import IconBack from "../images/icon/back.png"



const OneZvire = () => {
  const { zvirataId } = useParams();
  const [similarAnimals, setSimialrAnimals] = useState([]); 

  // Vyfiltrování správné zvířete do stránky
    const animal = animals.find((one, index) => {
    return index === parseInt(zvirataId);
  });
  
  // Podobné duruhy filter
  useEffect( () => {
    const similarKind = animals.filter((one) => one.kind === animal.kind); 
    setSimialrAnimals(similarKind); 
  },[])


  return <div className="specific-animal">
   <div className="one-animal-container row3">
  
    <div className="heading">
    <h1>{animal.name}</h1>
    <Link to="/zvirata"><img src={IconBack} alt="" /></Link>
    </div>

    <div className="about-animal-container">
      <img src={animal.url} alt="" />
      <div className="about-descritpion">
        <article>Základní info:</article>
        <p>{animal.description_short}</p>
        <ul>
          <p>Potrava: <li>{animal.food}</li></p>
          <p>Váha: <li>{animal.mass}</li></p>
          <p>Výška: <li>{animal.height}</li></p>
          <p>Délka: <li>{animal.length}</li></p>
          <p>Rychlost: <li>{animal.max_speed}</li></p>
          <p>Věk: <li>{animal.max_age}</li></p>



        </ul>
      </div>
    </div>
    <div className="media-animal"><SocialMedia/></div>
      <h2> Přečtěte si vice o {animal.name}</h2>
      <div className="long-description">
        <div>
          <h3>Místo výskytu</h3>
          <p>{animal.occurrence}</p>
        </div>
        <div>
          <h3>Počet Mláďat</h3>
          <p>{animal.number_of_young}</p>
        </div>
        <div>
          <h3>Březost</h3>
          <p>{animal.gestation_period}</p>
        </div>
        <div>
          <h3>Srst/Kůže</h3>
          <p>{animal.coat_type}</p>
        </div>
        <div>
          <h3>Rozmnožování</h3>
          <p>{animal.reproduction}</p>
        </div>
          <h3>Popis</h3>
          <p>{animal.description_long}</p>
   

      </div>
      
      <div className="similar-kind">
        <h2>Další {animal.kind} v naší zoo:</h2>
        <div className="similiar-container">
          {
            similarAnimals.map( (one, index) => {
              return <Link to={`/zvirata/${index}`} key={index} className="similar-box" style={{background: `url( ${one.url})`, backgroundPosition: "center", backgroundSize: "cover"  }}>
              <div className="box">
                  <h2>{one.name}</h2>
                </div>
              </Link>
              
            })
            
          }
            </div>
      </div>





   </div>
  </div>
}

export default OneZvire
