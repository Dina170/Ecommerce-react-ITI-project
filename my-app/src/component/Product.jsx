import {Link } from "react-router-dom"
import NavBar from "./NavBar";

function Product( props){
    const {product,showButton}=props; //البروبس ده عبارة عن اوبجكت جواه حاجة اسمها البروداكت هاته


    return(
        <>
        <NavBar/>
        <div className="container my-5 py-2">
         <div className="card">
                        <img src={product.images} className="card-img-top" alt={product.title}  width="400px" height="400px"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p>Price:{product.price}$</p>
                            {showButton && <Link className="btn btn-primary" to={`/Product/${Product.id}`}>Details</Link>}

                           
                        </div>
        </div>
        </div>
        </>
    )
}
export default Product