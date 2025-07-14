import React, { useContext } from 'react'
import "../CSS/shopcat.css"
import {Shopc} from '../cont/shopc.jsx'
import Item from '../comp/item/item';
const Shopcat  = ({ category, banner }) => {
  const {all_product} = useContext (Shopc);
  const categoryMap= {mens: "men",
    womens: "women",
    kids: "kids" 
  };
  const currentCategory = category?.toLowerCase();
   console.log("URL Category:", category);
  console.log("Mapped Category:", currentCategory)
  return (
    <div className='shopcatt'>
    <img className='shop-ca' src={banner} alt="" /> 
    <div className="sort">
      <p>
        <span>Showing 1-4 </span> out of 10 products
      </p>
    </div>
    <div className='s-pro'>
      {all_product.map((item)=>{   const itemCategory = item.category?.toLowerCase();
  const matchCategory = currentCategory?.toLowerCase();
  console.log("Comparing:", matchCategory, "vs", itemCategory);

console.log("Rendering:", item.id);
        if (currentCategory === itemCategory)     {
          return ( <Item key={item.id} id={item.id} name ={item.name} 
          image={item.image } 
          new_price ={item.new_price } old_price={item.old_price} />);
        }
        return null;
      })}
    </div>
    </div> )
}
export default Shopcat;





