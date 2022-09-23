import React from "react";

const ASide = ({ cls, children }) => {
  return (
    <div className={`${cls}`} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

export default ASide;
