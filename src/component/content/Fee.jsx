import React from "react";
import Headings from "../utiliti/heading/Heading";
import styless from "./fee.module.css";

const freedata = [
  {
    img: "image",
    title: "A-Z LEGAL GLOSSARY",
    price: "Rs-399/-",
    description: "for Legal glossary (1500+ Words) (HANDPICKED)",
  },
  {
    img: "image",
    title: "TPM BASIC",
    price: "Rs-699/-",
    description:
      "the TPM Basic Pack(Total 200 one liners Criminal- 100 one liners Civil- 100 one liners)",
  },
  {
    img: "image",
    title: "TPM PLUS",
    price: "Rs-999/-",
    description:
      " for the TPM Plus Pack (Total 400 one liners Criminal- 200 one liners Civil- 200 one liners)",
  },
  {
    img: "image",
    title: "TPM ADVANCED",
    price: "Rs-1299/-",
    description:
      " for the TPM Advanced (Total 400 one liners Criminal- 200 one liners Civil- 200 one liners with Legal glossary of 1500+ words)",
  },
];

const Fee = () => {
  return (
    <>
      <div className="flex flex-col justify-items-center items-center my-16">
        <div className="flex flex-col justify-items-start self-start md:ms-16">
          <Headings heading={"h2"}>MPCJ and CGCJ 2024 (Mains)</Headings>

          <Headings heading={"h3"}>Exclusive Practice Material</Headings>

          <Headings heading={"h5"}>Starting From 2nd February 2024</Headings>
        </div>

        <div className="flex justify-center items-center flex-wrap">
          {freedata.map((items) => (
            <div className={styless.card_style}>
              <div className={styless.content}>
                <div>{items.img}</div>
                <div className={styless.title}>{items.title}</div>
                <div className={styless.price}>{items.price}</div>
                <div className={styless.description}>{items.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fee;
