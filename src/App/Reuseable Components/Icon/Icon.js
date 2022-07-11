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
  faXmark,
  faCaretDown,
  faMagnifyingGlass,
  faCartShopping,
  faHouse,
  faUser,
  faBagShopping,
  faLink,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faAngleDown,
  faXmark,
  faCaretDown,
  faMagnifyingGlass,
  faCartShopping,
  faHouse,
  faGoogle,
  faUser,
  faBagShopping,
  faLink,
  faCommentDots
);

const Icon = ({ prefix, icon }) => {
  return <FontAwesomeIcon icon={`${prefix} ${icon}`} />;
};

export default Icon;
