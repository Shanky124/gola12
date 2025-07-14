import React from 'react'
import Hero from '../comp/hero/hero';
import Popular from "../comp/popular/popular"
import Offer from "../comp/offer/offer"
import Nwcol  from '../nwcol/nwcol';
import Khabar from '../comp/khabar/khabar';
const Shop = () => {
  return (
    <div > 
      <Hero/>
    <Popular/>
    <Offer/>
    <Nwcol/>
    <Khabar/>
  
    </div>
  )
}

export default Shop;