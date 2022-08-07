import { useEffect, useState } from "react";

const useCLassRemoveSmoothly = (prop, num, activeCLS, notActiveCLS) => {
  const [state, setState] = useState("");

  const time = num;

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setState(() => (prop ? activeCLS : notActiveCLS));
      },
      prop ? 0 : time
    );

    return () => clearTimeout(timer);
  }, [state, prop, time, activeCLS, notActiveCLS]);

  return state;
};

export default useCLassRemoveSmoothly;
