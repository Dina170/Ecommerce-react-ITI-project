import { useState, useEffect } from "react";
import { Link  } from "react-router-dom";
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

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
      setTimeout(() => {
        window.location.href = "/"; // Redirect to the home page
      }, 1500);
    }
  }, [formErrors,isSubmit]);

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

  return (
    <>
    <section>
    {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div >
              <h3 className="message-success">Logged in successfully ✓</h3>
            </div>
          ) : null}
      <div className="wrapper ">
        <span className="bg-animate"></span>
        <div className="form-box login">
          <form onSubmit={handleSubmit} action="#">
                <h2>Login Form</h2>
              
                <div className="input-box">
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formValues.username}
                    onChange={handleChange}
                    style={{
                      borderBottom: formErrors.username ? "2px solid red" : null
                    }}
                  />
                  <FaUser className="icon" />
                </div>
                <p className="text-danger">{formErrors.username}</p>
                
                <div className="input-box">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formValues.password}
                    onChange={handleChange}
                    style={{
                      borderBottom: formErrors.password ? "2px solid red" : null
                    }}
                  />
                <FaLock className="icon" />
                </div>
                <p className="text-danger">{formErrors.password}</p>
                
                <div className="Remember-me">
                <label><input
                    type="checkbox"
                    name="rememberMe"
                    checked={formValues.rememberMe}
                    onChange={handleChange}
                  />
                  Remember me
                  </label>
                </div>
                
                <button className="btn" id="btn" type="submit">Login</button>
                <div className="logreg-link">
                  <p>
                    Don't have an account ?{" "}
                    <Link to="/Register"  className="link">
                        Sign Up
                    </Link>
                  </p>
                </div>
              
            </form>
            </div>
            <div className="info-text login">
                    <h2>Welcome Back!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            </div>
            </section>
            </>
          
   );
 }

 export default Login;