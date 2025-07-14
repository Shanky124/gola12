import React , {createContext, useState} from "react";
import all_product from "../assets/product.js";
import cartitm from "../comp/cartitm/cartitm.jsx";

export const Shopc = createContext(null);

const getdefaultcart=()=> {
    let cart={};
    for (let index=0; index<all_product.length+1;index++){
         cart[index]=0
    }return cart;
}

const Shopcprovider= (props) =>{
    const [cartItems, setCartItems ]= useState(getdefaultcart());

    const addToCart = (itemId)=>{ setCartItems ((prev) => ({...prev,[itemId]:prev [itemId]+1}) ); 
    console.log(cartItems);
}
    const removeFromCart = (itemId)=>{ setCartItems ((prev) => ({...prev,[itemId]:prev [itemId]-1}));};

const getTotalCartAmount=()=>{
    let totalAmount=0;
    for (const item in cartItems)
    {
        if(cartItems[item]>0){
            let iteminfo = all_product.find ((product)=>product.id===Number (item));
            totalAmount+=iteminfo.new_price* cartItems[item];
        }}
        return totalAmount;
}
const getTotalCartItems=()=>{
    let totalItems=0;
    for (const item in cartItems)
    {
        if(cartItems[item]>0){
        
            totalItems += cartItems[item];
        }}
        return totalItems;
}




    const contextvalue ={getTotalCartItems,getTotalCartAmount,all_product, cartItems,addToCart,removeFromCart};

    return (
        <Shopc.Provider
         value ={contextvalue}>
{props.children}

        </Shopc.Provider>
    );
}
export default Shopcprovider;


