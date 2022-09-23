import React from "react";
import { Link } from "react-router-dom";

import "./SiteLinks.css";

const SiteLinks = () => {
  return (
    <div className="siteLinks-section">
      <ul className="mb-0 list-unstyled d-flex">
        <Link to="/Shopping-App">
          <li>home</li>
        </Link>
        <Link to="/Shopping-App/Products">
          <li>
            <span className="mx-2">/</span> products
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SiteLinks;
