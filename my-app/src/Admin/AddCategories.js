import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function AddCategories(props) {
  const { categories } = useContext(ProductContext);

  const location = useLocation();
  const propsData = location.state;
  console.log("propsData", propsData);

  const [category, setCategory] = useState({
    id: propsData ? propsData.id : categories.length + 1,
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

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.categoryName) {
      errors.categoryName = "Category is required!";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.status) {
      errors.status = "Status is required";
    }
    if (isNaN(values.status)) {
      errors.status = "Status must be a number";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("it's false");
      setErrors(validate(category));
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
            {propsData ? "Edit" : "Add"} Category
          </h1>
        </div>
      </div>
      <form
        className="needs-validation"
        noValidate
        validated={validated ? 1 : 0}
        onSubmit={handleSubmit}
      >
        <div className="col-xl-8 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body text-start ms-3">
              <div className="row no-gutters align-items-center">
                <div className="col-9 mr-2">
                  <div className="form-group has-validation">
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
                      required
                      style={{
                        border: errors.categoryName ? "2px solid red" : null,
                      }}
                    />
                    <p className="text-danger">{errors.categoryName}</p>
                  </div>

                  <div className="form-group">
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
                      required
                      style={{
                        border: errors.description ? "2px solid red" : null,
                      }}
                    />
                  </div>
                  <p className="text-danger">{errors.description}</p>
                  <div className="form-group">
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
                      required
                      style={{
                        border: errors.status ? "2px solid red" : null,
                      }}
                    />
                    <p className="text-danger">{errors.status}</p>
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

export default AddCategories;
