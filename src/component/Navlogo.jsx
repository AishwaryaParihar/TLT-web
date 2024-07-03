import React from "react";
import logoTLT from "../assets/TLTlogo.png";
import SocialMedia from "./utiliti/SocialMedia/SocialMedia";
import Headings from "./utiliti/heading/Heading";

const navlogo = () => {
  return (
    <>
      <div className=" mx-2 ">

        <div className="flex justify-around">

          <div className="flex items-center gap-2">
            <img src={logoTLT} className="w-11" alt="" />
            <Headings heading={"h6"} style={"font-semibold"}> <span className="text-red-500">TLT </span> Judicial  Academy</Headings>
          </div>


          <div className="flex gap-11 items-center hidden md:block">
            <div className="flex items-center gap-2 ">
               <div className=""><i class="fa-regular fa-clock fa-xl text-4xl text-red-500"></i></div>
               <div className="font-semibold ">Monday - Friday <br /> 8:00AM-8:00PM</div>
            </div>
            <div className="flex items-center gap-2 ">
               <div className=""><i class="fa-solid fa-phone fa-xl text-4xl text-red-500"></i></div>
               <div className="font-semibold "> Call Us <br />+2 392 3929 210</div>
            </div>
            <div className="flex gap-2 ">
              <SocialMedia />
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default navlogo;
