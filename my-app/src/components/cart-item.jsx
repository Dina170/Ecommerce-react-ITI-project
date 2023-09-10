import { useContext } from "react";
import { ProductContext } from "../Admin/ProductContext";
//import {ShopContext} from "../context/shop-context"

import "./cart.css";

let CartItem = (props) => {
  let { category, id, image, price, title } = props.data;
  let { cartItems, addToCart, removeFromCart, updateAmount } =
    useContext(ProductContext);

  return (
    <div className="cartItem"> 
      
        <img src={image} alt="product" />
        <div className="description">
        <div>{category}</div>
        <div>{title}</div>
        <div>Total price :$ {price * cartItems[id]}</div>
        <div className="countHandler">
        <button onClick={() => addToCart(id)}>+</button>
        <input
          value={cartItems[id]}
          onClick={(e) => {
            updateAmount(Number(e.target.value), id);
          }}
        />
        <button onClick={() => removeFromCart(id)}>-</button>
      </div>
      </div>
    </div>
  );
};

export default CartItem;
