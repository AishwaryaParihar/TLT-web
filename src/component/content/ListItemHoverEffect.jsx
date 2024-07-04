import React from "react";

const ListItemHoverEffect = () => {
  return (
    <div className="flex mx-32 items-center ">
      <div className="relative">
        <h2 className="text-white font-bold tracking-wide mb-2">
          List Item Hover Effect
        </h2>
        <ul className="relative shadow-xl pr-4">
          {[
            "Air Conditioned and ventilated classrooms.",
            "eaching through interactive methods via Smartboard.",
            "Supreme Court Live proceedings telecast on LED TVs",
            " Speakers installed for better audio in Classroom.",
            "For Safety purposes, smoke detector, Fire alarms and extinguisher installed.",
            "mplete library with systems for recovery classes",
            " Biometric based entry and Exit system for enrolled students",
            " vailability of Water Cooler for clean and cold water.",
          ].map((text, index) => (
            <li
              key={index}
              className="relative  list-none my-1 pl-4 border-l-2 border-red-500 transition-transform duration-500 cursor-pointer hover:translate-x-2 group"
            >
              <span className="relative inline-block py-2 pl-3 transition-colors duration-500 group-hover:text-white group-hover:font-semibold z-10">
                {text}
              </span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListItemHoverEffect;
