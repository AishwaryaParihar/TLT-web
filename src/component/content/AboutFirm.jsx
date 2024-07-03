import React from "react";
import penImg from "../../assets/pen.jpg";
import justiceImg from "../../assets/justice2.avif";
import hammerImg from "../../assets/hammer.jpg";
import Headings from "../utiliti/heading/Heading";
const AboutFirm = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
      <div className="flex flex-wrap gap-3">
        <div className="flex flex-wrap flex-col gap-3">
          <div>
            <img src={penImg} alt="pen image" className="w-35 h-40" />
          </div>
          <div>
            <img src={hammerImg} alt="hammer image" className="w-40 h-50" />
          </div>
        </div>
        <div className="mt-5">
          <img src={justiceImg} alt="justice image" className="w-40 h-70" />
        </div>
      </div>

      <div>
        <Headings heading={"h6"}>About the firm</Headings>
        <div className="">
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
