import React from "react";
import Headings from "../utiliti/heading/Heading";
import writtenImg from "../../assets/written.jpg";

const MockTestCard = () => {
  return (
    <section className="mx-3 md:mx-20 my-20">
      <Headings heading={"h2"}>
        <span className="text-primary">MPCJ</span>Mains Offline{" "}
        <span className="text-primary">Test Series</span>
      </Headings>
      <div className="flex flex-col md:flex-row mt-10">
        <div className="md:w-1/2 space-y-4">
          <Headings heading={"h6"}>Total 14 Offline Mock (3Hrs Each)</Headings>
          <ul className="list-disc list-inside ml-5">
            <li>6 Sectional Mocks</li>
            <li>4 Fully Syllabus Mocks</li>
            <li>1 Replica Mock of MPCJ Mains (including all the 4 papers)</li>
          </ul>
          <Headings heading={"h6"}>Personalised Audio Reviews on Mail by Shubham Sir</Headings>
          <Headings heading={"h6"}>Instant Paper Evaluation within 3 days</Headings>
          <Headings heading={"h6"}>Leaderboard Projection after every week</Headings>
          <Headings heading={"h6"}>In Both Languages Hindi + English</Headings>
        </div>
        <div className="md:w-1/2 flex justify-center mt-5 md:mt-0">
          <img src={writtenImg} alt="Written Test" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default MockTestCard;
