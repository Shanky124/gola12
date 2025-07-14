import react, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/react.svg"
import cart from "../../assets/cart.png"
import { Link } from 'react-router-dom'
import { Shopc } from '../../cont/shopc'



const Navbar =()=>{
  const[sap,setsap] = useState("home")
const {getTotalCartItems}=useContext(Shopc)
  return (
    <div className='navbar'>
        <div className='nav-log'>
    <img src={logo} alt="" />
    <p>Gola Studio </p>
    </div>
<ul className='nav-m'>
  <li onClick={()=> {setsap("home")}}> <Link to="/">Home</Link></li>
  <li onClick={()=> {setsap("mens")}}><Link to="/mens">Men</Link></li>
  <li onClick={()=> {setsap("women")}}><Link to="/women">women</Link> </li>
  <li onClick={()=> {setsap("kids")}}><Link to="/kids">Kids</Link></li>
</ul>
<div className='Nav-logo'>
 <Link to="/loginsignup"><button >Login</button></Link>
<br></br><br></br>
  <Link to="/cart"> <img src={cart} alt="" height="50px"></img></Link>


<div className='nav-cartcount'>{getTotalCartItems()}</div>
    </div></div>
  )
}

export default Navbar;


