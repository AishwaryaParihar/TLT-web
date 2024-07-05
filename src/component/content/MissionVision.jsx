import React from "react";
import { cardData } from "../data/visiontext"; // Adjust the import if necessary
import style from "./MissionVision.module.css"; // Import your CSS module

const MissionVision = () => {
  return (
    <div className={style.container}>
      {cardData.map((item, index) => (
        <div className={style.card} key={index}>
          <span className={style["card-number"]}>{item.number}</span>
          <div className={style["card-block"]}>
            <h2 className={style["card-title"]}>{item.title}</h2>
            <p className={style["card-description"]}>{item.description}</p>
          </div>
          <div className={style["card-image-wrapper"]}>
            <img src={item.image} alt={item.title} className={style["card-image"]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MissionVision;
