import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaughWink,
  faGaugeSimpleHigh,
  faTable,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/Dashboard"
      >
        <div className="">
          <FontAwesomeIcon icon={faFaceLaughWink} />
        </div>
        <div className="mx-2">Admin</div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/Dashboard">
          <FontAwesomeIcon icon={faGaugeSimpleHigh} className="me-2" />
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Products</div>
      <li className="nav-item">
        <Link className="nav-link" to="/Dashboard/ListProducts">
          <FontAwesomeIcon icon={faTable} className="me-2" />
          <span>Products Table</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Dashboard/AddProduct">
          <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
          <span>Add a Product</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Categories</div>
      <li className="nav-item">
        <Link className="nav-link" to="/Dashboard/ListCategories">
          <FontAwesomeIcon icon={faTable} className="me-2" />
          <span>Categories Table</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Dashboard/AddCategory">
          <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
          <span>Add a Category</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
