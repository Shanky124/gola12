import React from 'react'
import "./nwcol.css"
import Item from '../comp/item/item';
import Ncoll from '../assets/ncoll';
const Nwcol = () => {
  return (
    <div className='nwcoll'>
 <h1>New Collections</h1>
<hr></hr>
<div className='coll'>
    {Ncoll.map((item,i)=>{
        return <Item key={i} id= {item.id} name={item.name}  image ={item.image} 
        new_price ={item.new_price } old_price={item.old_price}  />
    })}
</div>
    </div>
  )
}

export default Nwcol;