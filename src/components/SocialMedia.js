import React from 'react'
import DataImages from '../data/DataImages'
import "./SocialMedia.scss"

const SocialMedia = () => {
  return <div className="social-media">
        <div><img src={DataImages[1]} alt="" /></div>
        <div><img src={DataImages[2]} alt="" /></div>
        <div><img src={DataImages[3]} alt="" /></div>
        <div><img src={DataImages[4]} alt="" /></div>
  
</div>
}

export default SocialMedia
