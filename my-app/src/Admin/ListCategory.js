import { Link } from "react-router-dom";

function ListCategory(props) {
  return (
    <div className="container-fluid">
      <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800 mt-3">Categories</h1>
        </div>
      </div>

      <div className="">
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
                  cellSpacing="0"
                  role="grid"
                  aria-describedby="dataTable_info"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr role="row">
                      <th className="text-center" style={{ width: "91.725px" }}>
                        Category Name
                      </th>
                      <th className="text-center" style={{ width: "141.45px" }}>
                        Description
                      </th>
                      <th
                        className="text-center"
                        style={{ width: "30.1625px" }}
                      >
                        Status
                      </th>
                      <th
                        className="text-center"
                        style={{ width: "66.1375px" }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {props.Categories.map((category, i) => (
                      <tr key={category.id}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCategory;
