import React from "react";
import { cardData } from "../data/visiontext"; // Adjust the import if necessary

const MissionVision = () => {
  return (
    <div className="mx-3 md:mx-20 md:mt-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((item, index) => (
          <div className="p-4 border border-gray-300 rounded-lg" key={index}>
            <div className="flex items-center">
              <div className="bg-red-500 w-full h-full rounded-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
