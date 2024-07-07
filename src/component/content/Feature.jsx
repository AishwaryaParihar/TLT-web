import React from "react";
import Headings from "../utiliti/heading/Heading";
import stylees from "./Feature.module.css";
import { data } from "../data/Feature";
const Feature = () => {
  return (
    <>
      <div className="flex justify-center items-center  flex-wrap gap-7 pb-16">
        {data.map((items, index) => (
          <div key={index} className={stylees.card}>
            <img className={stylees.imgbox} src={items.fimg} />
            <div className={stylees.content}>
              <div className={stylees.description}>
                <Headings heading={"h5"}>{items.fname}</Headings>
              </div>

              <div className={stylees.info}>{items.fdescription}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feature;
