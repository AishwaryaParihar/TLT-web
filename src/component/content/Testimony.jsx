import React from "react";
import { data } from "../data/testimony";
export const Testimony = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div>
          <img src={data.image} alt="" />
        </div>
        <div>{data.name}</div>
      </div>
      <div>{data.desc}</div>
    </div>
  );
};
