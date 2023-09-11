import { useState, useEffect } from "react";
import {Link } from'react-router-dom'
import { FaUser, FaLock ,FaPhone, FaEnvelope } from 'react-icons/fa';

import './Register.css'

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
    const newUser = { ...formValues };
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    registeredUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    setFormValues(initialValues);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    };
  
    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors , isSubmit]);

    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        setTimeout(() => {
          window.location.href = "/"; // Redirect to the home page
        }, 1500);
      }
    }, [formErrors,isSubmit]);
    
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
    <section>
    {Object.keys(formErrors).length === 0 && isSubmit ? (
      <h3 className=" message-success">Signed up successfully ✓</h3>
    ) : null}
     <div className="wrapper ">
        <span className="bg-animate2"></span>
        <div  className="form-box register">
    <form onSubmit={handleSubmit}>
            <h2>Register Form</h2>

      <div className="input-box">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
          style={{ borderBottom: formErrors.username? "2px solid red" : null}}
        />
         <FaUser className="icon" />

      </div>
      <p className="text-danger">{formErrors.username}</p>
      
      <div className="input-box">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              style={{ borderBottom: formErrors.email ? "2px solid red" : null}}
            />
        <FaEnvelope className="icon" />

      </div>
      <p className="text-danger">{formErrors.email}</p>

      <div className="input-box">
            <input
              type="tel"
              name="Phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Phone Number"
              value={formValues.phone}
              onChange={handleChange}
              style={{ borderBottom: formErrors.phone ? "2px solid red" : null}}
            />
            <FaPhone className="icon" />
      </div>
      <p className="text-danger">{formErrors.phone}</p>
                  
      
      <div className="input-box">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
          style={{ borderBottom: formErrors.password ? "2px solid red" : null}}
        />
        <FaLock className="icon" />
      </div>
      <p className="text-danger">{formErrors.password}</p>
      
      <button className="btn" id="btn">Register</button>
      
      <div className="logreg-link">
       <p>
      already have an account ?{" "}
        <Link to="/Login" className="link">
             <u>Login</u>
        </Link>
      </p>
      </div>

      <div className="info-text register">
                    <h2>Welcome Back!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
 
  </form>
  </div>
  </div>
</section>
</>
    );
}

export default Register;