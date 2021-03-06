import React, { useEffect, useRef } from "react";
import Icon from "../../Reuseable Components/Icon/Icon";
import { getSearchResults, inputState } from "../../Store/SearchSlice";

import "./SearchSection.css";

const SearchSection = ({ data, action, sectionState }) => {
  const focusInput = useRef(null);

  const searchItemRender = () =>
    data.results.map(({ id, img, title, befourSale, afterSale }) => (
      <div className="product mb-4 pointer" key={id}>
        <div className="d-flex align-items-center">
          <div className="img rounded overflow-hidden me-4">
            <img
              src={require(`../../Components/Products/${img}`)}
              alt="img"
              width="100%"
              height="100%"
            />
          </div>
          <div className="info">
            <p className="mb-1">{title}</p>
            <div className="price">
              <span className="me-2 fw-bold">{afterSale}</span>
              <span>{befourSale}</span>
            </div>
          </div>
        </div>
      </div>
    ));

  sectionState && focusInput.current.focus();

  useEffect(() => {
    if (data.inputValue.length) {
      action(getSearchResults());
    }
  }, [data.inputValue, action]);

  return (
    <div className="searchSection">
      <form
        className="h-100 d-flex flex-column"
        onChange={({ target }) => action(inputState(target.value))}
      >
        <div className="search mb-2" onClick={(e) => e.stopPropagation()}>
          <div className="result-icon">
            <Icon prefix={"fa-solid"} icon={"fa-angle-down"} />
          </div>
          <input type="text" placeholder="search..." ref={focusInput} />
          <button
            type="reset"
            onClick={() => {
              action(inputState(""));
              focusInput.current.focus();
            }}
          >
            <Icon prefix={"fa-solid"} icon={"fa-xmark"} />
          </button>
        </div>
        {data.inputValue.length ? (
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <div className="results d-flex flex-column">
              {searchItemRender()}
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default SearchSection;
