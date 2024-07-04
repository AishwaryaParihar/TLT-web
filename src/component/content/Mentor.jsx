import React from "react";
import Headings from "../utiliti/heading/Heading";
import { data } from "../data/mentor";

const Mentor = () => {
  return (
    <section className="mx-3 md:mx-20 mt-20">
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-wrap flex-col justify-center">
          <div className="">
            <Headings heading={"h6"}>{data.post}</Headings>
          </div>
          <div className="w-[400px]">
            <Headings heading={"h1"} style={"text-primary"}>
              {data.name}
            </Headings>
          </div>
        </div>
        <div className="w-[400px]">
          <img src={data.image} alt="" />
        </div>
        <div className="w-[300px] mt-[200px] leading-loose text-justify">
          {data.text}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
