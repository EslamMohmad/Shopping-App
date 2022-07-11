import React, { useState, Fragment } from "react";

import english from "./countriesImgs/eng.png";
import arabic from "./countriesImgs/ar.png";
import spain from "./countriesImgs/es.png";
import china from "./countriesImgs/zh.png";

import Icon from "../../../Reuseable Components/Icon/Icon";

import "./Countries.css";

const CountriesBtn = () => {
  const [country, setCountry] = useState({
    state: false,
    current: "english-E",
    img: english,
  });

  const countriesArr = [
    {
      country: "Amrica",
      language: "english-E",
      flagSrc: english,
    },
    {
      country: "Saudi",
      language: "arabic-ar",
      flagSrc: arabic,
    },
    {
      country: "Spain",
      language: "spanish-sp",
      flagSrc: spain,
    },
    {
      country: "China",
      language: "chinese-zh",
      flagSrc: china,
    },
  ];

  window.onclick = () => setCountry((prev) => ({ ...prev, state: false }));

  const coutriseRenderFunc = () => {
    return countriesArr.map((country, idx) => (
      <li
        className="p-2"
        key={idx}
        onClick={() =>
          setCountry((_) => ({
            state: false,
            current: country.language,
            img: country.flagSrc,
          }))
        }
      >
        <div className="countryInfo">
          <img className="me-2" src={country.flagSrc} alt="eng" width="25px" />
          <span className="current">{country.language}</span>
        </div>
      </li>
    ));
  };

  return (
    <Fragment>
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setCountry((prev) => ({
            ...prev,
            state: !prev.state,
          }));
        }}
        className="country d-flex align-items-center justify-content-between"
      >
        <div className="countryInfo">
          <img className="me-2" src={country.img} alt="eng" width="25px" />
          <span className="current me-2">{country.current}</span>
        </div>
        <Icon prefix={"fa-solid"} icon={"fa-angle-down"} />
      </button>
      {country.state && (
        <div className="countryList">
          <ul className="list-unstyled m-0">{coutriseRenderFunc()}</ul>
        </div>
      )}
    </Fragment>
  );
};

export default CountriesBtn;
