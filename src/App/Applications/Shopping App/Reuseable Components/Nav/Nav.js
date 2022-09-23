import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Icon from "../../Reuseable Components/Icon/Icon";
import BackToHome from "../BackToHome/BackToHome";

import "./Nav.css";
import { overLayFunc } from "../../Store/ModalSlice";

const Nav = ({ cls }) => {
  const [listState, setListState] = useState({
    menWearsState: false,
    womenWearsState: false,
  });

  const action = useDispatch();

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
              <Link
                to="/Shopping-App/products"
                key={i}
                onClick={() => cls === "asideList" && action(overLayFunc())}
              >
                <li>{li}</li>
              </Link>
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
        <p
          className="mb-0 d-flex justify-content-between align-items-center h-100"
          onClick={() => cls === "asideList" && action(overLayFunc())}
        >
          <BackToHome>home</BackToHome>
        </p>
        <span></span>
      </li>
      <li
        className="navItem"
        style={{ cursor: "pointer" }}
        onClick={() =>
          cls === "asideList" &&
          setListState((prev) => ({
            menWearsState: !prev.menWearsState,
            womenWearsState: false,
          }))
        }
        onMouseEnter={() => {
          return (
            cls === "navLists" &&
            setListState(() => ({
              menWearsState: true,
              womenWearsState: false,
            }))
          );
        }}
        onMouseLeave={() =>
          cls === "navLists" &&
          setListState(() => ({
            menWearsState: false,
            womenWearsState: false,
          }))
        }
      >
        <p
          className={`mb-0 d-flex justify-content-between align-items-center h-100  ${
            listState.menWearsState ? "active" : false
          }`}
        >
          <span className="me-1">men wear</span>
          <Icon prefix={"fa-solid"} icon={"fa-angle-down"} />
        </p>
        <div className="bar d-none d-lg-block">
          <span></span>
        </div>
        <div
          className={`weraList ${listState.menWearsState ? "active" : false}`}
        >
          {listsArrRender()}
        </div>
      </li>
      <li
        className="navItem"
        style={{ cursor: "pointer" }}
        onClick={() =>
          cls === "asideList" &&
          setListState((prev) => ({
            menWearsState: false,
            womenWearsState: !prev.womenWearsState,
          }))
        }
        onMouseEnter={() =>
          cls === "navLists" &&
          setListState(() => ({
            menWearsState: false,
            womenWearsState: true,
          }))
        }
        onMouseLeave={() =>
          cls === "navLists" &&
          setListState(() => ({
            menWearsState: false,
            womenWearsState: false,
          }))
        }
      >
        <p
          className={`mb-0 d-flex justify-content-between align-items-center h-100 ${
            listState.womenWearsState ? "active" : false
          }`}
        >
          <span className="me-1">women wear</span>
          <Icon prefix={"fa-solid"} icon={"fa-angle-down"} />
        </p>
        <div className="bar d-none d-lg-block">
          <span></span>
        </div>
        <div
          className={`weraList ${listState.womenWearsState ? "active" : false}`}
        >
          {listsArrRender()}
        </div>
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

export default React.memo(Nav);
