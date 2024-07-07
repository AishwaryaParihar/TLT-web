import React, { useState } from "react";
import Slider from "react-slick";
import { data } from "../data/testimony";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headings from "../utiliti/heading/Heading";
import "./Testimony.css"; // Import custom CSS

const Testimony = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesToShow = 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div style={{ padding: "10px", bottom: "-25px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isMiddleSlide = (index) => {
    // Calculate the middle slide index based on the active slide
    const middleSlideIndex = activeSlide + Math.floor(slidesToShow / 2);
    return index === middleSlideIndex;
  };

  return (  
    <div className="m-3 md:m-20">
      <Headings heading={"h5"}>Testimonials</Headings>
      <Headings heading={"h1"}>What They Say</Headings>
      <Slider {...settings} className="testimony-slider">
        {data.map((item, index) => (
          <div
            className={`px-3 md:px-4 mb-10 ${
              isMiddleSlide(index) ? "scale-105" : "scale-100"
            } transition-transform duration-300`}
            key={index}
          >
            <div
              className={`h-[360px] ${
                isMiddleSlide(index) ? "bg-primary text-white" : "bg-gray-100"
              } rounded-2xl p-5 md:p-8 gap-5 lg:gap-8 mt-10 transition-all duration-300`}
            >
              <div className="flex flex-col items-center  text-justify">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover mb-2"
                />
                <div className="font-bold text-xl md:text-lg lg:text-xl mb-1">
                  {item.name}
                </div>
                <div className="mb-4 text-sm md:text-xs lg:text-sm">
                  {item.rank}
                </div>
                <div className="mt-1 text-base md:text-sm lg:text-base truncated-text">
                  {item.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimony;
