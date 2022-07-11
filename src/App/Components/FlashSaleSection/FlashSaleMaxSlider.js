import React from "react";

import img1 from "./Imgs/lg-img-1.jpg";
import img2 from "./Imgs/lg-img-2.jpg";
import img3 from "./Imgs/lg-img-3.jpg";
import SwiperContainer from "../../Reuseable Components/SwiperContainer/SwiperContainer";

const FlashSaleMaxSlider = () => {
  const imgsArr = [img1, img2, img3];

  const imgRender = () =>
    imgsArr.map((img, idx) => (
      <img
        className="hoverEffect"
        key={idx}
        width="100%"
        src={img}
        alt={`img${idx}`}
      />
    ));

  const responsive = {
    567: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  };

  return (
    <SwiperContainer
      space={16}
      pagination={false}
      navigation={true}
      center={false}
      responsive={responsive}
      autoplay={{
        delay: 2700,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {imgRender()}
    </SwiperContainer>
  );
};

export default FlashSaleMaxSlider;
