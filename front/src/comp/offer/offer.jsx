import React from 'react'
import "./offer.css"
import women7 from "../../assets/women7.webp"

const Offer = () => {
  return (
    
    <div className='offer-card'>
    <div className='offer-l'>
<h1>Exclusive </h1>
<h1>Offers For You</h1>
<p>ONLY ON BEST SELLER PRODUCT </p>
<button>Check Now</button>
    </div>
    <div className='offer-r'>
<img src={women7} alt="" />
    </div>
    </div>
  )
}
//women7
export default Offer;