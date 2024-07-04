import React from "react";
import ListItemHoverEffect from "./ListItemHoverEffect";
import FacilityeImage from "./Facility-image";

const Listsection = () => {
  return (
    <>
      <h2 className="text-semibold text-5xl text-center hover:text-red-500">
        Amenities
      </h2>
      <div className="flex flex-wrap border-collapse">
        <div className="mt-10 ">
          <ListItemHoverEffect />
        </div>

        <div className="mt-10">
          <FacilityeImage />
        </div>
      </div>
    </>
  );
};

export default Listsection;
