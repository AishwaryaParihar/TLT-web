import React from "react";
import "./Telegram.css";
import Telegram from "../../assets/telegram.png";

function Whatshap() {
  return (
    <div>
      {" "}
      <a target="_blank" href="https://wa.me/+918602440712">
        <img src={Telegram} className="telegram-img" alt="" />{" "}
      </a>
    </div>
  );
}

export default Whatshap;
