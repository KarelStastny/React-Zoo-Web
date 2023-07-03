import React from 'react'
import DataImages from '../data/DataImages'
import "./SocialMedia.scss"

const SocialMedia = () => {
  return <div className="social-media">
    <a href="https://cs-cz.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={DataImages[1]} alt="" /></a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={DataImages[2]} alt="" /></a>
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={DataImages[3]} alt="" /></a>
    <a href="https://cz.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={DataImages[4]} alt="" /></a>
 
    {
  name: "",
  english_name:"",
  max_age: "",
  description_short:"",
  description_long:"",
  description_max_long:"",
  food: "",
  occurrence: "",
  species: "",
  image_url: "",
  number_of_young: "",
  mass: "", 
  gestation_period: "",
  max_speed: "",
  height: "",
  length: "",
  coat_type: "",
  reproduction: "",
  


}
</div>
}

export default SocialMedia

