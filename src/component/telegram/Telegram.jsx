import React from "react";
import "./Telegram.css";
import telegram from "../../assets/telegram.png";

function Telegram() {
  return (
    <div>
      {" "}
      <a target="_blank" href="https://wa.me/+918602440712">
        <img src={telegram} className="telegram-img" alt="" />{" "}
      </a>
    </div>
  );
}

export default Telegram;
