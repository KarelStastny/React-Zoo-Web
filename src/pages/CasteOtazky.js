import React from "react";
import Faq from "../components/Faq";
import HeddingBodyLayout from "../components/HeddingBodyLayout";
import "./CasteOtazky.scss";

const CasteOtazky = () => {
  return (
    <div className="caste-dotazy-page">
      <HeddingBodyLayout />
      <h1>Nejčastější dotazy</h1>
      <Faq />
    </div>
  );
};

export default CasteOtazky;
