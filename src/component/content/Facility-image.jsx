// import React from "react";
// import court from "../../assets/court.jpg";

// const FacilityeImage = () => {
//   return (
//     <div className="flex flex-wrap justify-evenly gap-10 items-center relative p-4">
//       <div className="flex flex-wrap justify-center gap-4">
//         <div className="flex flex-col md:gap-4 gap-3 md:mt-0 mt-[110px]">

//           <div className="md:w-[300px] md:h-[220px] w-[150px] h-[150px]">
//             <img src={court} alt="pen image" className="w-full h-full object-cover rounded-lg" />
//           </div>

//           <div className="md:w-[300px] md:h-[220px] w-[150px] h-[150px]">
//             <img src={court} alt="hammer image" className="w-full h-full object-cover rounded-lg" />
//           </div>
//         </div>

//         <div className="mt-10 md:mt-0">
//           <img src={court} alt="justice image" className="md:w-[300px] md:h-[450px] w-[200px] h-[300px] object-cover rounded-lg mt-10 md:mt-0" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacilityeImage;

import React from "react";
import court from "../../assets/court.jpg";
import fc from "../../assets/fc-img.webp";
import facility from "../../assets/facility.webp";

const FacilityeImage = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-10 items-center relative">
      <div className="flex flex-wrap justify-center gap-4 ml-8 ms:ml-8">
        <div className="flex flex-col px- gap-3 md:gap-4 mt-[50px] md:mt-0 lg:mt-[0px]">

          <div className="w-[150px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[300px] md:h-[220px]">
            <img src={facility} alt="pen image" className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="w-[150px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[300px] md:h-[220px]">
            <img src={fc} alt="hammer image" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        <div className="mt-12 px-4 my-0 md:mt-0 lg:mt-0 ">
          <img src={court} alt="justice image" className="w-[150px] h-[260px] sm:w-[200px] sm:h-[300px] md:w-[300px] md:h-[450px] object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default FacilityeImage;

