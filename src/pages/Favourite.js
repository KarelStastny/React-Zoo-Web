import React, {useState} from 'react'
import animals from '../data/animals'


const Favourite = () => {
    const favorite = JSON.parse(localStorage.getItem('favorite'));
    console.log(favorite);


  return <div className="favourite-page">


  </div>
}

export default Favourite
