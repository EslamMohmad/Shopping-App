import React from "react";

const AccountDetails = () => {
  return (
    <div className="accountDetails col-xxl-9 ">
      <h3 className="mb-4">account details</h3>
      <div className="accountDetails_form ">
        <form>
          <div className="row justify-content-between mb-3">
            <div className="col-12 col-sm-6 px-2">
              <label className="py-2 d-block">first name *</label>
              <input
                className="rounded overflow-hidden border-1 p-2 w-100"
                type="text"
              />
            </div>
            <div className="col-12 col-sm-6 px-2">
              <label className="py-2 d-block">last name *</label>
              <input
                className="rounded overflow-hidden border-1 p-2 w-100"
                type="text"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 px-2">
              <label className="py-2 d-block">display name *</label>
              <input
                className="rounded overflow-hidden border-1 p-2 w-100"
                type="text"
              />
            </div>
          </div>
          <div className="row justify-content-between mb-3">
            <div className="col-12 col-sm-6 px-2">
              <label className="py-2 d-block">phone/mobile *</label>
              <input
                className="rounded overflow-hidden border-1 p-2 w-100"
                type="number"
              />
            </div>
            <div className="col-12 col-sm-6 px-2">
              <label className="py-2 d-block">email *</label>
              <input
                className="rounded overflow-hidden border-1 p-2 w-100"
                type="email"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <label className="mb-2">gender *</label>
              <div className="gender d-flex">
                <div className="male col-auto me-3">
                  <input type="radio" id="male" name="gender" />
                  <label htmlFor="male" className="ms-2">
                    male
                  </label>
                </div>
                <div className="female col-auto">
                  <input type="radio" id="female" name="gender" />
                  <label htmlFor="female" className="ms-2">
                    female
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="save button">
              <button type="button" className="btn btn-dark px-4 py-2">
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
