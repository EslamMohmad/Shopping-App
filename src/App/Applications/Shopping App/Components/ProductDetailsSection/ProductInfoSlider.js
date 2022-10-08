import React, { useState } from "react";

const ProductInfoSlider = () => {
  const [detailsSlide, setDetailsSlide] = useState({
    slideone: true,
    slidetwo: false,
    slidethree: false,
  });

  const elementHandler = (num) => {
    setDetailsSlide((prev) => {
      if (prev[`slide${num}`]) {
        return { ...prev, [`slide${num}`]: false };
      } else {
        const filter = Object.keys(prev).filter(
          (slide) => slide !== `slide${num}`
        );
        const obj = filter.map((e) => ({ [e]: false }));
        return { [`slide${num}`]: true, ...obj[0], ...obj[1] };
      }
    });
  };

  const pluseIcon = () => (
    <div className={`more-details-icon position-relative`}>
      <div className="x-bar bar position-absolute"></div>
      <div className="y-bar bar position-absolute"></div>
    </div>
  );

  return (
    <div className="productInfoSlide d-flex flex-column">
      <div
        className={`product-details py-3 ${
          detailsSlide.slideone ? "active" : ""
        } one`}
        onClick={() => elementHandler("one")}
      >
        <div className="d-flex justify-content-between">
          <h5>product details</h5>
          {pluseIcon()}
        </div>
        <div className="content">
          <p className={`m-0 my-2`}>
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </p>
        </div>
      </div>
      <div
        className={`additional-information py-3 ${
          detailsSlide.slidetwo ? "active" : ""
        } two`}
        onClick={() => elementHandler("two")}
      >
        <div className="d-flex justify-content-between">
          <h5>additional information</h5>
          {pluseIcon()}
        </div>
        <div className="content">
          <p className={`m-0 my-2`}>
            Please read the documentation carefully . We also have some online
            video tutorials regarding this issue . If the problem remains,
            Please Open a ticket in the support forum
          </p>
        </div>
      </div>
      <div
        className={`customer-review pt-3 ${
          detailsSlide.slidethree ? "active" : ""
        } three overflow-hidden`}
        onClick={() => elementHandler("three")}
      >
        <div className="d-flex justify-content-between">
          <h5>customer review</h5>
          {pluseIcon()}
        </div>
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <p className={`m-0 my-2`}>
            At first, Please check your internet connection . We also have some
            online video tutorials regarding this issue . If the problem
            remains, Please Open a ticket in the support forum.
          </p>
          <div className="rating mt-4">
            <h6>your rating</h6>
            <ul className="list-unstyled mb-0 d-flex flex-row">
              <li>★</li>
              <li>★</li>
              <li>★</li>
              <li>★</li>
              <li>★</li>
            </ul>
          </div>
          <div className="form mt-4">
            <form>
              <div className="message mb-3">
                <label htmlFor="message" className="w-100 mb-2">
                  message *{" "}
                </label>
                <textarea id="message" className="p-2 w-100"></textarea>
              </div>
              <div className="d-flex gap-3 mb-3">
                <div className="name w-50">
                  <label htmlFor="name" className="w-100 mb-2">
                    name *{" "}
                  </label>
                  <input type="text" className="p-2 w-100" />
                </div>
                <div className="email w-50">
                  <label htmlFor="email" className="w-100 mb-2">
                    email *{" "}
                  </label>
                  <input type="text" className="p-2 w-100" />
                </div>
              </div>
              <div className="save-data d-flex align-items-center mb-4">
                <input type="checkbox" id="check" className="me-3" />
                <label htmlFor="check">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <div className="submit">
                <button className="btn btn-dark p-2 px-4" type="button">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSlider;
