import React from "react";
import logoTLT from "../assets/TLTlogo.png";
import SocialMedia from "./utiliti/SocialMedia/SocialMedia";
import Headings from "./utiliti/heading/Heading";
import { NavLink } from "react-router-dom";

const navlogo = () => {
  return (
    <>
      <div className=" px-2 ">

        <div className="flex justify-around">

          <div className="flex items-center gap-1">
            <img src={logoTLT} className="w-11" alt="" />
            <Headings heading={"h6"} style={"font-semibold"}> <span className="text-red-500">TLT </span> Judicial  Academy</Headings>
          </div>


          <div className="flex gap-11 items-center ">
            <div className=" items-center gap-2 hidden lg:flex">
               <div className=""><i className="fa-regular fa-clock fa-xl text-4xl text-red-500"></i></div>
               <div className="font-semibold ">Monday - Saturday <br /> 8:00AM-8:00PM</div>
            </div>
            <NavLink to="/contact-support">
            <div className=" items-center gap-2 hidden md:flex">
               <div className=""><i className="fa-solid fa-phone fa-xl text-4xl text-red-500"></i></div>
               <div className="font-semibold "> Contact Us<br />9238176156 </div>
            </div>
            </NavLink>
            
            <div className="gap-2 hidden sm:flex">
            <div className=""><i className="fa-solid fa-location-dot fa-xl text-4xl text-red-500"></i></div>
            <div className="font-semibold "> Location  </div>
              {/* <SocialMedia /> */}
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default navlogo;
