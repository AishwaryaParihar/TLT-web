import React from "react";
import dl from "../../assets/dl.png";

const PYpaper = [
  {
    img: "../../assets/dl.png",
    Ptitle: "DELHI JUDICIAL SERVICE EXAM 2023 (PRELIMS)",
  },
  {
    img: "",
    Ptitle: "DELHI JUDICIAL SERVICE EXAM' 2022, (MAINS)",
  },
  {
    img: "",
    Ptitle: "DELHI JUDICIAL SERVICE EXAM' 2019, (PRELIMS)",
  },
  {
    img: "",
    Ptitle: "DELHI JUDICIAL SERVICE EXAM' 2018, (PRELIMS)",
  },
  {
    img: "",
    Ptitle: "DELHI QUESTION PAPER 2022",
  },
  {
    img: "",
    Ptitle: "GUJARAT QUESTION PAPER 2022",
  },
  {
    img: "",
    Ptitle: "MADHYA PRADESH QUESTION PAPER 2022",
  },
  {
    img: "",
    Ptitle: "UTTARAKHAND QUESTION PAPER 2022",
  },
];
const PYpapers = () => {
  return (
    <>
      <div className="flex justify-content-center flex-wrap">
        {PYpaper.map((item, index) => (
          <div key={index}>
            <div>{item.img}</div>
            <div>{item.Ptitle}</div>
            <button>Download as PDF</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PYpapers;
