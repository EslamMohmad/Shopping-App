import React from "react";
import Icon from "../../Reuseable Components/Icon/Icon";
import SubscribeSection from "../SubscribeSection/SubscribeSection";

import "./FooterSection.css";

const FooterSection = () => {
  const sectionsListsObj = {
    social: [
      <div>
        <span className="me-2">
          {<Icon prefix={"fa-brands"} icon={"fa-facebook-f"} />}
        </span>{" "}
        facebook
      </div>,
      <div>
        <span className="me-2">
          {<Icon prefix={"fa-brands"} icon={"fa-twitter"} />}
        </span>{" "}
        twitter
      </div>,
      <div>
        <span className="me-2">
          {<Icon prefix={"fa-brands"} icon={"fa-instagram"} />}
        </span>{" "}
        instagram
      </div>,
      <div>
        <span className="me-2">
          {<Icon prefix={"fa-brands"} icon={"fa-youtube"} />}
        </span>{" "}
        youtube
      </div>,
    ],
    contact: [
      "contact us",
      "eslammohmad@gamil.com",
      "eslam@outlook.com",
      "call us : +1 123 546 789",
    ],
    about: ["support us", "customer support", "about us", "copyright"],
    "customer care": [
      "FAQ & helps",
      "shopping & delivery",
      "return & exchanges",
    ],
    "out information": [
      "privacy policy update",
      "terms & conditions",
      "return policy",
      "site map",
    ],
    "top category": ["men's wear", "women's wear", "kid's wear", "sports wear"],
  };

  const listsRender = () =>
    Object.keys(sectionsListsObj).map((main, idx) => (
      <div className="section w-auto px-0" key={idx}>
        <p className="sectionName mb-4">{main}</p>
        <ul className="list-unstyled mb-0">
          {sectionsListsObj[main].map((li, i) => (
            <li className="mb-3" key={i}>
              {li}
            </li>
          ))}
        </ul>
      </div>
    ));

  return (
    <div className="footerSection mt-5">
      <div className="row mx-0 py-3 py-lg-5">
        <SubscribeSection />
      </div>
      <div className="py-3 py-lg-5 row flex-nowrap mx-0 siteMap justify-content-evenly">
        {listsRender()}
      </div>
      <div className="copyright border-top py-3 py-lg-2 d-flex justify-content-between align-items-center">
        <p className="mb-0">
          copyright © 2022 <b>eslam.Inc</b> all copyright reserved
        </p>
        <ul className="d-flex list-unstyled mb-0 align-items-center">
          <li>
            <img src={require("./FooterSectionImgs/method-1.jpg")} alt="img" />
          </li>
          <li>
            <img src={require("./FooterSectionImgs/method-2.jpg")} alt="img" />
          </li>
          <li>
            <img src={require("./FooterSectionImgs/method-3.jpg")} alt="img" />
          </li>
          <li>
            <img src={require("./FooterSectionImgs/method-4.jpg")} alt="img" />
          </li>
          <li>
            <img src={require("./FooterSectionImgs/method-5.jpg")} alt="img" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
