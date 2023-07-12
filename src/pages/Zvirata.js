import React from 'react'
import animals from "../data/animals"
import "./Zvirata.scss"
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'


const Zvirata = () => {
  const [filter, setFilter] = useState(null)
  const [searchBox, setSearchBox] = useState("")
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  // Funkce pro scrollUp po kliknutí
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    })
  }

  // Funkce která příjmá z databáze druh a a nastavuje ho do filtru
  const filterAll = (kind) => {
    setFilter(kind)
    // Pokud je filtrováno druhem nastaví všechny filtry z inputu na nic
    setSearchBox("")
  }

  const inputSearch = (e) => {
    e.preventDefault()
    // Při spuštění se zruší ostatní filtry
    setFilter(null)

    // uložení vyhledávacího políčka
    setSearchBox(e.target.value)
  }

  // Do filter se uloží hodnota z tlačítka  a spustí se filter který vyfiltruje z databáze jen příslušné druhy a uloží je do profiltrovaného pole které se bude vypisovat do stránky
  useEffect(() => {
    const filtered = animals.filter((one) => {
      // Filter podle druhu, pokud se druh a zároveń druh v databází nerovanjí vrází se false a druh se nevypíše
      if (filter && one.kind !== filter) {
        return false;
      }

      // Vyhledávání podle názvu
      return one.name.toLowerCase().includes(searchBox.toLowerCase());
    });
    setFilteredAnimals(filtered);
  }, [filter, searchBox]);


// Ještě jednou aplikuje styly na pozadí které mi jinak nereagovali na konci
  useEffect(() => {
    const animalBoxes = document.getElementsByClassName('animal-box');

    for (let i = 0; i < animalBoxes.length; i++) {
      animalBoxes[i].style.backgroundPosition = 'center';
      animalBoxes[i].style.backgroundSize = 'cover';
    }
  }, [filteredAnimals]);


  return (
    <div className="zoo-animal">
      <form>
        <input value={searchBox} onChange={inputSearch} type="text" />
      </form>
      

      {/* Tlačítka pro filtrování */}
      <button onClick={() => filterAll(null)}>Vše</button>
      <button onClick={() => filterAll('Savec')}>Savci</button>
      <button onClick={() => filterAll('Pták')}>Ptáci</button>
      <button onClick={() => filterAll('Plaz')}>Plazi</button>
      <button onClick={() => filterAll('Obojživelník')}>Obojživelníci</button>

{/* Výpis do stránky */}
      <div className="zoo-animal-container">
        {filteredAnimals.map((one, index) => (
          <Link
            onClick={() => ScrollTop()}
            to={`/zvirata/${index}`}
            key={index}
            className="animal-box"
            style={{ background: `url(${one.url})` }}
          >
            <div className="box">
              <div className="up-box">
                <h2>{one.name}</h2>
                <div className="favourite"></div>
              </div>
              <Link to={`/podpora/${index}`}>Podpořit</Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Zvirata;