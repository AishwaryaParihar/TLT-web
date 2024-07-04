import React from "react";
import penImg from "../../assets/pen.jpg";
import justiceImg from "../../assets/justice3.avif";
import hammerImg from "../../assets/hammer.jpg";
import Headings from "../utiliti/heading/Heading";

const AboutFirm = () => {
  return (
    <section className="mx-3 md:mx-20">
      <div className="flex flex-wrap justify-evenly md:gap-10 items-center relative ">
        <div className="flex flex-nowrap gap-5">
          <div className="flex flex-wrap flex-col md:gap-10 gap-3 md:mt-10 mt-[110px]">
            <div className="md:w-[250px] md:h-[200px] w-[150px] h-[150px]">
              <img src={penImg} alt="pen image" />
            </div>
            <div className="md:w-[250px] md:h-[300px] w-[150px] h-[150px] md:mt-8">
              <img src={hammerImg} alt="hammer image" />
            </div>
          </div>
          <div className="mt-10">
            <img src={justiceImg} alt="justice image" className="w-[250px] h-[350px] mt-10" />
          </div>
        </div>

        <div className="w-full md:w-[700px] md:mb-20 partial-border ">
          <Headings heading={"h1"}>About <span className="text-primary">TLT</span></Headings>
          <div className="md:mt-10 mt-5 text-justify">
            The TLT Judicial Academy, founded by Mr. Shubham Upadhyay, aims to
            become the premier institution for judiciary aspirants by offering
            top-notch education, a conducive learning atmosphere, and effective
            learning techniques. Mr. Upadhyay is committed to guiding every
            aspiring judge towards their objectives, making it his foremost
            commitment. The academy is meticulously crafted to support students
            during their extensive study sessions, providing amenities like a
            dedicated library, classroom resources, Ed-Tech facilities, and
            engaging study materials. With individual mentorship as a key feature,
            each student receives consistent guidance and instruction from their
            mentor.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFirm;
