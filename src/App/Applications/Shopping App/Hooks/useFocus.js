import { useRef } from "react";

const useFocus = () => {
  const htmlElementRef = useRef(null);
  const setFocus = () =>
    htmlElementRef.current && htmlElementRef.current.focus();
  return [htmlElementRef, setFocus];
};

export default useFocus;
