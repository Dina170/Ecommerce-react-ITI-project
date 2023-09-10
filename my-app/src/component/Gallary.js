import { useEffect, useState, useContext } from "react";
import Product from "./Product";
//import productsdata from "../data.json";
import { ProductContext } from "../Admin/ProductContext";

export default function Gallary() {
  //const api_url = "https://fakestoreapi.com/products";
  const { products, setProducts } = useContext(ProductContext);
  const { categories, setCategories } = useContext(ProductContext);
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
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h1 className="text-center my-4">GALLARY</h1>
      <div className="container">
        <button
          onClick={() => {
            getAllProducts();
          }}
          className="btn btn-outline-secondary m-2"
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
              className="btn btn-outline-secondary m-2"
            >
              {cat.categoryName}
            </button>
          );
        })}
        <div className="row">
          {gallaryProd.map((product) => {
            return (
              <div className="col-3 my-3" key={product.id}>
                <Product product={product} showDetailsBtn={true} />
              </div>
            );
          })}
          {/* {console.log("the products gallary", gallaryProd[5])}
          {console.log("the products", products[0])}
          {console.log("the products type ", typeof gallaryProd)} */}
        </div>
      </div>
    </>
  );
}
