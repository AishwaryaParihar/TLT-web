import React from "react";
import Testimony from "./content/Testimony";
import FeaturesCard from "./content/FeaturesCard";
import Aboutus from "./content/Aboutus";
import Contactus from "./content/Contactus";
// import ListItemHoverEffect from './content/ListItemHoverEffect'
import Facility from "./content/Facility";
import Fee from "./content/Fee";
import Bestfeaturs from "./content/Bestfeaturs";

export const Home = () => {
  return (
    <><Bestfeaturs/>
      <Testimony />
      {/* <FeaturesCard/> */}
      {/* <Aboutus /> */}
      <Contactus />
      <Fee />
      <Facility />
    </>
  );
};
