import React, { useContext } from 'react'
import "./productdisplay.css"
import star1 from "../../assets/star1.jpeg"
import { Shopc } from '../../cont/shopc.jsx'

const Productdisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(Shopc);


  return (
    <div className="prod">
      <div className="productlft">
        <div className="productdis">
          <img src={product.image} alt="" height="200px" />
          <img src={product.image} alt="" height="200px" />
          <img src={product.image} alt="" height="200px" />


        </div>
        <div className="pdimg">
          <img className='pdimgmain' src={product.image} alt="" height="500px" />
        </div>
      </div>
      <div className="productright">

        <h1> {product.name}  </h1>
        <div className="pdrightstar">
          <img src={star1} alt="" height="30px" />
          <img src={star1} alt="" height="30px" />
          <img src={star1} alt="" height="30px" />
          <img src={star1} alt="" height="30px" />
          <p>(120)</p>
        </div>
        <div className="pdrightpric">
          <div className="pdrightpricold">
            ${product.old_price}
          </div>
          <div className="pdpricenaya">
            ${product.new_price}
          </div>
        </div>
        <div className="pddescription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eius.
          Repellat sint amet laborum reprehenderit asperiores deleniti corporis?
          Itaque assumenda deserunt alias natus nulla porro dolor placeat nihil laborum rerum!
        </div>
        <div className="pddisplayrightsize">
          <h1>Select Size</h1>
          <div className="pddisplayrightsizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <button className='sap' onClick={() => { addToCart(Number(product.id)) }}>ADD TO CART</button>
        <div className="pdrightcat">
          <span>Category:<span> women,Saree,Traditional</span></span>
        </div>
        <div className="pdrightcat">
          <span>Tags: <span> Modern,Latest,Fashion</span></span>
        </div>

      </div>
    </div>

  )
}

export default Productdisplay;





