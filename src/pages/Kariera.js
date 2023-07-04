import React from 'react'
import HeddingBodyLayout from '../components/HeddingBodyLayout'
import "./Kariera.scss"
import DataVacancies from "../data/DataVacancies"
import { Link } from 'react-router-dom'

const Kariera = () => {
  return (
    <div className='kariera-zoo'>
      <HeddingBodyLayout/>
      <h1>Kariéra v Zoo</h1>

      <div className="container-kariera row">
        {
          DataVacancies.map((one, index) => {
            return <div key={index} className="box-karier" style={{display:'flex', background:"#fffff", flexDirection:"column",  justifyContent: "space-between", height: "90px", alignItems:"center", padding:" 20px", maxWidth:"800px", width:"100%", margin:"10px auto" 
            }}>
              <div style={{display:"flex", justifyContent:"space-between", flexDirection:"row", width:"100%",}}>              
                <h2 style={{fontWeight:"900", fontSize:"20px"}}>{one.position}</h2>
                <h3>Plat {one.pay} Kč</h3>
              </div>
              <Link to={`/kariera/${index}`}>Více informací zde:</Link>

            </div>
          })
        }

      </div>
    </div>
  )
}

export default Kariera
