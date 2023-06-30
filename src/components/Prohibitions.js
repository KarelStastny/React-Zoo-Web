import React from 'react'
import "./Prohibitons.scss"
import prohib from "../data/DataProhibitions"
import DataImages from '../data/DataImages'
import { useState, useEffect } from 'react'

const Prohibitions = () => {


    const [index, setIndex] = useState(0)

// když je idnex záporné číslo
// console.log(index);
//     if(index < 0 ){
//         setIndex(3)
//     }

// když je index větší než max
console.log(index);
// console.log(prohib.length);





  return <div className="prohibitions row">
            <img onClick={() => setIndex( index -1)} src={DataImages[7]}  />
            <div className="prohib-container">

 

            <div className='prohib-box'>
                {/* <img src={prohib[index].name} alt="" /> */}
                <div><p>{prohib[index].name}</p></div>

            </div>

            </div>
            <img onClick={() => setIndex(index>3 ? setIndex( 3) : setIndex( index +1 ))} src={DataImages[8]}  />

  </div>
}

export default Prohibitions
