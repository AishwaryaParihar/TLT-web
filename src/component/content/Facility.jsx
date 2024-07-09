import React from "react";
import ListItemHoverEffect from "./ListItemHoverEffect";
import FacilityeImage from "./Facility-image";

const Listsection = () => {
  return (
    <>
    <h2 className="text-center font-bold text-4xl text-primary mb-0 ">Amenities</h2>
    <div className="px- md:px-20 py-0">
   
    <div className="flex flex-wrap justify-between mt-20  border-collapse">
     
    <div className="  ">
    <FacilityeImage />  
   </div>
     
        <div className=" ">
          <ListItemHoverEffect />
        </div>

      

      </div>
    </div>
    </>
  );
};

export default Listsection;
