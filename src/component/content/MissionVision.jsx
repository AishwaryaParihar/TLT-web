import React from "react";
import { cardData } from "../data/visiontext"; // Adjust the import if necessary
import Headings from "../utiliti/heading/Heading";

const MissionVision = () => {
  return (
    <div className="mx-3 md:mx-20 md:mt-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {cardData.map((item, index) => (
          <div className="rounded-lg flex bg-gray-50 overflow-hidden shadow-lg group hover:border-red-500 hover:shadow-lg transition duration-300" key={index}>
            <div className="bg-red-500 flex justify-center w-[500px] items-center p-3"> 
              <img
                src={item.image}
                alt={item.title}
                className=""
              /> 
            </div>
            <div className=" p-5">
            <Headings heading="h3" className="text-xl font-bold">
                {item.title}
              </Headings>
              <p className="">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
