import React from "react";
import ListItemHoverEffect from "./ListItemHoverEffect";
import FacilityeImage from "./Facility-image";

const Listsection = () => {
  return (
    <>
    <h2 className="text-center font-bold text-4xl text-black sm:mt-5 ">Amenities</h2>
    <div className="px-0 md:px-20 py-0">
   
    <div className="flex flex-wrap sm:flex-nowrap justify-between sm:mt-30 sm:pt-20  border-collapse">
     
    <div className="  ">
    <FacilityeImage />  
   </div>
     
        <div className="mt-10 ">
          <ListItemHoverEffect />
        </div>

      

      </div>
    </div>
    </>
  );
};

export default Listsection;
