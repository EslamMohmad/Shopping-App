import React from "react";
import Icon from "../../Reuseable Components/Icon/Icon";

const FiltersButton = () => {
  return (
    <button className="border rounded p-2 px-3">
      <Icon prefix="fa-solid" icon="fa-sliders" />
      <span className="ms-2">filters</span>
    </button>
  );
};

//<i class="fa-solid fa-sliders"></i>

export default FiltersButton;
