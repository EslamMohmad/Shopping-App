import React from "react";

const ChangePassword = () => {
  return (
    <div className="changePassword">
      <h3 className="mb-4">change Password</h3>
      <div className="changePassword_form">
        <form>
          <div className="row justify-content-between mb-3">
            <div className="col-12 col-md-8 col-lg-6">
              <label className="py-2 d-block">old password *</label>
              <input
                className="rounded overflow-hidden border-1 p-2 w-100"
                type="password"
              />
            </div>
          </div>
          <div className="row justify-content-between mb-4">
            <div className="col-12 col-md-8 col-lg-6">
              <label className="py-2 d-block">new password *</label>
              <input
                className="rounded overflow-hidden border-1 p-2 w-100"
                type="password"
              />
            </div>
          </div>
          <div className="submit_changes">
            <button type="button" className="btn btn-dark px-3 py-2">
              change password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
