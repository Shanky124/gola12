import React from 'react'
import "./rproduct.css"
import data_product from '../../assets/data';
import Item from '../item/item';
const Rproduct = () => {
  return (
    <div className='rp'>
        <h1>Related Products</h1>
        <hr></hr>
        <div className="rpitm">
            {data_product.map((item,i)=>{
        return <Item key={i} id= {item.id}  image ={item.image}
         new_price ={item.new_price } old_price={item.old_price}  />
            } )}
        </div>
    </div>
  )
}

export default Rproduct;