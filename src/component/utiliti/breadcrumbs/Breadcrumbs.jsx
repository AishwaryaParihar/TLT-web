import React from "react";
import "./helper";
const Breadcrumbs = ({ children, heading }) => {
  return (
    <>
      <div className="h-[40vh] lg:h-[65vh] w-full flex items-center justify-center m-0 relative ">
        <div className="absolute inset-0 bg-wrapper bg-no-repeat bg-contain bg-right-top z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/100  via-white/90 to-transparent z-5"></div>
        <div className="flex text-center justify-center items-center w-full h-full z-10">
          <div className="flex flex-col gap-2 text-center justify-center items-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-center">
              {heading ? heading.firstLetterCapital() : "About"}
            </h1>
            <button className="text-primary text-sm rounded-full px-6 py-1 mt-2 bg-white border-2 border-red-500">
              {heading
                ? `Home / ${heading.firstLetterCapital()}`
                : "Home / About"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
    </>
  );
};
export default Breadcrumbs;