import React from "react";
import Slider from "react-slick";
import { data } from "../data/testimony";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headings from "../utiliti/heading/Heading";

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="mx-5 md:mx-20">
      <Headings></Headings>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="px-2" key={index}>
            <div className="h-[350px] flex flex-col bg-white rounded-lg shadow-md p-5 md:p-10 gap-5 lg:gap-10 mt-10">
              <div className="flex items-center gap-5 lg:gap-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-lg">{item.name}</div>
                  <span className="text-gray-600">{item.rank}</span>
                </div>
              </div>
              <div className="text-gray-800 text-ellipsis mt-4">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimony;
