import React, { useState,useEffect } from 'react'
import animals from "../data/animals"
import "./Zvirata.scss"
import { Link } from 'react-router-dom'
import emptyStar from "../images/icon/emptyStar.png"
import fullStar from "../images/icon/fullStar.png"

const Zvirata = () => {
  const [filter, setFilter] = useState(null)
  const [searchBox, setSearchBox] = useState("")
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [activeButton, setActiveButton] = useState(false);
  const [favorite, setFavorite] = useState([])


// Zjistí jestli je v oblíbených
  const isFavorite = (id) => {
    return favorite.includes(id)
  }

// Odstarní z obíbených
const removeFromFavorites = (id) => {
  const updatedFavorite = favorite.filter((favId) => favId !== id);
  setFavorite(updatedFavorite);
  localStorage.setItem('favorite', JSON.stringify(updatedFavorite));
};




  // uložení do oblíbených a do local storage
  const addToFavorites = (id) => {
    // Přidání pokud to id tam už není
    if (!favorite.includes(id)) {
      setFavorite([...favorite, id]);

      // Uložit aktualizované pole favorite do Local Storage
      localStorage.setItem('favorite', JSON.stringify([...favorite, id]));
    }
  };


  useEffect(()=> {
    // Zjištění zda v local storage je favorite
    const existFavorite = localStorage.getItem("favorite")

    if(existFavorite){
      setFavorite(JSON.parse(existFavorite))
    }else{
      setFavorite([])
    }
  },[])


  // Funkce pro aktivní button
  const activeBtn = (kind) => {
    setActiveButton(kind)
  }

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
    activeBtn(kind)
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
      <h1>Zvířata v naší Světové Zoo</h1>
      <form>
        <input value={searchBox} onChange={inputSearch} type="text" />
      </form>
      

      {/* Tlačítka pro filtrování */}
      <div className="button-container-animal">
      <button className={activeButton === null ? "active-button-animal" : ""} onClick={() => {filterAll(null); activeBtn(null)}}>Vše</button>
        <button className={activeButton === "Savec" ? "active-button-animal" : ""} onClick={() => {filterAll("Savec"); activeBtn("Savec")}}>Savci</button>
        <button className={activeButton === "Pták" ? "active-button-animal" : ""} onClick={() => {filterAll("Pták"); activeBtn("Pták")}}>Ptáci</button>
        <button className={activeButton === "Plaz" ? "active-button-animal" : ""} onClick={() => {filterAll("Plaz"); activeBtn("Plaz")}}>Plazi</button>
        <button className={activeButton === "Obojživelník" ? "active-button-animal" : ""} onClick={() => {filterAll("Obojživelník"); activeBtn("Obojživelník")}}>Obojživelníci</button>

      </div>
{/* Výpis do stránky */}
      <div className="zoo-animal-container">
        {filteredAnimals.map((one) => (
          <div
            onClick={() => ScrollTop()}
            to={`/zvirata/${one.id}`}
            key={one.id}
            className="animal-box"
            style={{ background: `url(${one.url})` }}
          >
            <div className="box">
             <div className="up-box">
                <h2>{one.name}</h2>
                {/* po klikntuí zjisti zda je oblíbená, pokud je odstranit pokud ne přidat */}
                <div onClick={() => { isFavorite(one.id) ? removeFromFavorites(one.id) : addToFavorites(one.id); }}
                className="favourite">
                  {/* Pokud toto id je oblíbené dát podle toho hvězdy */}
                  <img src={isFavorite(one.id) ? fullStar : emptyStar} alt="" />
                  </div>
              </div> 
                    
    
                  
                  
    

              <Link to={`/zvirata/${one.id}`} className="box-down">
              
              </Link>
              
              <Link to={`/eshop`}>Podpořit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zvirata;