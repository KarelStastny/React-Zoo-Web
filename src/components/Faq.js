import React from 'react'
import "./Faq.scss"
import DataFaq from "../data/DataFaq"
import { useState } from 'react'

const Faq = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if( selected === index){
      // nejdřív se zavřou všechny odpovědi
      setSelected(null)
    }else{
      // ta se shodným idexem se otevře
      setSelected(index)
    }
  }




  return <div className="faq ">
    <div className="accordion row2">
       {
        DataFaq.map ( (one, index) => {
          return <div className="itembox">
                    <div className="title" onClick={() => toggle(index)}>
                      <h2>{one.question}</h2>
                      {/* Pokud je index shodný a otevře se nabídka změní se + na - */}
                      <span>{selected === index ? "-" : "+"}</span>
                    </div>
                    {/* Při shodném idexu se změní classy */}
                  <div className={selected === index ? "content show" : "content"}>{one.answer}</div>
            </div>
        })
       }
    </div>
  </div>
}

export default Faq
