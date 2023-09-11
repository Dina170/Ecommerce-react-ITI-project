import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("registeredUsers"))
  );
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    localStorage.setItem("mode", null);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg px-3 sticky-top nav-custom stroke">
        <Link className="navbar-brand" to="/">
          <img src="./images/hnd.png" width="200px" alt="logo" />
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                CART
              </Link>
            </li>
            <li className="nav-item">
              {isAdmin && (
                <Link className="nav-link" to="/Dashboard">
                  Dashboard
                </Link>
              )}
            </li>
          </ul>
          <div className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            {!loggedInUser ? (
              <Link className="nav-link" to="/Login">
                <FontAwesomeIcon className="me-1" icon={faRightToBracket} />
                Login
              </Link>
            ) : (
              <button className="nav-link" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
