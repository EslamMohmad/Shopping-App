import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getFilterdProducts } from "../../Store/ProductsSlice";
import Icon from "./../../Reuseable Components/Icon/Icon";
import BackToHome from "./../../Reuseable Components/BackToHome/BackToHome";
import "./AsideSection.css";

const AsideSection = () => {
  const tagsObjects = {
    category: [],
    brands: [],
    prices: [],
    colors: [],
  };

  const [tags, setTages] = useState(tagsObjects);

  const action = useDispatch();

  const tagsStateHandler = (input) => {
    if (input.checked) {
      setTages((prev) => ({
        ...prev,
        [input.name]: [...prev[input.name], input.id],
      }));
    } else {
      setTages((prev) => {
        const filteredArr = prev[input.name].filter((tag) => tag !== input.id);
        return { ...prev, [input.name]: filteredArr };
      });
    }
  };

  const removeTagHandler = (tag, tagType) =>
    setTages((prev) => {
      const filteredArr = prev[tagType].filter((t) => t !== tag);
      return { ...prev, [tagType]: filteredArr };
    });

  const tagsRenderHandler = () =>
    Object.values(tags).map((tagArr, idx) =>
      tagArr.map((tag, i) => (
        <div
          key={i}
          className="tag p-2 border rounded me-1 mb-1 d-inline-flex justify-content-between align-items-center"
          type={Object.keys(tags)[idx]}
        >
          <span className="me-2" style={{ fontSize: "13px" }}>
            {tag}
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => removeTagHandler(tag, Object.keys(tags)[idx])}
          >
            <Icon icon={"fa-xmark"} prefix={"fa-solid"} />
          </span>
        </div>
      ))
    );

  const sectionRender = (array, sectionName) => {
    return array.map((item, index) => (
      <div className="mb-3 d-flex align-items-center parent" key={index}>
        <input
          className="rounded"
          type="checkbox"
          id={item}
          name={sectionName}
          style={{ cursor: "pointer" }}
          onChange={({ target }) => tagsStateHandler(target)}
          checked={tags[sectionName].includes(item)}
          value={item}
        />
      </div>
    ));
  };

  useEffect(() => {
    action(getFilterdProducts(tags));
  }, [tags, action]);

  const categoryArr = [
    "women",
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
    "fashadil",
  ];

  const priceArr = [
    "under $6",
    "$6 to $10",
    "$10 to $15",
    "$15 to $20",
    "$20 to $50",
    "$50 to $100",
    "$100 to $200",
    "over $200",
  ];

  const colorsArr = [
    "black",
    "blue",
    "green",
    "yellow",
    "red",
    "brown",
    "gray",
    "white",
  ].map((color, index) => (
    <div className="mb-2 d-flex align-items-center parent" key={index}>
      <input
        className="rounded"
        type="checkbox"
        id={color}
        name="colors"
        style={{ cursor: "pointer" }}
        onChange={({ target }) => tagsStateHandler(target)}
        checked={tags.colors.includes(color)}
      />
      <label htmlFor={color} style={{ cursor: "pointer" }}>
        <span className="color mx-2" style={{ backgroundColor: color }}></span>
        {color}
      </label>
    </div>
  ));

  return (
    <div className="asideSection">
      <div className="d-flex links flex-row mb-4">
        <BackToHome>
          <p className="mb-0 px-0">home</p>
        </BackToHome>
        <span className="px-0 mx-2">/</span>
        <Link to="/Shopping-App/products">
          <p className="mb-0 px-0">products</p>
        </Link>
      </div>
      <div className="sectionsFilter d-flex flex-column border-bottom pb-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">filter</h5>
          <span
            style={{ fontSize: "13px", cursor: "pointer" }}
            onClick={() => setTages(tagsObjects)}
          >
            clear all
          </span>
        </div>
        <div className="sectionsTags">{tagsRenderHandler()}</div>
      </div>
      <div className="category border-bottom pb-4 mb-4">
        <h5 className="mb-4">category</h5>
        <div>{sectionRender(categoryArr, "category")}</div>
      </div>
      <div className="brands border-bottom pb-4 mb-4">
        <h5 className="mb-4">brands</h5>
        <div>{sectionRender(brandsArr, "brands")}</div>
      </div>
      <div className="prices border-bottom pb-4 mb-4">
        <h5 className="mb-4">price</h5>
        <div>{sectionRender(priceArr, "prices")}</div>
      </div>
      <div className="colors border-bottom pb-4">
        <h5 className="mb-4">colors</h5>
        <div>{colorsArr}</div>
      </div>
    </div>
  );
};

export default AsideSection;
