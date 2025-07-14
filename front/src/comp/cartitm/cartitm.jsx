import React, { useContext } from 'react'
import "./cartitm.css"
import { Shopc } from '../../cont/shopc';
import Cross from "../../assets/cross.jpeg"
const cartitm = () => {
const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(Shopc);
  return (
    <div className='cart'>
    <hr/>
        <div className="cartformatmain">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
          if (cartItems[e.id]>0)
{
  return (
  <div key={e.id}>
    <div className='cartformatmain'>
     <img src={e.image} alt="" height="100px" />
      <p>{e.name}</p>
<p> {e.new_price}</p>
<button className='carttity'>{cartItems[e.id]}</button>
<p>{e.new_price*cartItems[e.id]}</p>
<img className='sp' src={Cross} alt="" height="20px" onClick={ ()=>removeFromCart(e.id)}/>
</div>
<hr/>
</div> );
}
return null;
   })}
<div className="don">
  <div className="carttotal">
    <h1>Cart Total</h1>
    <div>
      <div className="totalitm">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>
      <hr/>
       <div className="totalitm">
        <p>Shipping Charges</p>
        <p>Free</p>
      </div>
      <hr/>
       <div className="totalitm">
        <p>Total</p>
        <p>${getTotalCartAmount()}</p>
      </div>
    </div>
    <button>PROCEED TO CHECKOUT</button>
  </div>
  <div className="promocod">
    <p>If you have a promo code,Enter it here</p>
    <div className="promobox">
      <input type='text' placeholder='promo code'/>
      <button>Submit</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default cartitm;