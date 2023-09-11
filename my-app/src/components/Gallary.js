import { useEffect, useState, useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../Admin/ProductContext";

export default function Gallary() {
  const { products } = useContext(ProductContext);
  const { categories } = useContext(ProductContext);
  const [gallaryProd, setGallaryProd] = useState([]);

  const getAllProducts = () => {
    setGallaryProd(products);
  };

  const getProductInCategory = (catName) => {
    let productsInCat = products.filter(
      (product) => product.category === catName
    );
    console.log("productsInCat", productsInCat);
    setGallaryProd(productsInCat);
    console.log("productssss", products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div id="gallary" className="py-5">
      <h1 className="text-center special-heading">Gallery</h1>
      <p className="mb-3">New stuff everyday</p>
      <div className="container mt-3">
        <button
          onClick={() => {
            getAllProducts();
          }}
          className="btn card-btn m-2"
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat.id}
              onClick={() => {
                getProductInCategory(cat.categoryName);
              }}
              className="btn card-btn m-2"
            >
              {cat.categoryName}
            </button>
          );
        })}
        <div className="row">
          {gallaryProd.map((product) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 col-xxl-3  my-3"
                key={product.id}
              >
                <Product product={product} showDetailsBtn={true} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
