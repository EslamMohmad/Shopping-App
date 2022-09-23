import React from "react";

import img1 from "./Imgs/SBG-1.jpg";
import img2 from "./Imgs/SBG-2.jpg";
import img3 from "./Imgs/SBG-3.jpg";
import img4 from "./Imgs/SBG-4.jpg";
import img5 from "./Imgs/SBG-5.jpg";
import img6 from "./Imgs/SBG-6.jpg";
import img7 from "./Imgs/SGB-7.jpg";
import img8 from "./Imgs/SBG-8.jpg";
import SwiperContainer from "../../Reuseable Components/SwiperContainer/SwiperContainer";
import Icon from "../../Reuseable Components/Icon/Icon";

const ShopByCategory = () => {
  const categoryArr = [
    { src: img1, title: "bags" },
    { src: img2, title: "kids" },
    { src: img3, title: "man" },
    { src: img4, title: "sneakers" },
    { src: img5, title: "sports" },
    { src: img6, title: "watch" },
    { src: img7, title: "sunglass" },
    { src: img8, title: "woman" },
  ];

  const categoryRender = () =>
    categoryArr.map(({ src, title }, idx) => (
      <div className="section" key={idx}>
        <div className="img overflow-hidden position-relative rounded-circle ">
          <img className="w-100" src={src} alt={title} />
          <Icon prefix={"fa-solid"} icon={"fa-link"} />
        </div>
        <p className="title text-center fw-bold mt-3 mb-auto">{title}</p>
      </div>
    ));

  const responsive = {
    300: {
      slidesPerView: categoryArr.length - 6,
    },
    568: {
      slidesPerView: categoryArr.length - 5,
    },
    768: {
      slidesPerView: categoryArr.length - 4,
    },
    900: {
      slidesPerView: categoryArr.length - 2,
    },
    1400: {
      slidesPerView: categoryArr.length,
    },
  };

  return (
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
      {categoryRender()}
    </SwiperContainer>
  );
};

export default ShopByCategory;
