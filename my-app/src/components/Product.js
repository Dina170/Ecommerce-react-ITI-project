import { Link } from "react-router-dom";
import { ProductContext } from "../Admin/ProductContext";
import { useContext, useEffect } from "react";

export default function Product({ product, showDetailsBtn }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <>
      <div className="mycard">
        <div className="img-container">
          <img
            src={product.image}
            width="300px"
            height="300px"
            className="rounded-img p-3"
            alt={product.title}
          />
        </div>
        <div className="productCard">
          <h5 className="fw-bold">
            {showDetailsBtn
              ? product.title.split(" ").slice(0, 3).join(" ")
              : product.title}
          </h5>
          {!showDetailsBtn && (
            <p className="card-text">{product.description}</p>
          )}
          <p> Price: {product.price}$</p>
          {showDetailsBtn && (
            <Link className="btn me-2 card-btn" to={`product/${product.id}`}>
              Details
            </Link>
          )}
          {showDetailsBtn && (
            <button
              className="btn card-btn"
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
