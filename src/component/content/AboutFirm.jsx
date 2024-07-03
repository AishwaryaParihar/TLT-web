import React from "react";
import penImg from "../../assets/pen.jpg";
import justiceImg from "../../assets/justice.avif";
import hammerImg from "../../assets/hammer.webp";
const AboutFirm = () => {
  return (
    <section>
      <div className="flex flex-wrap">
        <div>
          <img src={penImg} alt="pen image" />
          <img src={justiceImg} alt="justice image" />
          <img src={hammerImg} alt="hammer image" />
        </div>
      </div>
    </section>
  );
};

export default AboutFirm;
