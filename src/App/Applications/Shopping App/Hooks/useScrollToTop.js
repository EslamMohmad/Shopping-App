import { useMemo } from "react";

const useScrollToTop = () => {
  useMemo(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
};

export default useScrollToTop;
