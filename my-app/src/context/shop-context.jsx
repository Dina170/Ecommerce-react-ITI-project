import { createContext, useContext, useEffect, useState} from "react";
import { ProductContext } from "./product-context";




export const ShopContext =createContext();



export const ShopContextProvider =(props) =>{
    let {products} =useContext(ProductContext)
    const getDefaultCart =()=>{ 
    let cart ={}
    products.forEach((product)=>{
        cart[product.id]=0
    })
    return cart
}
   let [cartItems ,setCartItems] =useState([])

   useEffect(
    ()=>{
        if(products.length >0){
        setCartItems(getDefaultCart())} },
    [products])

   const getTotalCartAmount=()=>{
    let total =0
    for(let item in cartItems){
        if(cartItems[item] >0){
            let itmefound =products.find((product)=> product.id === Number(item))
            total += (itmefound.price *cartItems[item])
        }
    }
    return total;
   }

   const addToCart =(itemId)=>{
    setCartItems((prev)=>({...prev ,[itemId] :prev[itemId]+1}))
   }

   const removeFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev ,[itemId] :prev[itemId]-1}))
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






