import React from "react";
import ListItemHoverEffect from "./ListItemHoverEffect";
import FacilityeImage from "./Facility-image";
import Headings from "../utiliti/heading/Heading";

const Listsection = () => {
  return (
    <>
      <div className="mx-5 md:mx-20">
        <Headings heading={"h2"}>Amenities</Headings>
        <div className="flex flex-wrap sm:flex-nowrap mt-5 justify-between border-collapse">
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
