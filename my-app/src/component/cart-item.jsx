import { useContext} from "react"
import {ShopContext} from "../context/shop-context"

import './cart.css'



let CartItem =(props)=>{
    let {category ,id ,image ,price ,title} =props.data
    let { cartItems, addToCart, removeFromCart, updateAmount} =useContext(ShopContext)


    return(
        <div className="cartItem">
        <div>
            <div><img src={image} alt="product image"/></div>
            <div>{category}</div>
            <div>{title}</div>
            <div>Total price :$ {price * cartItems[id]}</div>
        </div>
        <div>
            <button onClick={()=>addToCart(id)}>+</button>
            <input value ={cartItems[id]} onClick={(e)=>{updateAmount(Number(e.target.value),id)}}/>
            <button onClick={()=>removeFromCart(id)}>-</button>
        </div>
        </div>



    )



   

}



export default CartItem