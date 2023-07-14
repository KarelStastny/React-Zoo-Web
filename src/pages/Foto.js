import React from 'react'
import DataFoto from '../data/DataFoto';
import { useState } from 'react';
import "./Foto.scss"
import DataImages from "../data/DataImages"
import HeddingBodyLayout from '../components/HeddingBodyLayout'



const Foto = () => {
    const [model, setModel] = useState(false)
    const [imgSrc, setImgSrc] = useState("")

    const openImage = (img) => {
        setImgSrc(img)
        setModel(true)
    }
    const closeImg = () => {
        setModel(false)
        // setImgSrc("")
    }





  return <div className='foto-galerie'>
    <HeddingBodyLayout/>
    <h1>Foto Galerie</h1>
    {/* Zobrazovací okno */}
    <div className={model ? "model open" : "model"}>
        <img 
        src={imgSrc} 
        alt=""
        loading='lazy' />
        <div><img src={DataImages[6]} alt="#" onClick={() => closeImg()} /></div>




    </div>
  
    <div className="gallery">
        {DataFoto.map( (one, index) => {
            return <div key={index} className="pics" onClick={() => openImage(one.img)}>
                <img src={one.img} alt="" style={{width: "100%"}} />
            </div>
        })
            
        }

    </div>
  </div>

};

export default Foto
