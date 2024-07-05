import React from "react";
import AboutFirm from "./content/AboutFirm";
import Mentor from "./content/Mentor";
import Breadcrumbs from "./utiliti/breadcrumbs/Breadcrumbs";

const About = () => {
  return (
    <div>
     <Breadcrumbs>
     <AboutFirm />
     <Mentor /></Breadcrumbs>
    </div>
  );
};

export default About;
