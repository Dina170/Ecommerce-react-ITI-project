import React, { useEffect, useState} from "react";
import {useParams ,Link} from 'react-router-dom';
import Product from "./Product";
//import {ShopContext} from "../context/shop-context";



function ProductDetails(){
   const api_url="https://dummyjson.com/products";
    const[product,setProduct]=useState({})
   // let { addToCart} =useContext(ShopContext)


    //usrparams دى هوك جايه من باكدج الراوتينج عشان تساعدنى اتعامل مع البارامتر اللى بتتحط فى يوارال
    const params= useParams();
    console.log(params);

    useEffect(()=>{
        //عشان يجيب البرودكت id بتاعى
        fetch(`${api_url}/${params.ProductId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product))
    },[])
    
    
    return(
       <>
        <Product product={product} showButton={false}/>
        <button
        className="btn btn-outline-dark"
        // onClick={() => addToCart(Product)}
        >
            Add to Cart
        </button>
        <Link to="/" className="btn btn-dark m-3">
            Go to Cart
        </Link>
      </>
    )
}
export default ProductDetails