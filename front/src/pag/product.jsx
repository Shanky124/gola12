import React, { useContext } from 'react'
import { Shopc } from "../cont/shopc.jsx"
import { useParams } from 'react-router-dom'
import BredCrums from "../comp/Bredcrums/BredCrums"
import Productdisplay from '../comp/productdisplay/productdisplay.jsx'
import all_product from '../assets/product.js'
import Dscription from '../comp/dscription/dscription.jsx'
 import Rproduct from '../comp/rproduct/rproduct.jsx';
 
const Product = () => {
//console.log ("Product data:",product) ; 

const { all_product } = useContext(Shopc);
  const { productId } = useParams();

  console.log("Product ID from URL :",productId, typeof productId);
console.log ("All Products:",all_product);



if (!all_product || all_product.length===0) {
  return <div>loading</div>;
}

  const product = all_product.find((e) => e.id ===Number( productId));
  console.log("Matched Product:",product);
  
if (!product)
  { return <div>not found</div>;}

 
  return (
    <div>
      <BredCrums product={product} />
      <Productdisplay product={product} />
      <Dscription/>
      <Rproduct/>
    </div>
  )
}   

export default Product;
