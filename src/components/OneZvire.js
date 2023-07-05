import React from 'react'
import animals from '../data/animals'
import { useParams, Link } from 'react-router-dom'
import "./OneZvire.scss"
import SocialMedia from './SocialMedia'

const OneZvire = () => {
  const { zvirataId } = useParams()

  const animal = animals.find( (one, index) => {
    return  index === parseInt(zvirataId)
  })



  return <div className="specific-animal">
   <div className="one-animal-container row3">
    <h1>{animal.name}</h1>
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

      <h2>Další ${} v naší zoo:</h2>

   </div>

    <h1>Zde nás můžete sledovat</h1>
    <div className="media-animal"><SocialMedia/></div>
   
  </div>
}

export default OneZvire
