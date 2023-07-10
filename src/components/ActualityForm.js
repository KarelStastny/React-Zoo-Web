import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import "./ActualityForm.scss"
import Aktuality from '../pages/Aktuality'

const ActualityForm = () => {
    const [date, setDate] = useState("")
    const [heading, setHeading] = useState("")
    const [text, setText] = useState("")
    const refSubmitButton = useRef("")
  


    // Uložení hodnot z políček

    const saveDate = (e) => {
        setDate(e.target.value)
    }
    const saveHeading = (e) => {
        setHeading(e.target.value)
    }
    const saveText = (e) => {
        setText(e.target.value)
    }



    // co se stane po odeslání formuláře
    const submitForm = (e) => {
        e.preventDefault()

        // Ověření že jsou pole vyplněná
        if (!date || !heading || !text) {
            alert("Všechna pole musí být vyplněna");
            return;
        }

        // Získání existujícího pole z Local storage nebo jeho vytvoření
        const existingArray = JSON.parse(localStorage.getItem("actuality")) || []

        // Vezme všechna existující a přidá k nim nové záznamy
        const updateArray = [...existingArray, {date, heading, text}]

        // Uložení aktualizovaného pole do local storage
            localStorage.setItem("actuality", JSON.stringify(updateArray))

        // promazání políček
        setDate("")
        setHeading("")
        setText("")
  

        refSubmitButton.current.innerText = "Úspěšně odesláno"
    }

  return <div className="admin-page row">
  <div className="add-actuality">
      <div className="add-actuality-container">
          <h2>Prostor pro přidání aktuálního dění v zoo/ propisuje se do stránky aktuality <Link to="/aktuality">zde</Link></h2>
          <form onSubmit={submitForm}>
              <div>
                  <input type="text" onChange={saveDate} value={date} placeholder='Datum' />
                  <input type="text" onChange={saveHeading} value={heading} placeholder='Nadpis' />
              </div>
              <input onChange={saveText} value={text} placeholder='Celý text aktualizace' ></input>
            
              <button ref={refSubmitButton} type='submit'>Odeslat</button>
          </form>
      </div>
  </div>
</div>
}

export default ActualityForm
