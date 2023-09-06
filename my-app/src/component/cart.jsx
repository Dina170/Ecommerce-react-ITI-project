import { useContext, useState } from "react";
import products from "../assets/products.json";
import { ShopContext } from "../context/shop-context";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

function Cart() {
  /*  let [productsStored ,setProductsStored] =useState(products) */
  let { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();
  let navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
        <div className="cart">
          {products.map((product) => {
            if (cartItems[product.id] > 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
      </div>
      {totalAmount > 0 ? (
        <div>
<<<<<<< HEAD
          <p>Total price = ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            checkout
          </button>
=======
            <h1>Your cart items</h1> 
        <div className='cart'>
            {products.products.map((product)=>{
                if(cartItems[product.id] >0){
                    return(
                        <CartItem data ={product} />
                    )
                }

            })}

>>>>>>> 57a20cba74cfbca9ddaa39deebc5f223e92c82b8
        </div>
      ) : (
        <p>Your card is empty</p>
      )}
    </div>
  );
}

export default Cart;
