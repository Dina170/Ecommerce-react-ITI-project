import { Link } from "react-router-dom";

function ListProducts(props) {
  return (
    <div className="container-fluid">
      <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800 mt-3 ms-1">Products</h1>
        </div>
      </div>
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <table
              className="table table-bordered dataTable"
              id="tableRef"
              width="100%"
              style={{ width: "100%" }}
            >
              <thead>
                <tr role="row">
                  <th className="text-center" style={{ width: "91.725px" }}>
                    Title
                  </th>
                  <th className="text-center" style={{ width: "141.45px" }}>
                    Photo
                  </th>
                  <th className="text-center" style={{ width: "30.1625px" }}>
                    Price
                  </th>
                  <th className="text-center" style={{ width: "71.65px" }}>
                    Description
                  </th>
                  <th className="text-center" style={{ width: "66.1375px" }}>
                    Category
                  </th>
                  <th className="text-center" style={{ width: "66.1375px" }}>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {props.products.map((product, i) => (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>
                      <img
                        src={product.image}
                        className="card-img-top"
                        width={"200px"}
                        height={"200px"}
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
      </div>
    </div>
  );
}

export default ListProducts;
