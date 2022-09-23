import React from "react";

import SwiperContainer from "../../Reuseable Components/SwiperContainer/SwiperContainer";

import { useSelector, useDispatch } from "react-redux";
import { productInfoFunc } from "../../Store/ModalSlice";

const FlashSaleMinSlider = () => {
  const { flashSale } = useSelector(({ ProductsSlice }) => ProductsSlice);

  const action = useDispatch();

  const itemRender = () =>
    flashSale.map((product) => (
      <div className="sliderItem" key={product.id}>
        <div
          className="content d-flex align-items-center mb-3 mb-sm-4"
          onClick={() =>
            action(productInfoFunc({ product, name: "flashSale" }))
          }
        >
          <div className="img me-0 me-sm-4">
            <img src={require(`./../Products/${product.img}`)} alt="item" />
          </div>
          <div className="details me-0 me-sm-4">
            <p className="fw-bold fs-5 mb-1 text-center text-sm-start">
              {product.title}
            </p>
            <p className="mb-2 mb-sm-3 item-title">{product.description}</p>
            <p className="price m-0">
              <span className="afterSale fw-bold me-4">
                {product.afterSale}
              </span>
              <span className="beforeSale">{product.befourSale}</span>
            </p>
          </div>
        </div>
        <div className="itemCount d-flex justify-content-between mb-2 mb-sm-4">
          <p className="m-0">
            <span>sold : </span>
            {product.sold}
          </p>
          <p className="m-0">
            <span>available : </span>
            {product.available}
          </p>
        </div>
        <div className="progress">
          <div
            className="h-100 progress-bar w-75 bg-dark"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    ));

  const responsive = {
    768: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1401: {
      slidesPerView: 1,
    },
  };

  return (
    <SwiperContainer
      space={50}
      pagination={false}
      navigation={true}
      center={false}
      responsive={responsive}
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {itemRender()}
    </SwiperContainer>
  );
};

export default FlashSaleMinSlider;
