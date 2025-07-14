import Navbar from "./comp/Navbar/Navbar.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from "./pag/shop.jsx";
import Shopcat from "./pag/shopcat.jsx";
import Product from "./pag/product.jsx";
import Cart from "./pag/cart.jsx";
import Loginsignup from "./pag/loginsignup.jsx";
import Footr from "./comp/footr/footr.jsx";
import manbannr from "./assets/manbannr.jpg"
import kids_banner from "./assets/kids_banner.jpg"
import women_banner from "./assets/women_banner.avif"




function App() {
  return (
    <div>

      <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<Shopcat banner ={manbannr} category="mens" />}/>
        <Route path="/women" element={<Shopcat banner={women_banner} category="women" />}/>
        <Route path="/kids" element={<Shopcat banner={kids_banner} category="kids" />}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/loginsignup" element={<Loginsignup/>}/>
      </Routes>
      <Footr/>
      </BrowserRouter>
 </div>    
  )
}
export default App; 
