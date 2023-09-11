import {Link } from "react-router-dom"
import NavBar from "./Navbar";
import './ProductDetails.css'


function Product( props){
    const {product,showButton}=props;


    return(
        <>
        <NavBar/>
        <div className="container my-5 py-2">
         <div className="card">
                        <img src={product.images} className="card-img-top" alt={product.title}  width="200px" height="250px"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-price">Price: {product.price}$</p>
                            {showButton && <Link className="btn btn-primary" to={`/Product/${Product.id}`}>Details</Link>}

                           
                        </div>
        </div>
        </div>
        </>
    )
}
export default Product