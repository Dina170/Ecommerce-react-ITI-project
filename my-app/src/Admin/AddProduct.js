import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function AddProduct(props) {
  const { products, setProducts } = useContext(ProductContext);
  const { categories, setCategories } = useContext(ProductContext);
  //const [categories, setCategories] = useState([]);
  //const api_url = "https://fakestoreapi.com/products";

  // useEffect(() => {
  //   fetch(`${api_url}/categories`)
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);
  const location = useLocation();
  const propsData = location.state;
  console.log("propsData", propsData);
  const [product, setProduct] = useState({
    id: propsData ? propsData.id : products.length,
    title: propsData ? propsData.title : "",
    price: propsData ? propsData.price : "",
    description: propsData ? propsData.description : "",
    image: propsData ? propsData.image : "",
    category: propsData ? propsData.category : "",
  });

  const SavingAdd = () => {
    let newObject = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    };
    props.SaveHanlderRef(newObject);
  };

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="row p-5">
      <h2 className="">{propsData ? "Edit" : "Add"} Product</h2>
      <div className="form-group col-5">
        <label htmlFor="txtCourseName" className=" py-2 fs-5">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="txtCourseName"
          placeholder="Product Name"
          name="title"
          value={product.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group col-5">
        <label htmlFor="txtDur" className=" py-2 fs-5">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="txtDur"
          placeholder="price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group col-5">
        <label htmlFor="txtTopic" className=" py-2 fs-5">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="txtTopic"
          placeholder="Enter Topics"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group col-5">
        <label htmlFor="txtType" className=" py-2 fs-5">
          Category
        </label>
        <select
          name="category"
          value={product.category}
          onChange={handleInputChange}
          class="custom-select custom-select-sm form-control form-control-sm"
        >
          {categories.map((cat) => {
            return <option value={cat.categoryName}>{cat.categoryName}</option>;
          })}
        </select>
      </div>
      <div className="form-group col-10">
        <label htmlFor="txtCourseTrack" className=" py-2 fs-5">
          Image
        </label>
        {propsData && (
          <img src={product.image} width={"200px"} alt="not found" />
        )}
        <img src={product.image} width={"200px"} alt="not found" />
        <input
          type="file"
          className="form-control"
          id="txtCourseTrack"
          placeholder="Enter Track"
          name="image"
          //value={product.image}
          //onChange={handleInputChange}
          onChange={(event) => {
            if (event.target.files && event.target.files[0]) {
              let img = event.target.files[0];
              setProduct({ ...product, image: URL.createObjectURL(img) });
            }
          }}
        />
      </div>
      <div className="form-group text-center col-10">
        <button
          type="submit"
          className="btn btn-primary m-4 fs-4"
          onClick={SavingAdd}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
