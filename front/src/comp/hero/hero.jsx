import React from 'react'
import "./hero.css"
import Rightarr from "../../assets/Rightarr.png"
import p11 from "../../assets/p11.jpeg"


const Hero = () => {
  return (
    <div className='hero'>
    <div className='h-lft'>
<h2> Best Deals!   Best Prices!</h2>
    
    <p>New</p>
    <p>Collection</p>
    <p>For Everyone</p>
<div className='h-btn'>
<div>Latest Collections</div>
<img src={Rightarr} height="45px" ></img>
</div>

</div>

    <div className='h-rgt'>
 <img src={p11} alt="" height="500px" />

    </div>

    </div>

  )
}

export default Hero;