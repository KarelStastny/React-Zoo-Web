import React from 'react'
import "./Cennik.scss"
import SummerCennik from '../data/DataCennikSummer'
import WinterCennik from '../data/DataCennikWinter'



const Cennik = () => {


  return <div className='cennik-zoo row'>
      <h1>Jednotlivé vstupenky</h1>

      {/* Summer season */}
      <div className="summer-season">
        <h2>Letní sezona  od 1. 4. do 31. 10</h2>
      </div>
      
      <div className="container-cennik">
        {/* One Line */}
        <div className="season-heading">
          <p>druh vstupného</p>
          <p>bližší specifikace</p>
          <p>letní sezóna</p>
          <p>elektronické vstupenky</p>
        </div>
        {
          SummerCennik.map((one)=>{
            return <div key={one.id} className="box-cennik">
              <p ><span>druh vstupného</span> <br /> {one.type}</p>
              <p ><span>bližší specifikace</span> <br /> {one.info}</p>
              <p ><span>letní sezóna</span> <br /> {one.seson} Kč</p>
              <p ><span>elektronické vstupenky</span> <br /> {one.keycard} Kč</p>
            </div>
          })
         
        }
         <span>* držitelé zlaté Janského plakety mají vstup do zoo zdarma</span>

      </div>




  {/* Winter season */}
      <div className="winter-season">


        <h2>Letní sezona  od 1. 4. do 31. 10</h2>
      </div>
      
      <div className="container-cennik">
        {/* One Line */}
        <div className="season-heading wintercolor">
          <p>druh vstupného</p>
          <p>bližší specifikace</p>
          <p>letní sezóna</p>
          <p>elektronické vstupenky</p>
        </div>
        {
          SummerCennik.map((one)=>{
            return <div key={one.id} className="box-cennik">
              <p ><span>druh vstupného</span> <br /> {one.type}</p>
              <p ><span>bližší specifikace</span> <br /> {one.info}</p>
              <p ><span>letní sezóna</span> <br /> {one.seson} Kč</p>
              <p ><span>elektronické vstupenky</span> <br /> {one.keycard} Kč</p>
            </div>
          })
         
        }
         <span>* držitelé zlaté Janského plakety mají vstup do zoo zdarma</span>

      </div>
  </div>
}

export default Cennik
