import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../Reuseable Components/Icon/Icon";

import img from "./404.svg";

const PageNotFound = () => {
  return (
    <div className="page-not-found py-5 my-5 d-flex justify-content-center flex-column align-items-center">
      <img src={img} alt="404" width="100%" style={{ maxWidth: "900px" }} />
      <div className="txt text-center">
        <h2 className="fw-bold mb-2">looks like you are lost</h2>
        <p className="mb-4 text-muted">
          we can't find the page your are looking for
        </p>
        <Link to="/Shopping-App">
          <button className="btn btn-dark p-2 px-3 rounded">
            <span className="me-2">
              <Icon prefix={"fa-solid"} icon={"fa-house"} />
            </span>
            go home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
