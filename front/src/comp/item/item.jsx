import React from 'react'
import "./item.css"
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`} >
     <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /> </Link>
      <p>{props.name}</p>
<div className='item-p'>
  <div className='pricenew'>
    ${props.new_price}
  </div>
  <div className='priceold'>
    ${props.old_price}
  </div>
</div> 

      </div>
  )
}

export default Item;








