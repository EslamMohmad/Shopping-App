import React from "react";
import { useSelector } from "react-redux/es/exports";

const ProductImg = ({ width, srcImg }) => {
  const { img } = useSelector(
    ({ ProductsSlice }) => ProductsSlice.productInfo.product
  );

  return (
    <div className={`img ${width || "w-auto h-100"}`}>
      {(img || srcImg) && (
        <img
          src={require(`../../Components/Products/${img || srcImg}`)}
          alt="img"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default ProductImg;
