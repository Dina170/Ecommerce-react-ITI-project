import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../Admin/ProductContext";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const { products, addToCart } = useContext(ProductContext);

  console.log("params", params);

  useEffect(() => {
    let foundProduct = products.find((p) => params.productId == p.id);
    setProduct(foundProduct);
  }, []);
  return (
    <>
      <div className="body">
        <div className="row">
          <div className="ms-5 col-4 img-container">
            <img
              src={product.image}
              width="400px"
              height="500px"
              className="rounded-img p-3"
              alt={product.title}
            />
          </div>
          <div className="productCard col-5 text-start ms-5">
            <h3 className="fw-bold mb-5">{product.title}</h3>
            <p className="card-text mb-5">{product.description}</p>
            <p className="card-price"> Price: {product.price}$</p>
            <button
              className="btn1"
              onClick={() => {
                addToCart(product.id);
                console.log("id", product.id);
              }}
            >
              Add to Cart
            </button>
            <button className="btn2 mb-3 mx-3">
              <Link to="/cart" className="link">
                Go to Cart
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
