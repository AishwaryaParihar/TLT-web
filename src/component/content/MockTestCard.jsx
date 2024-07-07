import React from "react";
import Headings from "../utiliti/heading/Heading";
import writtenImg from "../../assets/written.jpg"

const MockTestCard = () => {
  return (
    <section className="mx-3 md:mx-20 mb-20">
      <Headings heading={"h2"}>
        <span className="text-primary">MPCJ</span>Mains Offline{" "}
        <span className="text-primary">Test Series</span>
      </Headings>
      <div ></div>
      <div className="mt-5">
        <Headings heading={"h4"}>Total 14 Offline Mock(3Hrs Each)</Headings>
        <ul>
          <li>6 Sectional Mocks</li>
          <li>4 Fully Syllabus Mocks</li>
          <li>1 Replica Mock of MPCJ Mains (including all the 4 papers)</li>
        </ul>
        <Headings heading={"h4"}>Personalised Audio zreviews on Mail by Shubham Sir</Headings>
        <Headings heading={"h4"}>Instant Paper Evaluation within 3 days</Headings>
        <Headings heading={"h4"}>Leaderboard Projection after every week</Headings>
        <Headings heading={"h4"}>In Both Languages Hindi + English </Headings>
      </div>
      <div>
        <img src={writtenImg} alt="" />
      </div>
    </section>
  );
};

export default MockTestCard;
