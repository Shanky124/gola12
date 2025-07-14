import React from 'react'
import "./BredCrums.css"
import download from "../../assets/download.png"

const BredCrums = (props) => {
 console.log("BredCrums props:",props);

  const {product}= props;

  return (
    <div className='br'>
       Home <img src={download} alt="" height="29px" width="22px" />
        SHOP <img src= {download} alt=""  height="29px"width="22px" /> {product.category} 
        <img src={download} alt="" height="30px" width="22px" />{product.name}
    </div>
  )
}
export default BredCrums;  




