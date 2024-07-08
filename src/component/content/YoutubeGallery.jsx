import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { videos } from "../data/youtubeGallery";
import "./Testimony.css";
import Headings from "../utiliti/heading/Heading";

const YoutubeGallery = () => {
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
    <section className="">
      <div className="mx-3 md:mx-20 my-5 md:my-10">
        <Headings heading={"h6"} style={"text-shadow"}>FROM OUR</Headings>
        <Headings heading={"h1"} style={"text-shadow"}>Youtube <span className="text-primary">Gallery</span></Headings>
        <Slider {...settings} className="testimony-slider mt-20">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`px-1 md:px-2 mb-10 ${
                isMiddleSlide(index) ? "scale-110" : "scale-100"
              } transition-transform duration-300`}
            >
              <div className="h-[250px] p-3 md:p-4">
                <iframe
                  title={video.title}
                  width="100%"
                  height="100%"
                  src={video.embedUrl}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default YoutubeGallery;
