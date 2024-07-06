import React from "react";
import ListItemHoverEffect from "./ListItemHoverEffect";
import FacilityeImage from "./Facility-image";

const Listsection = () => {
  return (
    <>
     
      <h2 className="text-center font-bold text-4xl text-black mb-8">Amenities</h2>
      <div className="flex flex-wrap justify-between  sm:mr-20 border-collapse">
        <div className="mt-10 ">
          <ListItemHoverEffect />
        </div>

        <div className="mt-10  ">
        {/* <FacilityeImage /> */}  
        </div>
      </div>
    </>
  );
};

export default Listsection;
