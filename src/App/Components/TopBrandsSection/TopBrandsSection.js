import React from "react";
import TopBrandsSlider from "./TopBrandsSlider/TopBrandsSlider";

import "./TopBrandsSlider.css";

const TopBrandsSection = () => {
  const bigImgsArr = [
    {
      imgSrc: require("./TopBrandsPics/maximg-1.jpg"),
      heading: "New Spring Knits",
      p: "Endlessly versatile new styles that say yes to spring. The season's looking bright.",
    },
    {
      imgSrc: require("./TopBrandsPics/maximg-2.jpg"),
      heading: "Down To The Core",
      p: "Endlessly versatile new styles that say yes to spring. The season’s looking bright.",
    },
    {
      imgSrc: require("./TopBrandsPics/maximg-3.jpg"),
      heading: "New Winter Knits",
      p: "Endlessly versatile new styles that say yes to spring. The season's looking bright.",
    },
  ];

  const smallImgsArr = [
    {
      imgSrc: require("./TopBrandsPics/minimg-1.jpg"),
      heading: "Guaranteed Savings",
      p: "If you don't make your membership fee in savings, we'll refund the difference",
    },
    {
      imgSrc: require("./TopBrandsPics/minimg-2.jpg"),
      heading: "Try it risk-free",
      p: "If you don't make your membership fee in savings, we'll refund the difference",
    },
    {
      imgSrc: require("./TopBrandsPics/minimg-3.jpg"),
      heading: "Super Fast Delivery",
      p: "If you don't make your membership fee in savings, we'll refund the difference",
    },
    {
      imgSrc: require("./TopBrandsPics/minimg-4.jpg"),
      heading: "1000+ products priced at cost",
      p: "If you don't make your membership fee in savings, we'll refund the difference",
    },
  ];

  const sectionRender = (array, num) =>
    array.map(({ imgSrc, heading, p }, idx) => (
      <div
        className={`col-${
          12 / array.length - num
        } parent px-0 justify-content-between rounded overflow-hidden d-flex flex-column align-items-center`}
        key={idx}
      >
        <div className="img position-relative">
          <img src={imgSrc} alt="img" width="100%" />
          <div className="view-collection position-absolute overflow-hidden rounded-3">
            <button className="btn btn-light w-100 h-100">
              view collection
            </button>
          </div>
        </div>
        <div className="content">
          <h2 className="fw-bold text-center my-3 my-xl-4">{heading}</h2>
          <p className="txt text-center mb-0">{p}</p>
        </div>
      </div>
    ));

  return (
    <div className="topBrandsSection mb-5">
      <div className="row mx-0 mb-5">
        <TopBrandsSlider />
      </div>
      <div className="row mx-0 flex-nowrap max justify-content-between mb-5">
        {sectionRender(bigImgsArr, 1)}
      </div>
      <div className="row min border rounded overflow-hidden">
        {sectionRender(smallImgsArr, 0)}
      </div>
    </div>
  );
};

export default TopBrandsSection;
