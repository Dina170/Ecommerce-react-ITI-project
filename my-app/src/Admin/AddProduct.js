import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function AddProduct(props) {
  const { products } = useContext(ProductContext);
  const { categories } = useContext(ProductContext);
  const location = useLocation();
  const propsData = location.state;
  console.log("propsData", propsData);
  const [product, setProduct] = useState({
    id: propsData ? propsData.id : products.length + 1,
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

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.price) {
      errors.price = "Price is required!";
    }
    if (isNaN(values.price)) {
      errors.price = "Price must be a number!";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.category) {
      errors.category = "Category is required";
    }
    if (!values.image) {
      errors.image = "Image is required";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("it's false");
      setErrors(validate(product));
      setValidated(false);
    } else {
      setValidated(true);
      console.log("it's true");
      SavingAdd();
    }
  };

  return (
    <div className="row p-5">
      <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800 mt-3">
            {propsData ? "Edit" : "Add"} Product
          </h1>
        </div>
      </div>
      <form
        className="needs-validation"
        noValidate
        validated={validated ? 1 : 0}
        onSubmit={handleSubmit}
      >
        <div className="col-md-10 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body text-start ms-3">
              <div className="row no-gutters align-items-center">
                <div className="col-9 mr-2">
                  <div className="form-group">
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
                      required
                      style={{
                        border: errors.title ? "2px solid red" : null,
                      }}
                    />
                    <p className="text-danger">{errors.title}</p>
                  </div>
                  <div className="form-group">
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
                      required
                      style={{
                        border: errors.price ? "2px solid red" : null,
                      }}
                    />
                    <p className="text-danger">{errors.price}</p>
                  </div>
                  <div className="form-group">
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
                      required
                      style={{
                        border: errors.description ? "2px solid red" : null,
                      }}
                    />
                    <p className="text-danger">{errors.description}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtType" className=" py-2 fs-5">
                      Category
                    </label>
                    <select
                      name="category"
                      value={product.category}
                      onChange={handleInputChange}
                      className="custom-select custom-select-sm form-control form-control-sm"
                      required
                      style={{
                        border: errors.category ? "2px solid red" : null,
                      }}
                    >
                      {categories.map((cat) => {
                        return (
                          <option value={cat.categoryName}>
                            {cat.categoryName}
                          </option>
                        );
                      })}
                    </select>
                    <p className="text-danger">{errors.category}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="imgg" className="d-block py-2 fs-5">
                      Image
                    </label>
                    {propsData && (
                      <img
                        src={product.image}
                        width={"200px"}
                        alt="not found"
                      />
                    )}
                    {!propsData && (
                      <input
                        type="file"
                        className="form-control mt-3"
                        id="imgg"
                        placeholder="Enter Track"
                        name="image"
                        onChange={(event) => {
                          if (event.target.files && event.target.files[0]) {
                            let img = event.target.files[0];
                            setProduct({
                              ...product,
                              image: URL.createObjectURL(img),
                            });
                          }
                        }}
                        required
                        style={{
                          border: errors.image ? "2px solid red" : null,
                        }}
                      />
                    )}
                    {propsData && (
                      <input
                        type="file"
                        className="form-control mt-3"
                        id="imgg"
                        placeholder="Enter Track"
                        name="image"
                        onChange={(event) => {
                          if (event.target.files && event.target.files[0]) {
                            let img = event.target.files[0];
                            setProduct({
                              ...product,
                              image: URL.createObjectURL(img),
                            });
                          }
                        }}
                        style={{
                          border: errors.image ? "2px solid red" : null,
                        }}
                      />
                    )}
                    <p className="text-danger">{errors.image}</p>
                  </div>
                  <div className="form-group text-start">
                    <button type="submit" className="btn btn-primary fs-5 mt-3">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
