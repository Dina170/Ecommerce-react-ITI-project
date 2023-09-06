import { useState, useEffect } from "react";
import '../bootstrap.min.css'
import {Link}from'react-router-dom'

const Login = () => {
    const initialValues = {
     username: "",
     password: "" 
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
      if (!values.username) {
        errors.username = "Username is required!";
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
      <div className=" message success text-success h1"><b>Loged in successfully ✓</b></div>
    ) : null}
    <form onSubmit={handleSubmit}>
    <div className="card">
        <div className="card-header">
            <h1>Login Form</h1>
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
          style={{ border: formErrors.username ? "2px solid red" : null}}
        />
      </div>
      <p className="text-danger">{formErrors.username}</p>


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

      <div className="form-group form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
        />
      <label className="form-check-label">Remember me</label>
      </div>
      
      <button className="btn btn-success w-100">Login</button>
      <div>
      <label className="mx-auto my-4">
      Don't have an account ?{" "}
        <Link to="/Register" style={{ textDecoration: 'none' }}>
        <span style={{ cursor: "pointer" }} className="text-danger">
             <u>Sign Up</u>
        </span>
        </Link>
      </label>
      </div>

      <div>
      <label className="mx-auto my-4">
      <Link to="/user/forget-password" style={{ textDecoration: 'none', color: 'red' }}>
                            Do you forget password?        
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

export default Login;