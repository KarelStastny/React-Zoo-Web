import React from 'react'
import "./Cennik.scss"
import SummerCennik from '../data/DataCennikSummer'
import WinterCennik from '../data/DataCennikWinter'
import HeddingBodyLayout from '../components/HeddingBodyLayout'



const Cennik = () => {


  return <div className="cenik-page">
    <HeddingBodyLayout/>
  <div className='cennik-zoo row'>
    
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
         <a href="https://ulozto.cz/tamhle/8OAWpG90Nwrz/name/Nahrano-30-6-2023-v-12-24-49?view=gallery&sort=exif_date&lightbox=F4PvZB99fduu#!ZJZkZmR2AGHkMwV2AJAvL2H3BTL1Aaclq044qJbmozg2n2HmLD==" target="_blank" rel="noopener noreferrer"> Letní cenník ke stažení</a>

      </div>


      


  {/* Winter season */}
      <div className="winter-season">



        <h2>Zimní sezona  od 1. 11. do 31. 3.</h2>
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
          WinterCennik.map((one)=>{
            return <div key={one.id} className="box-cennik">
              <p ><span>druh vstupného</span> <br /> {one.type}</p>
              <p ><span>bližší specifikace</span> <br /> {one.info}</p>
              <p ><span>letní sezóna</span> <br /> {one.seson} Kč</p>
              <p ><span>elektronické vstupenky</span> <br /> {one.keycard} Kč</p>
            </div>
          })
         
        }
         <span>* držitelé zlaté Janského plakety mají vstup do zoo zdarma</span>
         <a href="https://ulozto.cz/file/sSB1NJfTmpNT/winter-seson-jpg#!ZJR5AQR1LmExZQIxZQN3ZTZlLzZlIR5joJV4YwVkI0uWLmt2" target="_blank" rel="noopener noreferrer"> Zimní cenník ke stažení</a>

      </div>
  </div>
  </div> 
}

export default Cennik
