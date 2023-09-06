import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function AddCategories(props) {
  const { products, setProducts } = useContext(ProductContext);
  const { categories, setCategories } = useContext(ProductContext);
  //const [categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

  // useEffect(() => {
  //   fetch(`${api_url}/categories`)
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);
  const location = useLocation();
  const propsData = location.state;
  console.log("propsData", propsData);

  const [category, setCategory] = useState({
    id: propsData ? propsData.id : categories.length,
    categoryName: propsData ? propsData.categoryName : "",
    description: propsData ? propsData.description : "",
    status: propsData ? propsData.status : 0,
  });

  const SavingAdd = () => {
    let newCat = {
      id: category.id,
      categoryName: category.categoryName,
      description: category.description,
      status: category.status,
    };
    console.log(newCat);

    props.SaveHanlderRef(newCat);
  };

  const handleInputChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="row p-5">
      <h2 className="">{propsData ? "Edit" : "Add"} Category</h2>
      <div className="form-group col-5">
        <label htmlFor="txtCourseName" className=" py-2 fs-5">
          Category Name
        </label>
        <input
          type="text"
          className="form-control"
          id="txtCourseName"
          placeholder="Category Name"
          name="categoryName"
          value={category.categoryName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group col-5">
        <label htmlFor="txtDur" className=" py-2 fs-5">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="txtDur"
          placeholder="description"
          name="description"
          value={category.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group col-5">
        <label htmlFor="txtTopic" className=" py-2 fs-5">
          Status
        </label>
        <input
          type="text"
          className="form-control"
          id="txtTopic"
          placeholder="status"
          name="status"
          value={category.status}
          onChange={handleInputChange}
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

export default AddCategories;
