import React from 'react'
import "./footr.css"
import logo from "../../assets/logo.png"
import insta from "../../assets/instagram.jpeg"
import face from"../../assets/facebook.png"
const Footr = () => {
  return (
    <div className='foot'>
<div className='foot-l'> 
  <img src={logo} alt="" height="50px" />
<p>Gola Studio</p>
</div>
<ul className='foot-link'>
    <li>About</li>
    <li>Company</li>
    <li>Office</li>
    <li>Product</li>
    <li>Contact</li>
</ul>
<div className='socialicon'>
<div className='foot-cont'>
<img src={insta} alt="" height="50px" />
</div>
<div className='foot-cont'>
<img src={face} alt=""height="50px" />
</div>
</div>
<div className="copyr">
    <hr></hr>
    <p>Copyright @ 2025- All Rights Reserved.</p>
</div>
    </div>
  )
}

export default Footr;