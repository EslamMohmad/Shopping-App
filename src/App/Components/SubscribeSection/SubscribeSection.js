import React from "react";

const SubscribeSection = () => {
  return (
    <div className="subscribeSection py-5 px-0 d-flex justify-content-between align-items-center">
      <div className="col-auto text">
        <h3 className="fw-bold mb-3">get export tips in your inbox</h3>
        <p className="mb-0">subscribe to our newsletter and stay updated</p>
      </div>
      <div className="col-lg-6 col-xxl-4 subscribeForm">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input d-flex">
            <input
              className="w-100 p-3 border"
              type="email"
              placeholder="write your email here"
            />
            <button type="submit" className="p-2 px-4 ms-2 btn btn-dark">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
