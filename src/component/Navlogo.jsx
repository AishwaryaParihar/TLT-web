import React from "react";
import logoTLT from "../assets/TLTlogo.png";
import SocialMedia from "./utiliti/SocialMedia/SocialMedia";

const navlogo = () => {
  return (
    <>
      <div className=" mx-2 ">

        <div className="flex justify-around">

          <div className="">
            <img src={logoTLT} className="w-11" alt="" />
          </div>


          <div className="flex gap-11 items-center">
            <div className="flex items-center gap-2">
               <div className=""><i class="fa-regular fa-clock fa-xl"></i></div>
               <div className="">Monday - Friday <br /> 8:00AM-8:00PM</div>
            </div>
            <div className="flex items-center gap-2">
               <div className=""><i class="fa-solid fa-phone fa-xl"></i></div>
               <div className="">Monday - Friday <br /> 8:00AM-8:00PM</div>
            </div>
            <div className="flex">
              <SocialMedia />
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default navlogo;
