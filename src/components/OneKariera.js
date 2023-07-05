import React from 'react'
import "./OneKariera.scss"
import { useParams, Link } from 'react-router-dom'
import DataVacancies from "../data/DataVacancies"


const OneKariera = () => {
  // zjistí co je za lomítkem
  const { karieraId } = useParams()

  const pozition = DataVacancies.find( (one, index) => {
    return  index === parseInt(karieraId)
  })

  return <div className="vacancies-container row">
    <div className="box-vacan">
      <h2>Pozice:</h2>
      <p>{pozition.position}</p>
      <h3>Plat:</h3>
      <p>{pozition.pay} Kč/měsíčně</p>
      <h3>Typ úvazku:</h3>
      <p>{pozition.typeOfEmployment}</p>
      <h3>Požadované znalosti:</h3>
      <p>{pozition.requiredKnowledge}</p>
      <h3>Popis práce:</h3>
      <p>{pozition.description}</p>
      <Link to="/kariera">Zpět na přehled nabídek</Link>
    </div>
  </div>
}

export default OneKariera
