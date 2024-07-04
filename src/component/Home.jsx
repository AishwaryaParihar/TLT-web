import React from "react";
import Testimony from "./content/Testimony";
import FeaturesCard from "./content/FeaturesCard";
import Aboutus from "./content/Aboutus";
import Contactus from "./content/Contactus";
// import ListItemHoverEffect from './content/ListItemHoverEffect'
import Facility from "./content/Facility";
import Fee from "./content/Fee";
import Bestfeaturs from "./content/Bestfeaturs";
<<<<<<< HEAD
import YoutubeGallery from "./content/YoutubeGallery";
import Feature from "./content/Feature";
=======
import YoutubeGallery from "./content/YoutubeGallery"
import EnrollButton from "./content/EnrollButton";
import Hambergur from "./content/Hambergur";
>>>>>>> e8928ad9378a8def65aaf7acc18d76659c90019d

export const Home = () => {
  return (
    <>
      <Bestfeaturs />
      <Testimony />
<<<<<<< HEAD
      <Feature />
=======
      <EnrollButton/>
>>>>>>> e8928ad9378a8def65aaf7acc18d76659c90019d
      {/* <FeaturesCard/> */}
      {/* <Aboutus /> */}
     
      <Contactus />
      <Fee />
      <YoutubeGallery />
      <Facility />
    </>
  );
};
