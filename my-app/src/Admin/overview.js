import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDollarSign,
  faClipboardList,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

function Overview() {
  const { products } = useContext(ProductContext);
  return (
    <div className="container-fluid">
      <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800 mt-3">Dashboard</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body text-start ms-3">
              <div className="row no-gutters align-items-center">
                <div className="col-10">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Earnings (Monthly)
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    $40,000
                  </div>
                </div>
                <div className="col">
                  <FontAwesomeIcon
                    className="text-gray-300 fs-3"
                    icon={faCalendar}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body text-start ms-3">
              <div className="row no-gutters align-items-center">
                <div className="col-10">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Earnings (Annual)
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    $215,000
                  </div>
                </div>
                <div className="col">
                  <FontAwesomeIcon
                    className="text-gray-300 fs-3"
                    icon={faDollarSign}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body text-start ms-3">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Tasks
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-3 ms-2">
                      <div className="h5 mb-0 mr-1 font-weight-bold text-gray-800">
                        50%
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="progress progress-sm mr-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <FontAwesomeIcon
                    className="text-gray-300 fs-3"
                    icon={faClipboardList}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body text-start ms-3">
              <div className="row no-gutters align-items-center">
                <div className="col-9 mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Pending Requests
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    18
                  </div>
                </div>
                <div className="col-2">
                  <FontAwesomeIcon
                    className="text-gray-300 fs-3"
                    icon={faComments}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800 mt-3">Top Products</h1>
        </div>
      </div>
      <div className="row mb-3">
        <div className="mb-3" style={{ "max-width": "850px" }}>
          <div className="row g-0">
            <div className="col-md-4 img-container">
              <img
                src={products[19].image}
                className="rounded"
                width="250px"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="text-start ms-3">
                <h5 className="mb-3">{products[19].title}</h5>
                <p className="text-muted">{products[19].description}</p>
                <p className="">${products[19].price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="mb-3" style={{ "max-width": "850px" }}>
          <div className="row g-0">
            <div className="col-md-4 img-container">
              <img
                src={products[3].image}
                className="rounded"
                width="250px"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="text-start ms-3">
                <h5 className="mb-3">{products[3].title}</h5>
                <p className="text-muted">{products[3].description}</p>
                <p className="">${products[3].price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mb-4" style={{ "max-width": "850px" }}>
          <div className="row g-0">
            <div className="col-md-4 img-container">
              <img
                src={products[7].image}
                className="rounded "
                width="250px"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="text-start ms-3">
                <h5 className="mb-3">{products[7].title}</h5>
                <p className="text-muted">{products[7].description}</p>
                <p className="">${products[7].price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="my-3" style={{ "max-width": "850px" }}>
          <div className="row g-0">
            <div className="col-md-4 img-container">
              <img
                src={products[5].image}
                className="rounded"
                width="250px"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="text-start ms-3">
                <h5 className="mb-3">{products[5].title}</h5>
                <p className="text-muted">{products[5].description}</p>
                <p className="">${products[5].price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
