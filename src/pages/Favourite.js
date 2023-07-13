import React, {useState} from 'react'
import animals from '../data/animals'
import "./Favourite.scss"
import { Link } from "react-router-dom"


const Favourite = () => {
    const favorite = JSON.parse(localStorage.getItem('favorite'));




  return <div className="favourite-page">
        <h1>Vaše Oblíbená zvířata</h1>
    <div className="favorite-container row2">

    {
    animals.map((oneA) => {
      return  favorite.map((oneF) => {
            if(oneA.id === oneF){
               return <Link  to={`/zvirata/${oneA.id}`} key={oneA.id}>
               
                <img src={oneA.url} alt="" />
                <p>{oneA.name}</p>
               </Link>
            }
        })

        
    })
    }

    
</div>
  </div>
}

export default Favourite
