import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/Dashboard"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Admin</div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/Dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Products</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </a>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/Dashboard/ListProducts">
          <i className="fas fa-fw fa-table"></i>
          <span>Products Table</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Dashboard/AddProduct">
          <i className="fas fa-fw fa-table"></i>
          <span>Add a Product</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Categories</div>

      <li className="nav-item">
        <Link className="nav-link" to="/Dashboard/ListCategories">
          <i className="fas fa-fw fa-table"></i>
          <span>Categories Table</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Dashboard/AddCategory">
          <i className="fas fa-fw fa-table"></i>
          <span>Add a Category</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default Sidebar;
