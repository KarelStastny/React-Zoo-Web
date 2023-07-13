import React from 'react'
import "./Databaze.scss"
import animals from '../data/animals'

const Databaze = () => {

// Funkce pro zjištění druhů
    const OurSavci = animals.filter((animals) => animals.kind === "Savec")
    const OurPlazi = animals.filter((animals) => animals.kind === "Plaz")
    const OurPtaci = animals.filter((animals) => animals.kind === "Pták")
    const OurObojz = animals.filter((animals) => animals.kind === "Obojživelník" )

  return <div className="databaze-page row2">
    <h1>Statistika naší Zoo</h1>

    <div className="databaze-container">
        <div>
            <p>Počet drhů zvířat v naší Zoo</p>
            <p className='animals-number'>{animals.length +1}</p>
        </div>

        <div>
            <p>Počet druhů Savců v naší Zoo</p>
            <p className='animals-number'>{OurSavci.length +1}</p>
        </div>

        <div>
            <p>Počet druhů Plazů v naší Zoo</p>
            <p className='animals-number'>{OurPlazi.length +1}</p>
        </div>

        <div>
            <p>Počet druhů Ptáků v naší Zoo</p>
            <p className='animals-number'>{OurPtaci.length +1}</p>
        </div>

        <div>
            <p>Počet druhů Obojživelníků v naší Zoo</p>
            <p className='animals-number'>{OurObojz.length +1}</p>
        </div>
    </div>
  </div>
}

export default Databaze
