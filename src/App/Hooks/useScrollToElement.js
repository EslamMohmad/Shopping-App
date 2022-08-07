import { useEffect, useMemo } from "react";

import { useDispatch } from "react-redux/es/exports";

import { scrollToElement } from "../Store/ModalSlice";

const useScrollToElement = (elementRef) => {
  useEffect(() => {
    // action(scrollToElement(elementRef.current.offsetTop));
    return elementRef.current.offsetTop;
  });

  // useMemo(() => {
  //   const option = {
  //     top: elementPoitionState - 95,
  //     left: 0,
  //     behavior: "smooth",
  //   };
  //   document.body.scroll(option);
  //   document.documentElement.scroll(option);
  // }, [elementPoitionState]);
};

export default useScrollToElement;
