import React from "react";
import { useSelector } from "react-redux/es/exports";

const ProductImg = ({ width, targetImg }) => {
  const {
    productInfo: { product, name },
  } = useSelector(({ ProductsSlice }) => ProductsSlice);

  const imgStylesHandler = () =>
    name === "bestSellers" || name === "newArrivals"
      ? { objectFit: "cover", width: "100%", height: "100%" }
      : { objectFit: "contain", width: "75%", height: "75%" };

  console.log(name);

  return (
    <div
      className={`img ${
        width || "w-auto h-100"
      } d-flex justify-content-center align-items-center`}
    >
      {(product.img || (targetImg ? targetImg.img : "")) && (
        <img
          src={require(`../../Components/Products/${
            product.img || (targetImg ? targetImg.img : "")
          }`)}
          alt="img"
          style={imgStylesHandler()}
        />
      )}
    </div>
  );
};

export default ProductImg;
