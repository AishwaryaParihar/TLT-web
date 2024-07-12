import React from "react";
import Headings from "../utiliti/heading/Heading";
import styless from "./fee.module.css";
import atoz from "../../assets/dictionary.png";
import tbmbasic from "../../assets/notes.png";
import tbmplus from "../../assets/copy-writing.png";
import tbmad from "../../assets/creative-writing.png";
import { NavLink } from "react-router-dom";

const freedata = [
  {
    img: atoz,
    title: "Our Products",
    price: "Explore More",
    description: "We are providing you best study Essentials",
  },
];

const Fee = () => {
  return (
    <>
      <div className="flex flex-col justify-items-center items-center mx-5 md:mx-8 my-20 ">
        <div className="flex flex-col justify-items-start self-start md:ms-16">
          <Headings heading={"h5"} style={"text-shadow"}>Study Essentials</Headings>
          <Headings heading={"h2"} style={"text-shadow"}>
            {" "}
            <span className="text-primary">Get</span> Your{" "}
            <span className="text-primary">study</span> Pack
          </Headings>

          {/* <Headings heading={"h3"}>Exclusive Practice Material</Headings> */}
        </div>

        <NavLink to="/study-Essentials">
          <div className="flex justify-center items-center md:w-[500px] w-[350px] flex-wrap mt-7">
            {freedata.map((items) => (
              <div className={styless.card_style}>
                <div className={styless.content}>
                  <div className={styless.icons_div}>
                    <img src={items.img} className={styless.icons} />
                  </div>
                  <div className={styless.title}>{items.title}</div>
                  <div className={styless.price}>{items.price}</div>
                  <div className={styless.description}>{items.description}</div>
                </div>
              </div>
            ))}
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Fee;
