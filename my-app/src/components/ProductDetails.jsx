import React, { useEffect, useState} from "react";
import {useParams ,Link} from 'react-router-dom';
import Product from "./Product";
import './ProductDetails.css'
//import {ShopContext} from "../context/shop-context";



function ProductDetails(){
   const api_url="https://dummyjson.com/products";
    const[product,setProduct]=useState({})


    const params= useParams();
    console.log(params);

    useEffect(()=>{
        fetch(`${api_url}/${params.ProductId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product))
    },[])
    
    
    return(
       <>
       <div className="body">
        <Product product={product} showButton={false}/>
        <button
        className="btn1"
        // onClick={() => addToCart(Product)}
        >
            Add to Cart
        </button>
        <button className="btn2  mb-3 mx-3">
        <Link to="/"  className="link">
            Go to Cart
        </Link>
        </button>
        </div>
      </>
    )
}
export default ProductDetails