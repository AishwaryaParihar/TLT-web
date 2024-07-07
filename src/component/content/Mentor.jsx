import React from "react";
import Headings from "../utiliti/heading/Heading";
import { data } from "../data/mentor";

const Mentor = () => {
  return (
    <section className="mx-3 md:mx-20 md:my-20 mt-y0">
      <div className="flex flex-wrap gap-5 justify-center items-center">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <div className="full-border">
            <Headings heading={"h5"} style={"text-shadow"}>
              {data.post}
            </Headings>
          </div>
          <div className="md:w-[350px] w-full mt-7 leading-loose z-10">
            <div className="flex flex-col gap-3 flex-wrap md:text-7xl text-7xl font-medium">
              <span className="text-primary font-bold text-shadow">Shubham</span> <span className="text-shadow">Upadhyay</span> <span className="text-shadow">Sir</span>
            </div>
          </div>
        </div>
        <div className="w-[400px] z-0">
          <img src={data.image} alt="" />
        </div>
        <div className="md:w-[350px] w-full md:mt-16 mt-10 text-justify">
          {data.text1}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
