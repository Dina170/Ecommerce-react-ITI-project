//import { useContext } from "react";
//import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";
//import "./assets/vendor/jquery/jquery";
//import "./assets/vendor/datatables/jquery.dataTables";
//import "jquery/dist/jquery.min.js";
//import "./assets/vendor/datatables/dataTables.bootstrap4";
//import "./assets/vendor/datatables/dataTables.bootstrap4.css";

// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";

//import $ from "jquery";

function ListProducts(props) {
  //const { products, setProducts } = useContext(ProductContext);

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Products</h1>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Products DataTable
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="dataTable_length">
                    <label>
                      Show
                      <select
                        name="dataTable_length"
                        aria-controls="dataTable"
                        className="custom-select custom-select-sm form-control form-control-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div id="dataTable_filter" className="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="dataTable"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table
                    className="table table-bordered dataTable"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                    role="grid"
                    aria-describedby="dataTable_info"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting sorting_asc"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                          style={{ width: "91.725px" }}
                        >
                          Title
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Position: activate to sort column ascending"
                          style={{ width: "141.45px" }}
                        >
                          Photo
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Age: activate to sort column ascending"
                          style={{ width: "30.1625px" }}
                        >
                          Price
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Start date: activate to sort column ascending"
                          style={{ width: "71.65px" }}
                        >
                          Description
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style={{ width: "66.1375px" }}
                        >
                          Category
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style={{ width: "66.1375px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {props.products.map((product, i) => (
                        <tr>
                          <td>{product.title}</td>
                          <td>
                            <img
                              src={product.image}
                              className="card-img-top"
                              width={"200px"}
                              alt={product.title}
                            />
                          </td>
                          <td>{product.price}</td>
                          <td>{product.description}</td>
                          <td>{product.category}</td>
                          <td>
                            <input
                              type="button"
                              onClick={() => {
                                props.DeleteHanlderRef(i);
                              }}
                              className="btn btn-outline-danger me-2"
                              value="Delete"
                            />
                            <Link
                              className="btn btn-outline-success"
                              to={"/Dashboard/AddProduct"}
                              state={product}
                            >
                              Edit
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="dataTable_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of {props.products.length} entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="dataTable_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="dataTable_previous"
                      >
                        <a
                          href="/#"
                          aria-controls="dataTable"
                          data-dt-idx="0"
                          tabindex="0"
                          className="page-link"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="paginate_button page-item active">
                        <a
                          href="/Dashboard/ListProducts"
                          aria-controls="dataTable"
                          data-dt-idx="1"
                          tabindex="0"
                          className="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="/Dashboard/ListProducts"
                          aria-controls="dataTable"
                          data-dt-idx="2"
                          tabindex="0"
                          className="page-link"
                        >
                          2
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="/#"
                          aria-controls="dataTable"
                          data-dt-idx="3"
                          tabindex="0"
                          className="page-link"
                        >
                          3
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="/#"
                          aria-controls="dataTable"
                          data-dt-idx="4"
                          tabindex="0"
                          className="page-link"
                        >
                          4
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="/#"
                          aria-controls="dataTable"
                          data-dt-idx="5"
                          tabindex="0"
                          className="page-link"
                        >
                          5
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="/#"
                          aria-controls="dataTable"
                          data-dt-idx="6"
                          tabindex="0"
                          className="page-link"
                        >
                          6
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next"
                        id="dataTable_next"
                      >
                        <a
                          href="/#"
                          aria-controls="dataTable"
                          data-dt-idx="7"
                          tabindex="0"
                          className="page-link"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
