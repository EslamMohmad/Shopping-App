import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useScrollToTop from "./../../Hooks/useScrollToTop";

import {
  productData,
  getProductDetailsFromURLFunc,
} from "../../Store/ProductsSlice";

import ProductImg from "./../../Reuseable Components/ProductDetails/ProductImg";
import ProductDescription from "./../../Reuseable Components/ProductDetails/ProductDescription";

import SwiperContainer from "./../../Reuseable Components/SwiperContainer/SwiperContainer";

import "./ProductDetailsSection.css";

const ProductDetailsSection = () => {
  const [detailsSlide, setDetailsSlide] = useState({
    slideone: true,
    slidetwo: false,
    slidethree: false,
  });
  const { productViewDetailstState, bestSellers, newArrivals } = useSelector(
    ({ ProductsSlice }) => ProductsSlice
  );

  const action = useDispatch();

  if (!productViewDetailstState) {
    action(productData(true)); //calling API
    // action(getProductDetailsFromURLFunc({ targetDetails }));
  }

  const { id: productID } = useParams();

  const targetDetails = [...bestSellers, ...newArrivals].filter(
    (item) => item.id === +productID
  )[0];

  useScrollToTop();

  const responsive = {
    300: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  };

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
    <div className="container-fluid px-0 mt-5">
      <div className="d-flex row mx-0 px-0 justify-content-evenly productDetailsSection">
        <div className="col-auto col-xl-5 col-xxl-6 px-0 imgs position-sticky">
          <SwiperContainer
            space={16}
            center={false}
            pagination={{ clickable: true }}
            navigation={false}
            responsive={responsive}
            autoplay={false}
            loop={true}
          >
            <ProductImg />
            <ProductImg />
            <ProductImg />
          </SwiperContainer>
        </div>
        <div className="col-xl-5 col-xxl-4 px-0">
          <ProductDescription targetProduct={targetDetails} />
          <div className="productInformation mb-5">
            <p>
              <span className="fw-bold">SKU : </span>
              <span>N/A</span>
            </p>
            <p>
              <span className="fw-bold">category : </span>
              <span>Kids</span>
            </p>
            <p className="mb-0">
              <span className="fw-bold">tags : </span>
              <span>casual, cotton, red</span>
            </p>
          </div>
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
                  Our Customer Experience Team is available 7 days a week and we
                  offer 2 ways to get in contact.Email and Chat . We try to
                  reply quickly, so you need not to wait too long for a
                  response!.
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
                  Please read the documentation carefully . We also have some
                  online video tutorials regarding this issue . If the problem
                  remains, Please Open a ticket in the support forum
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
                  At first, Please check your internet connection . We also have
                  some online video tutorials regarding this issue . If the
                  problem remains, Please Open a ticket in the support forum.
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
                        Save my name, email, and website in this browser for the
                        next time I comment.
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
