import React from "react";

import Icon from "../../Reuseable Components/Icon/Icon";

const SoicalIcons = ({ cls }) => {
  const iconsClass = [
    { prefix: "fa-brands", icon: "fa-facebook-f" },
    { prefix: "fa-brands", icon: " fa-twitter" },
    { prefix: "fa-brands", icon: " fa-youtube" },
    { prefix: "fa-brands", icon: " fa-instagram" },
  ];

  const iconsRender = () =>
    iconsClass.map(({ prefix, icon }, idx) => (
      <a href="./" key={idx}>
        <Icon prefix={prefix} icon={icon} />
      </a>
    ));

  return (
    <div className={`${cls} d-flex justify-content-between border-top`}>
      {iconsRender()}
    </div>
  );
};

export default SoicalIcons;
