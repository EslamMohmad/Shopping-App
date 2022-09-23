import React from "react";

const ShippingAddressFrom = () => {
  return (
    <form className="shippingAddressFrom">
      <h3 className="fw-bold mb-4">shipping address</h3>
      <div className="row justify-content-between mb-3">
        <div className="col-12 col-xl-6 px-2">
          <label className="py-2 d-block" htmlFor="checkout-firstName">
            first name *
          </label>
          <input
            className="rounded overflow-hidden border-1 p-2 w-100"
            type="text"
            id="checkout-firstName"
          />
        </div>
        <div className="col-12 col-xl-6 px-2">
          <label className="py-2 d-block" htmlFor="checkout-lastName">
            last name *
          </label>
          <input
            className="rounded overflow-hidden border-1 p-2 w-100"
            type="text"
            id="checkout-lastName"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 px-2">
          <label className="py-2 d-block" htmlFor="checkout-address">
            address *
          </label>
          <input
            className="rounded overflow-hidden border-1 p-2 w-100"
            type="text"
            id="checkout-address"
          />
        </div>
      </div>
      <div className="row justify-content-between mb-3">
        <div className="col-12 col-xl-6 px-2">
          <label className="py-2 d-block" htmlFor="checkout-phone">
            phone/mobile *
          </label>
          <input
            className="rounded overflow-hidden border-1 p-2 w-100"
            type="number"
            id="checkout-phone"
          />
        </div>
        <div className="col-12 col-xl-6 px-2">
          <label className="py-2 d-block" htmlFor="checkout-email">
            email *
          </label>
          <input
            className="rounded overflow-hidden border-1 p-2 w-100"
            type="email"
            id="checkout-email"
          />
        </div>
      </div>
      <div className="row justify-content-between mb-3">
        <div className="col-12 col-xl-6 px-2">
          <label className="py-2 d-block" htmlFor="checkout-city/town">
            city/town *
          </label>
          <input
            className="rounded overflow-hidden border-1 p-2 w-100"
            type="number"
            id="checkout-city/town"
          />
        </div>
        <div className="col-12 col-xl-6 px-2">
          <label className="py-2 d-block" htmlFor="checkout-postcode">
            postcode *
          </label>
          <input
            className="rounded overflow-hidden border-1 p-2 w-100"
            type="email"
            id="checkout-postcode"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 px-2">
          <input
            className="rounded overflow-hidden w-auto border-1 p-2 me-3"
            type="checkbox"
            id="save-info"
            value="save the information for next time"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 px-2">
          <label htmlFor="checkout-order-notes" className="py-2 d-block">
            Order Notes (Optional)
          </label>
          <textarea
            id="checkout-order-notes"
            className="w-100 rounded"
            placeholder="notes about your order, e.g. special notes from delivery"
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="save button px-2">
          <button type="button" className="btn btn-dark p-4 py-2">
            place order
          </button>
        </div>
      </div>
    </form>
  );
};

export default ShippingAddressFrom;
