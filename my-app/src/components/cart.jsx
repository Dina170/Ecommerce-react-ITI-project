import { useContext, useState } from "react";

import { ProductContext } from "../Admin/ProductContext";
//import {ShopContext} from "../context/shop-context"
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import emptyCart from '../images/empty.jpg'

import emailjs from '@emailjs/browser';

function Cart() {
  const { products, setProducts } = useContext(ProductContext);
  let { cartItems, getTotalCartAmount, checkout } = useContext(ProductContext);
  let totalAmount = getTotalCartAmount();
  let navigate = useNavigate();

  let makeReceipt =function(){
    let receipt =[];
    products.map((product) =>{
      if(cartItems[product.id] >0){
        let obj ={};
        obj.id =product.id;
        obj.title =product.title;
        obj.quantity =cartItems[product.id];
        obj.price = product.price * cartItems[product.id];
        receipt.push(obj);
      }
    })
    return receipt;

  }
  let sendConfirmation =function (){
    let dataSent = {
      userName : "",
      userEmail :"" ,
      receipt : JSON.stringify(makeReceipt())
    }
    emailjs.send('service_0kyj6bk', 'template_v7u402a', dataSent, 'IH3VizxuFCrzZiLkw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }
  let checkUserMode =function(){
    let mode =localStorage.getItem('mode');
    console.log(mode)
    if(mode === "registerd"){
      return true;
    }
    else{
      return false;
    }
  }
  return (
    
    <>
    {totalAmount === 0 ? (
      <img src={emptyCart} className="emptyCart" />
    )  :

    ( <div>
      <h1 style={{color :"#0f2c59"}}>Your cart items</h1>
      <div className="cart">
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      </div>)}
      <div className="btnFooter">
          <p style={{color:"#0f2c59" ,fontWeight :"bold" ,fontSize:"40px"}}>Total price = ${Math.round(totalAmount)}</p>
          <button onClick={() => {
            navigate("/")}}>Continue Shopping</button>
          <button
            onClick={() => {
              if(checkUserMode()){
              sendConfirmation ();
              checkout();
              navigate("/");}
              else{
                localStorage.setItem('returnToCart' ,'true');
                navigate("/login")
              }
            }}
            disabled ={totalAmount ===0}
            className= {totalAmount === 0 ? "disabledbtn"  : ""}
          >
            checkout
          </button>
        </div>

    </>
    
   
    
  );
}

export default Cart;