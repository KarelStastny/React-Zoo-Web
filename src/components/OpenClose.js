import React from 'react'
import "./OpenClose.scss"
import OpenCloseTime from "../data/DataOpenCloseTime"

const OpenClose = () => {
  return <div className="open-close row">
        <h1>Otevírací doba</h1>
        <p>Zde najdete celoroční přehled otevírací doby.</p>
        <p>Otevřeno Každý den v roce</p>
        <p>(všední dny, víkendy  i svátky)</p>
        
        <div className="container-time">
                <div className="heading-time">
                    <p>Měsíc</p>
                    <p>Doba Pokladny</p>
                    <p>Bistro</p>
                    <p>Uzavření pavilonů</p>
                    <p>Uzavření areálu</p>
                    <p>Cenník</p>
                </div>

                {
                    OpenCloseTime.map( (one) => {
                        const {month, CashRegister, foot, closePavilon, closeZoo, priceList}  = one
                        return <div className='box-time' >
                            <p ><span>Měsíc</span> <br /> {month}</p>
                            <p ><span>Doba Pokladny</span> <br /> {CashRegister}</p>
                            <p ><span>Bistro</span> <br /> {foot}</p>
                            <p ><span>Uzavření Pavilonů</span> <br /> {closePavilon}</p>
                            <p ><span>Uzavření areálu</span> <br /> {closeZoo}</p>
                            <p ><span>Cenník</span> <br /> {priceList}</p>
                        </div>
                    })
                }
        </div>
  </div>
}

export default OpenClose
