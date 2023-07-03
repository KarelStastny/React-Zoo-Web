import "./Background.scss"
import React, { useState, useEffect} from 'react'
import image1 from "../images/background/1.jpg"
import image2 from "../images/background/2.jpg"
import image3 from "../images/background/3.jpg"
import image4 from "../images/background/4.jpg"
import image5 from "../images/background/5.jpg"



const Background = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ];
  
    useEffect(() => {
        const interval = setInterval(() => {
            // časovačem se aktulizuje stav indexu a návrat zpět na začátek
          setCurrentImageIndex(prevIndex =>
            (prevIndex + 1) % images.length
          )
        }, 5000)

        return () => clearInterval(interval);
      }, [images.length])
    
      return (
        <div className="background-home">
          {images.map((image, index) => (
            // Kde je shodný index nastaví aktivní clásu 
            <div
              key={index}
              className={`background-image ${
                currentImageIndex === index ? 'active' : ''
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      );
    };
    
    

    

export default Background
