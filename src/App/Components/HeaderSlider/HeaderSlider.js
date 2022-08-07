import React from "react";

import SwiperContainer from "../../Reuseable Components/SwiperContainer/SwiperContainer";

import imgs from "./HeaderSliderImgs";

import "./HeaderSlider.css";

const HeaderSlider = () => {
  const bannersRender = () =>
    Object.values(imgs).map((img, idx) => (
      <img key={idx} src={img} width="100%" alt={`img${idx}`} />
    ));

  const responsive = {
    1401: {
      slidesPerView: 1.065,
    },
  };

  return (
    <div className="headerSlider mb-3 mb-xxl-5 container-fluid px-0">
      <SwiperContainer
        space={16}
        center={true}
        pagination={{ clickable: true }}
        navigation={false}
        responsive={responsive}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {bannersRender()}
      </SwiperContainer>
    </div>
  );
};

export default HeaderSlider;
