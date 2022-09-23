import React from "react";

import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="dashBoard">
      <h3 className="mb-4">dash board</h3>
      <div className="dashBoard_text">
        from your account dashboard you can view your
        <Link className="px-2 text-decoration-underline" to="orders">
          recent Orders
        </Link>
        , manage your
        <Link className="px-2 text-decoration-underline" to="accountDetails">
          account details
        </Link>{" "}
        and
        <Link className="px-2 text-decoration-underline" to="changePassword">
          change your password
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
