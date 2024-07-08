import React from "react";
import Headings from "../utiliti/heading/Heading";
import writtenImg from "../../assets/written.jpg";
import MpcjContactForm from "../../component/content/MpcjContactForm";

const MockTestCard = () => {
  const arrowSpan = (
    <span className="text-red-500 text-xs">
      <i className="fa-solid fa-arrow-right-long"></i>
    </span>
  );

  return (
    <section className="mx-3 md:mx-20 my-20">
      <Headings heading={"h2"}>
        <span className="text-primary">MPCJ</span>Mains Offline{" "}
        <span className="text-primary">Test Series</span>
      </Headings>
      <div className="flex flex-col md:flex-row mt-5 md:mt-14">
        <div className="md:w-1/2 space-y-4 mt-5">
          <Headings heading={"h5"}>
            {arrowSpan} Total 14 Offline Mock (3Hrs Each)
          </Headings>
          <ul className="list-disc list-inside ml-5">
            <li>6 Sectional Mocks</li>
            <li>4 Fully Syllabus Mocks</li>
            <li>1 Replica Mock of MPCJ Mains (including all the 4 papers)</li>
          </ul>
          <Headings heading={"h5"}>
            {arrowSpan} Personalised Audio Reviews on Mail by Shubham Sir
          </Headings>
          <Headings heading={"h5"}>
            {arrowSpan} Instant Paper Evaluation within 3 days
          </Headings>
          <Headings heading={"h5"}>
            {arrowSpan} Leaderboard Projection after every week
          </Headings>
          <Headings heading={"h5"}>{arrowSpan} In Both Languages Hindi + English</Headings>
        </div>
        <div className="md:w-1/2 flex justify-center mt-5 md:mt-0 relative">
          <img src={writtenImg} alt="Written Test" className="object-cover" />
          <div className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded">
            ₹ 4999 only
          </div>
          <div className="absolute top-2 left-2 bg-red-500 text-white p-4 rounded flex flex-col justify-center items-center">
           <span>Starting Date</span> <span>15th March</span> 
          </div>
        </div>
      </div>
      <MpcjContactForm />
    </section>
  );
};

export default MockTestCard;
