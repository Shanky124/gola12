import React from 'react'
import "./popular.css"
import Item from "../item/item"
 import data_product from '../../assets/data' 

const Popular = () => {
  return (
    <div className='pop'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='pop-it'>
            {data_product.map((item,i)=>{ return <Item key={i} id={item.id} 
            name ={item.name} image={item.image} new_price ={item.new_price }
             old_price={item.old_price}   /> })}
        </div>
    </div>
  )
}

export default Popular;











