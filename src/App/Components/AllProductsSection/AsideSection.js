import React from "react";
import Icon from "./../../Reuseable Components/Icon/Icon";

import "./AsideSection.css";

const AsideSection = () => {
  const categoryArr = [
    "woman",
    "man",
    "watch",
    "kids",
    "sports",
    "sunglass",
    "bags",
    "sneakers",
  ];

  const brandsArr = [
    "shovia",
    "fusion",
    "hunter shoes",
    "club shoes",
    "hoppister",
    "blaza fashion",
    "elegance",
    "fashadill",
  ];

  const priceArr = [
    "under $50",
    "$50 to $100",
    "$100 to $150",
    "$150 to $200",
    "$200 to $300",
    "$300 to $500",
    "$500 to $1000",
    "over $1000",
  ];

  const sectionRender = (array, sectionName) => {
    return array.map((item, index) => (
      <div className="mb-2 d-flex align-items-center parent" key={index}>
        <input
          className="me-3 rounded"
          type="checkbox"
          id={item}
          name={sectionName}
          style={{ cursor: "pointer" }}
        />
        <label htmlFor={item} style={{ cursor: "pointer" }}>
          {item}
        </label>
      </div>
    ));
  };

  const colorsArr = [
    "black",
    "blue",
    "green",
    "red",
    "brown",
    "gray",
    "white",
  ].map((color, index) => (
    <div className="mb-2 d-flex align-items-center parent" key={index}>
      <input className="rounded" type="checkbox" id={color} name="colors" />
      <label htmlFor={color} style={{ cursor: "pointer" }}>
        <span className="color mx-2" style={{ backgroundColor: color }}></span>
        {color}
      </label>
    </div>
  ));

  return (
    <div className="asideSection">
      <div className="d-flex links flex-row mb-4">
        <p className="mb-0 px-0">home</p>
        <span className="px-0 mx-2">/</span>
        <p className="mb-0 px-0">products</p>
      </div>
      <div className="sectionsFilter d-flex flex-column border-bottom pb-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">filter</h5>
          <span style={{ fontSize: "13px", cursor: "pointer" }}>clear all</span>
        </div>
        <div className="sectionsTags">
          <div className="tag p-2 border rounded me-2 mb-2 d-inline-flex justify-content-between align-items-center">
            <span className="me-2" style={{ fontSize: "13px" }}>
              women-wear
            </span>
            <span style={{ cursor: "pointer" }}>
              <Icon icon={"fa-xmark"} prefix={"fa-solid"} />
            </span>
          </div>
        </div>
      </div>
      <div className="category border-bottom pb-4 mb-4">
        <h5 className="mb-4">category</h5>
        <div>{sectionRender(categoryArr, "category")}</div>
      </div>
      <div className="brands border-bottom pb-4 mb-4">
        <h5 className="mb-4">brands</h5>
        <div>{sectionRender(brandsArr, "brands")}</div>
      </div>
      <div className="price border-bottom pb-4 mb-4">
        <h5 className="mb-4">price</h5>
        <div>{sectionRender(priceArr, "price")}</div>
      </div>
      <div className="colors border-bottom pb-4">
        <h5 className="mb-4">colors</h5>
        <div>{colorsArr}</div>
      </div>
    </div>
  );
};

export default AsideSection;
