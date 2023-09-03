import { useEffect, useState, useContext } from "react";
import Product from "./Product";
import productsdata from "../data.json";
import { ProductContext } from "../Admin/ProductContext";

export default function Gallary() {
  const api_url = "https://fakestoreapi.com/products";
  const { products, setProducts } = useContext(ProductContext);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setProducts(productsdata);
    console.log("products in gallary", products);
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    //getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h1 className="text-center my-4">GALLARY</h1>
      <div className="container">
        <button
          onClick={() => {
            getProducts();
          }}
          className="btn btn-outline-secondary m-2"
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => {
                getProductInCategory(cat);
              }}
              className="btn btn-outline-secondary m-2"
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3 my-3" key={product.id}>
                <Product product={product} showDetailsBtn={true} />
              </div>
            );
          })}
          {console.log("the products", products[0])}
          {console.log("the products type ", typeof products)}
        </div>
      </div>
    </>
  );
}
