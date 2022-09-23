import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import {
  faAngleDown,
  faAngleUp,
  faXmark,
  faCaretDown,
  faMagnifyingGlass,
  faCartShopping,
  faHouse,
  faUser,
  faBagShopping,
  faLink,
  faCommentDots,
  faSliders,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faAngleDown,
  faXmark,
  faCaretDown,
  faAngleUp,
  faMagnifyingGlass,
  faCartShopping,
  faHouse,
  faGoogle,
  faUser,
  faBagShopping,
  faLink,
  faCommentDots,
  faSliders,
  faArrowLeft
);

const Icon = ({ prefix, icon }) => {
  return <FontAwesomeIcon icon={`${prefix} ${icon}`} />;
};

export default Icon;
