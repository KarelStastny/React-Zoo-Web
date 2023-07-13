import React, { useState, useEffect } from 'react';
import animals from '../data/animals';
import "./Favourite.scss";
import { Link } from "react-router-dom";

const Favourite = () => {
  const [favorite, setFavorite] = useState([]);
  const [favoriteUpdated, setFavoriteUpdated] = useState(false);

//   Aktualizuje obsah v LocalSotrage 
  useEffect(() => {
    const updatedFavorite = JSON.parse(localStorage.getItem('favorite')) || [];
    setFavorite(updatedFavorite);
    setFavoriteUpdated(false);
  }, [favoriteUpdated]);

//   odstraní z oblíbených a zapne vyrendrování stránky
  const removeFromFavorite = (id) => {
    const updatedFavorite = favorite.filter((oneF) => oneF !== id);
    localStorage.setItem('favorite', JSON.stringify(updatedFavorite));
    setFavoriteUpdated(true);
  };

  return (
    <div className="favourite-page">
      <h1>Vaše Oblíbená zvířata</h1>
      <div className="favorite-container row2">
        {animals.map((oneA) => {
          return favorite.map((oneF) => {
            if (oneA.id === oneF) {
              return (
                <div key={oneA.id}>
                  <Link to={`/zvirata/${oneA.id}`}>
                    <img src={oneA.url} alt="" />
                  </Link>
                  <p>{oneA.name}</p>
                  <button onClick={() => removeFromFavorite(oneF)}>Odebrat</button>
                </div>
              );
            }
            return null;
          });
        })}
      </div>
    </div>
  );
};

export default Favourite;
