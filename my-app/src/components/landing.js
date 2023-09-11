import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Landing() {
  return (
    <div className="landing">
      <button className="btn rounded-pill fs-4 py-2">
        <a href="#gallary">
          Shop Now <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
        </a>
      </button>
    </div>
  );
}

export default Landing;
