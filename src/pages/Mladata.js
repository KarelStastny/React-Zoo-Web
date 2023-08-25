import React from "react";
import ImageGallery from "react-image-gallery";
import "./Mladata.scss";
import HeddingBodyLayout from "../components/HeddingBodyLayout";

import img1 from "../images/galerie-mladata/bizon.jpg";
import img2 from "../images/galerie-mladata/gepardi.jpg";
import img3 from "../images/galerie-mladata/gorilla.jpg";
import img4 from "../images/galerie-mladata/hroch.jpg";
import img5 from "../images/galerie-mladata/krokodyl.jpg";
import img6 from "../images/galerie-mladata/lvi.jpg";
import img7 from "../images/galerie-mladata/medved-hnedy.jpg";
import img8 from "../images/galerie-mladata/medved-ledni.jpg";
import img9 from "../images/galerie-mladata/orangutan.jpg";
import img10 from "../images/galerie-mladata/papousek.jpg";
import img11 from "../images/galerie-mladata/plamenak.jpg";
import img12 from "../images/galerie-mladata/simpanz.jpg";
import img13 from "../images/galerie-mladata/slon.jpeg";
import img14 from "../images/galerie-mladata/tygri.jpg";
import img15 from "../images/galerie-mladata/vlci.jpg";
import img16 from "../images/galerie-mladata/zebra.jpg";
import img17 from "../images/galerie-mladata/zirafa.jpg";

const Mladata = () => {
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
    {
      original: img13,
      thumbnail: img13,
    },
    {
      original: img14,
      thumbnail: img14,
    },
    {
      original: img15,
      thumbnail: img15,
    },
    {
      original: img16,
      thumbnail: img16,
    },
    {
      original: img17,
      thumbnail: img17,
    },
  ];

  return (
    <div className="mladata-container">
      <HeddingBodyLayout />
      <div className="mladata-galery">
        <ImageGallery items={images} slideInterval={500} />
      </div>
    </div>
  );
};

export default Mladata;
