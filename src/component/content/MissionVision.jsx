import React from "react";
import { cardData } from "../data/visiontext"; // Adjust the import if necessary
import Headings from "../utiliti/heading/Heading";

const MissionVision = () => {
  return (
    <div className="mx-3 md:mx-20 md:mt-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((item, index) => (
          <div className="rounded-lg bg-gray-50 overflow-hidden shadow-md group hover:border-red-500 hover:shadow-lg transition duration-300" key={index}>
            <div className="bg-red-500 rounded-t-2xl overflow-hidden flex justify-evenly items-center p-3">
            <Headings heading="h3" className="text-xl font-bold mb-2" style={"text-white text-shadow"}>
                {item.title}
              </Headings>
              <img
                src={item.image}
                alt={item.title}
                className="w-[60px] h-[60px] object-cover"
              />
              
            </div>
            <div className="p-5">
              <p className="">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
