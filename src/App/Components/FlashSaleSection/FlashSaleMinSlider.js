import React from "react";

import SwiperContainer from "../../Reuseable Components/SwiperContainer/SwiperContainer";

import item1 from "./Imgs/sm-img-1.png";
import item2 from "./Imgs/sm-img-2.png";
import item3 from "./Imgs/sm-img-3.png";

const FlashSaleMinSlider = () => {
  const Items = [
    {
      id: 0,
      name: "REDQ steel watch",
      src: item1,
      title: "the black celebrate",
      befourSale: 120.0,
      afterSale: 80.0,
      sold: 180,
      available: 140,
    },
    {
      id: 1,
      name: "wayfarer sunglasses",
      src: item2,
      title: "our optical engineers ",
      befourSale: 25.0,
      afterSale: 20.0,
      sold: 120,
      available: 147,
    },
    {
      id: 2,
      name: "nike shoes",
      src: item3,
      title: "nike 2022 black white",
      befourSale: 80.0,
      afterSale: 50.0,
      sold: 120,
      available: 147,
    },
  ];

  const itemRender = () =>
    Items.map((item) => (
      <div className="sliderItem" key={item.id}>
        <div className="content d-flex align-items-center mb-3 mb-sm-4">
          <div className="img me-0 me-sm-4">
            <img src={item.src} alt="item" />
          </div>
          <div className="details me-0 me-sm-4">
            <p className="fw-bold fs-5 mb-1 text-center text-sm-start">
              {item.name}
            </p>
            <p className="mb-2 mb-sm-3 item-title">{item.title}</p>
            <p className="price m-0">
              <span className="afterSale fw-bold me-4">
                ${item.afterSale}.00
              </span>
              <span className="beforeSale fw-light">
                <s>${item.befourSale}.00</s>
              </span>
            </p>
          </div>
        </div>
        <div className="itemCount d-flex justify-content-between mb-2 mb-sm-4">
          <p className="m-0">
            <span>sold : </span>
            {item.sold}
          </p>
          <p className="m-0">
            <span>available : </span>
            {item.available}
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
