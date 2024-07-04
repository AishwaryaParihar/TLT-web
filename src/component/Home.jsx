import React from "react";
import Testimony from "./content/Testimony";
import FeaturesCard from "./content/FeaturesCard";
import Aboutus from "./content/Aboutus";
import Contactus from "./content/Contactus";
// import ListItemHoverEffect from './content/ListItemHoverEffect'
import Facility from "./content/Facility";
import Fee from "./content/Fee";
import Bestfeaturs from "./content/Bestfeaturs";
import YoutubeGallery from "./content/YoutubeGallery";
import EnrollButton from "./content/EnrollButton";
import Hambergur from "./content/Hambergur";
import Feature from "./content/Feature";

export const Home = () => {
  return (
    <>
      <Bestfeaturs />
      <Testimony />
      <Feature />
      <EnrollButton />
      {/* <FeaturesCard/> */}
      {/* <Aboutus /> */}

      <Contactus />
      <Fee />
      <YoutubeGallery />
      <Facility />
    </>
  );
};
