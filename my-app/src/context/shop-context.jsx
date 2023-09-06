import { createContext, useState} from "react";
import products from '../assets/products.json'



export const ShopContext =createContext();


const getDefaultCart =()=>{ 
    let cart ={}
    products.products.forEach((product)=>{
        cart[product.id]=0
    })
    return cart
}

export const ShopContextProvider =(props) =>{
   let [cartItems ,setCartItems] =useState(getDefaultCart())

   const getTotalCartAmount=()=>{
    let total =0
    for(let item in cartItems){
        if(cartItems[item] >0){
            let itmefound =products.products.find((product)=> product.id === Number(item))
            total += (itmefound.price *cartItems[item])
        }
    }
    return total;
   }

   const addToCart =(itemId)=>{
    setCartItems({...cartItems ,[itemId] :cartItems[itemId] +1})
   }

   const removeFromCart =(itemId)=>{
    setCartItems({...cartItems ,[itemId] :cartItems[itemId]-1})
   }

   const updateAmount=(amount ,id)=>{
    setCartItems({...cartItems ,[id] :amount})
   } 

   const checkout =()=>{
    setCartItems(getDefaultCart())
   }



   const contextValues ={
    cartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    updateAmount,
    checkout
   }

   return (
    <ShopContext.Provider value={contextValues} >
        {props.children}
    </ShopContext.Provider>
   )






}






