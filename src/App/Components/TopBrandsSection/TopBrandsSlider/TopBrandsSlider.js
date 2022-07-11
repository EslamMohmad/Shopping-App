import React from "react";

import SwiperContainer from "../../../Reuseable Components/SwiperContainer/SwiperContainer";

import brands from "./TopBrandsImgs";

const TopBrandsSlider = () => {
  const brandsRender = () =>
    brands.map(({ imgSrc, name }, idx) => (
      <div className="brand" key={idx}>
        <div className="img">
          <img src={imgSrc} alt="img" width="100%" height="100%" />
        </div>
        <p className="text-center">{name}</p>
      </div>
    ));

  const responsive = {
    300: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 8,
    },
  };

  return (
    <div className="topBrandsSection">
      <h2 className="fw-bold mb-5">top brands</h2>
      <SwiperContainer
        space={30}
        pagination={false}
        navigation={true}
        center={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        responsive={responsive}
        loop={true}
      >
        {brandsRender()}
      </SwiperContainer>
    </div>
  );
};

export default TopBrandsSlider;
