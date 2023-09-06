//import { useContext } from "react";
//import { categoryContext } from "./categoryContext";
import { Link } from "react-router-dom";
//import "./assets/vendor/jquery/jquery";
//import "./assets/vendor/datatables/jquery.dataTables";
//import "jquery/dist/jquery.min.js";
//import "./assets/vendor/datatables/dataTables.bootstrap4";
//import "./assets/vendor/datatables/dataTables.bootstrap4.css";

// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";

//import $ from "jquery";

function ListCategory(props) {
  //const { Categories, setCategories } = useContext(categoryContext);

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Categories</h1>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Categories DataTable
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
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
                          Category Name
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
                          Description
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
                          Status
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
                      {props.Categories.map((category, i) => (
                        <tr>
                          <td>{category.categoryName}</td>
                          <td>{category.description}</td>
                          <td>{category.status}</td>
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
                              to={"/Dashboard/AddCategory"}
                              state={category}
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
                    Showing 1 to 10 of {props.Categories.length} entries
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
                          href="/Dashboard/ListCategory"
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
                          href="/Dashboard/ListCategory"
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

export default ListCategory;
