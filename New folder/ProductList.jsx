import { useEffect, useState } from "react"
import Product from "./Product.jsx"

function ProductList(){
    const api_url="https://dummyjson.com/products"  //بخزن الداتا
    const[products,setproducts]= useState([]) ;

//  فانكشن بكلم الداتا باستخدام fetch دى بحطها جوة هوك اسمها useEffect
    useEffect(()=>{
        //بتاخد urlوبترجع responce عاوز احولها لjson objectعشان اعرف اتعامل معاها 
        //then عاوز اخزن الداتا فى component وبما انى بخزن انتيرنال داتا لازم استخدم state
        fetch(api_url)
        .then((res)=>res.json())
        .then((data)=>setproducts(data))  // هنا عملت ست ف الست حطت الفاليو بتاعتها فى Products
    } ,[]);     //لازم اضيف الاراى الفاضيه دى  dependance list عشان ميعملش انفينتى لوب 
    
    
    
    
    return(
        <>
        <h2 className="text-center p-3">Our Products</h2>
        <div className="container">
            <div className="row">
                {products.map((product)=>{
                    return(
                        <div className="col-3" key={product.id}>
                            <Product product={product} showButton={true}/>
                        </div>
                    );
                })};
            </div>
        </div>
        </>
    )
}
export default ProductList