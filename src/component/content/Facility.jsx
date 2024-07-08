import React from "react";
import ListItemHoverEffect from "./ListItemHoverEffect";
import FacilityeImage from "./Facility-image";

const Listsection = () => {
  return (
    <>
    <div className="px-5 md:px-20 py-0">
    <h2 className="text-center font-bold text-4xl text-primary mb-8 ">Amenities</h2>
    <div className="flex flex-wrap justify-between  border-collapse">
     
     
        <div className="mt-10 ">
          <ListItemHoverEffect />
        </div>

        <div className="mt-10  ">
        {/* <FacilityeImage /> */}  
        </div>

      </div>
    </div>
    </>
  );
};

export default Listsection;
