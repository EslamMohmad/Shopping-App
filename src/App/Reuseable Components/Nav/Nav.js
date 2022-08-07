import React from "react";

import Icon from "../../Reuseable Components/Icon/Icon";
import BackToHome from "../BackToHome/BackToHome";

import "./Nav.css";

const Nav = ({ cls }) => {
  const listsArr = [
    [
      ["gadgets", "smart wearables", "headphones"],
      ["jewellers", " fashion jewellers", "fine jewellers"],
      ["backpacks", "handbags & wallets"],
    ],
    [
      [
        "top wear",
        "T-Shirt",
        "casual shirts",
        "formal shirts",
        "blazwers & coats",
        "suits",
        "jackets",
      ],
      ["watches & wearables"],
    ],
    [
      ["footwear", "flats", "casual shoes", " heels", "boots"],
      ["sports & active wear", "clothing", "footwear", "sportts accesssories"],
    ],
    [
      [
        "western wear",
        "dresses",
        "jumpsuits",
        "tops , T-Shirts & shirts",
        "shorts & skirts",
        "shurgs",
        "blazers",
      ],
      ["plus size", "sunglasses & frames"],
    ],
    [
      ["lingerie & sleepwear", "bra", "briefs", "sleepwear"],
      [
        "belt, scarves & more",
        "make up",
        "skincare",
        "premium beauty",
        "lipsticks",
      ],
    ],
  ];

  const listsArrRender = () =>
    listsArr.map((col, idx) => (
      <div className="column" key={idx}>
        {col.map((row, ind) => (
          <ul className="rowList" key={ind}>
            {row.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        ))}
      </div>
    ));

  return (
    <ul
      className={`parentNav ${cls} m-0 d-flex h-100`}
      style={{ listStyle: "none" }}
    >
      <li className="navItem">
        <p className="mb-0 d-flex justify-content-between align-items-center h-100">
          <BackToHome>home</BackToHome>
        </p>
        <span></span>
      </li>
      <li className="navItem">
        <p className="mb-0 d-flex justify-content-between align-items-center h-100">
          <span className="me-1">men wear</span>
          <Icon prefix={"fa-solid"} icon={"fa-angle-down"} />
        </p>
        <div className="bar d-none d-lg-block">
          <span></span>
        </div>
        <div className="weraList">{listsArrRender()}</div>
      </li>
      <li className="navItem">
        <p className="mb-0 d-flex justify-content-between align-items-center h-100">
          <span className="me-1">women wear</span>
          <Icon prefix={"fa-solid"} icon={"fa-angle-down"} />
        </p>
        <div className="bar d-none d-lg-block">
          <span></span>
        </div>
        <div className="weraList">{listsArrRender()}</div>
      </li>
      <li className="navItem">
        <p className="mb-0 d-flex justify-content-between align-items-center h-100">
          shop
        </p>
        <span></span>
      </li>
    </ul>
  );
};

export default Nav;
