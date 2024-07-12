import React from "react";
import ListItemHoverEffect from "./ListItemHoverEffect";
import FacilityImage from "./FacilityImage";
import Headings from "../utiliti/heading/Heading";

const Listsection = () => {
  return (
    <div className="mx-5 md:mx-20">
      <Headings heading={"h2"}>Amenities</Headings>
      <div className=" w-full flex flex-wrap lg:gap-10 lg:flex-nowrap mt-5">
        <div className="lg:w-1/2 w-full">
          <FacilityImage />
        </div>
        <div className="lg:w-1/2 w-full mt-10 lg:mt-8">
          <ListItemHoverEffect />
        </div>
      </div>
    </div>
  );
};

export default Listsection;
