import { Link } from "react-router-dom";
import { ProductContext } from "../Admin/ProductContext";
import { useContext } from "react";

export default function Product({ product, showDetailsBtn }) {
  const { addToCart } = useContext(ProductContext);
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          {!showDetailsBtn && (
            <p className="card-text">{product.description}</p>
          )}
          <p> Price: {product.price}$</p>
          {showDetailsBtn && (
            <Link className="btn btn-primary me-2" to={`product/${product.id}`}>
              Details
            </Link>
          )}
          {showDetailsBtn && (
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart(product.id);
                console.log("id", product.id);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}
