import { useState, useEffect } from "react";
/* import '../bootstrap.min.css' */
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {Link}from'react-router-dom'

const Register = () => {
    const initialValues = {
     username: "",
     email:"",
     password: "" ,
     phone:""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if(!values.phone){
        errors.phone = "phone number is required!";
      }
      else if(values.phone.length<11){
        errors.phone = "Phone number must be equal 11 numbers";

      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }

      return errors;
    };

   return(
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100" >
    <div className="col-lg-4">
    {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div className=" message success text-success h1">Signed up successfully ✓</div>
    ) : null}
    <form onSubmit={handleSubmit}>
    <div className="card">
        <div className="card-header">
            <h1>Register Form</h1>
        </div>
        <div className="card-body">
      <div className="form-group">
        <label className="form-label">Username</label>
        <input
        className="form-control"
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
          style={{ border: formErrors.username? "2px solid red" : null}}

        />
      </div>
      <p className="text-danger">{formErrors.username}</p>
      
      <div className="form-group">
            <label className="form-label">Email</label>
            <input
            className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              style={{ border: formErrors.email ? "2px solid red" : null}}
            />
      </div>
      <p className="text-danger">{formErrors.email}</p>

      <div className="form-group">
            <label className="form-label">Phone</label>
            <input
            className="form-control"
              type="text"
              name="Phone"
              placeholder="Phone Number"
              value={formValues.phone}
              onChange={handleChange}
              style={{ border: formErrors.phone ? "2px solid red" : null}}

            />
      </div>
      <p className="text-danger">{formErrors.phone}</p>
                  
      
      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
          style={{ border: formErrors.password ? "2px solid red" : null}}
        />
      </div>
      <p className="text-danger">{formErrors.password}</p>
      
      <button className="btn btn-success w-100">Register</button>
      <div>
      <label className="mx-auto my-4">
      already have an account ?{" "}
        <Link to="/Login" style={{ textDecoration: 'none' }}>
        <span style={{ cursor: "pointer" }} className="text-danger">
             <u>Login</u>
        </span>
        </Link>
      </label>
      </div>
  </div>
  </div>
  </form>
  </div>
</div>
</>
    );
}

export default Register;