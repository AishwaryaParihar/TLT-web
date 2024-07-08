


import React from "react";
import facility from "../../assets/facility.webp";

const FacilityeImage = () => {
  return (
    <div className="pl-4 pr-9">
      <img
        src={facility}
        alt="facility"
        className="w-full h-auto max-h-[500px] sm:max-h-[230px] sm:mt-10"
      />
    </div>
  );
};

export default FacilityeImage;
