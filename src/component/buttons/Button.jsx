// Button.jsx
import React from "react";

const Button = ({ children, onClick, color }) => {
  // Determine the button color based on the provided prop
  let bgColorClass = "";
  switch (color) {
    case "blue":
      bgColorClass = "bg-blue-500 hover:bg-blue-700";
      break;
    case "white":
      bgColorClass = "bg-white hover:bg-primary text-red-400 uppercase ";
      break;
    case "red":
      bgColorClass = "bg-primary hover:bg-red-700 uppercase ";
      break;
    default:
      bgColorClass = "bg-gray-500 hover:bg-gray-700";
  }

  return (
    <button
      className={`px-4 py-2 text-white font-semibold rounded ${bgColorClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
