import React from "react";
import courseDetails from "./data/tnc";
import Headings from "./utiliti/heading/Heading";

const TnC = () => {
  return (
    <div className="px-5 md:px-20 py-8">
      <Headings heading={"h2"} style="pb-10">
        <span className="text-primary">Terms and Conditions</span> for Admission to
        <span className="text-primary"> TLT</span> Judicial Academy:
      </Headings>
      {courseDetails.map((section, index) => (
        <div key={index} className="section">
          <h2 className="text-2xl font-semibold mb-2 text-primary">{section.section}</h2>
          <ul className="list-disc pl-6">
            {section.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="mb-2">
                <p>{detail.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TnC;
