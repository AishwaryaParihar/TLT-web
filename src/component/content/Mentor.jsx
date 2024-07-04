import React from "react";
import Headings from "../utiliti/heading/Heading";
import { data } from "../data/mentor";

const Mentor = () => {
  return (
    <section className="mx-3 md:mx-20 mt-20">
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-wrap flex-col justify-center">
          <div className="full-border">
            <Headings heading={"h6"}>
              {data.post}
            </Headings>
          </div>
          <div className="w-[400px] mt-7 leading-loose z-10">
            <div className="flex flex-col flex-wrap text-8xl font-medium">
              <span className="text-primary font-bold">Shubham</span> <span>Upadhyay</span> <span>Sir</span>
            </div>
          </div>
        </div>
        <div className="w-[400px] z-0">
          <img src={data.image} alt="" />
        </div>
        <div className="w-[350px] mt-[200px] leading-loose text-justify">
          {data.text}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
