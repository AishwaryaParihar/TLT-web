import React from "react";
import Headings from "../utiliti/heading/Heading";
import { data } from "../data/mentor";

const Mentor = () => {
  return (
    <section className="mx-3 md:mx-20 md:mt-20 mt-10">
      <div className="flex flex-wrap gap-5 justify-center items-center">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <div className="full-border">
            <Headings heading={"h6"}>
              {data.post}
            </Headings>
          </div>
          <div className="md:w-[350px] w-full mt-7 leading-loose z-10">
            <div className="flex flex-col gap-3 flex-wrap md:text-7xl text-7xl font-medium">
              <span className="text-primary font-bold">Shubham</span> <span>Upadhyay</span> <span>Sir</span>
            </div>
          </div>
        </div>
        <div className="w-[400px] z-0">
          <img src={data.image} alt="" />
        </div>
        <div className="md:w-[300px] w-full md:mt-[200px] mt-10 leading-loose text-justify">
          {data.text}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
