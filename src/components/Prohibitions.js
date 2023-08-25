import React, { useState } from "react";
import "./Prohibitons.scss";
import prohib from "../data/DataProhibitions";
import DataImages from "../data/DataImages";

const Prohibitions = () => {
  const [index, setIndex] = useState(0);

  // po kliknutí nastaví index,
  const handleClickPrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? prohib.length - 1 : prevIndex - 1
    );
  };

  const handleClickNext = () => {
    setIndex((prevIndex) =>
      prevIndex === prohib.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="prohibitions row">
      <img
        onClick={() => handleClickPrev()}
        src={DataImages[7]}
        alt="Previous"
      />
      <div className="prohib-container">
        <div className="prohib-box">
          <section>
            <img src={prohib[index].image} alt="" />
          </section>
          <div>
            <p>{prohib[index].name}</p>
          </div>
        </div>
      </div>
      <img onClick={() => handleClickNext()} src={DataImages[8]} alt="Next" />
    </div>
  );
};

export default Prohibitions;
