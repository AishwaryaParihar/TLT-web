import React from "react";
import Headings from "../utiliti/heading/Heading";
import { data } from "../data/visiontext"; // Adjust the import if necessary

const MissionVision = () => {
  // Extract the vision content from the first object in the array

  return (
    <div className="mx-3 md:mx-20 md:mt-10 mt-5">
      <Headings heading={"h6"}>
        <span className="text-primary">Vision:</span> Illuminating the{" "}
        <span className="text-primary">Path</span> to{" "}
        <span className="text-primary">Judicial Excellence</span>
      </Headings>
      <div className="mb-10">{data.vision}</div>
      <Headings heading={"h6"}>
        <span className="text-primary">Mission: </span> Nurturing {" "}
        <span className="text-primary">Legal Luminary</span> 
      </Headings>
      <div className="text-justify mb-5">{data.mission}</div>
      <div className="text-justify mb-5">{data.mission2}</div>
      <div className="text-justify mb-10">{data.conclusion}</div>
    </div>
  );
};

export default MissionVision;
