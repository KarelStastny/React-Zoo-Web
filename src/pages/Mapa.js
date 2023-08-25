import React from "react";
import "./Mapa.scss";
import Map from "../images/zoo-map.png";
import HeddingBodyLayout from "../components/HeddingBodyLayout";

const Mapa = () => {
  return (
    <div className="zoo-map-page">
      <HeddingBodyLayout />

      <div className="zoo-map row">
        <h1>Mapa Naší Zoo</h1>
        <div>
          {" "}
          <img src={Map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mapa;
