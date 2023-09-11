import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const [loggedInUser,setLoggedInUser] = useState( JSON.parse(localStorage.getItem("registeredUsers")));
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    localStorage.setItem("mode", null);

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Gallary
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                My Cart
              </Link>
            </li>
            <li className="nav-item">
              {isAdmin && (
            <Link  className="nav-link" to="/admin"> 
            Dashboard
            </Link>
             )}
            </li>
            <li className="nav-item">
            {!loggedInUser ?  (
               <Link className="nav-link" to="/Login">
               Login
             </Link>
              ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}