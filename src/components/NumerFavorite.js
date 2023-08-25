import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NumberFavorite.scss";
import star from "../images/icon/fullStar.png";

const NumberFavorite = () => {
  const [allFavorite, setAllFavorite] = useState([]);

  useEffect(() => {
    const updateFavorite = () => {
      const numberFavorite = JSON.parse(localStorage.getItem("favorite")) || [];
      setAllFavorite(numberFavorite.length);
    };

    updateFavorite();

    // Vlastní událost pro změnu v localStorage
    const storageChange = new Event("storageChange");

    // Naslouchání vlastní události
    window.addEventListener("storageChange", updateFavorite);

    // Kontrola změn v localStorage každých 500 ms
    const checkStorage = setInterval(() => {
      window.dispatchEvent(storageChange);
    }, 500);
  }, []);

  if (allFavorite === 0) {
    return null;
  }

  return (
    <Link to="./oblibene" className="star-number">
      <img src={star} alt="" />
      <p>{allFavorite}</p>
    </Link>
  );
};

export default NumberFavorite;
