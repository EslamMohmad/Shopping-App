import React, { useEffect } from "react";
import Icon from "../../Reuseable Components/Icon/Icon";
import { getSearchResults, inputState } from "../../Store/SearchSlice";
import useFocus from "../../Hooks/useFocus";
import "./SearchSection.css";
import { getSearchedProduct } from "../../Store/ProductsSlice";
import { overLayFunc } from "../../Store/ModalSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchSection = ({ data, action, sectionState }) => {
  const [inputRef, setInputRef] = useFocus();

  const { overLayState } = useSelector(({ ModalSlice }) => ModalSlice);

  const searchItemRender = () =>
    data.results.map((product) => (
      <Link
        to={`/Shopping-App/products/product/${product.id}`}
        className="product mb-4 pointer"
        key={product.id}
        onClick={() => {
          action(overLayFunc());
          action(getSearchedProduct({ product }));
        }}
      >
        <div className="d-flex align-items-center">
          <div className="img rounded overflow-hidden me-4">
            <img
              src={require(`../../Components/Products/${product.img}`)}
              alt="img"
              width="100%"
              height="100%"
            />
          </div>
          <div className="info">
            <p className="mb-1">{product.title}</p>
            <div className="price">
              <span className="me-2 fw-bold">{product.afterSale}</span>
              <span>{product.befourSale}</span>
            </div>
          </div>
        </div>
      </Link>
    ));

  useEffect(() => {
    const depounce = setTimeout(() => {
      action(getSearchResults(inputRef.current.value));
    }, 1500);

    !sectionState && (inputRef.current.value = "");

    return () => clearTimeout(depounce);
  }, [data.inputValue, action, inputRef, sectionState, overLayState]);

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
          <input
            type="text"
            placeholder="search..."
            ref={inputRef}
            focus={`${sectionState}`}
          />
          <button
            type="reset"
            onClick={() => {
              action(inputState(""));
              setInputRef();
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
