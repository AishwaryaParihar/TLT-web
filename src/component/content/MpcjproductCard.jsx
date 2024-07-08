import React from "react";
import Headings from "../utiliti/heading/Heading";
import styless from "./MpcjproductCard.module.css";
import atoz from "../../assets/dictionary.png";
import tbmbasic from "../../assets/notes.png";
import tbmplus from "../../assets/copy-writing.png";
import tbmad from "../../assets/creative-writing.png";

const freedata = [
  {
    img: atoz,
    title: "A-Z LEGAL GLOSSARY",
    price: "Rs-399/-",
    description: "for Legal glossary (1500+ Words) (HANDPICKED)",
    buy: "Buy Now"
  },
  {
    img: tbmbasic,
    title: "TPM BASIC",
    price: "Rs-699/-",
    description:
      "the TPM Basic Pack(Total 200 one liners Criminal- 100 one liners Civil- 100 one liners)",
    buy: "Buy Now"  
  },
  {
    img: tbmplus,
    title: "TPM PLUS",
    price: "Rs-999/-",
    description:
      " for the TPM Plus Pack (Total 400 one liners Criminal- 200 one liners Civil- 200 one liners)",
    buy: "Buy Now"  
  },
  {
    img: tbmad,
    title: "TPM ADVANCED",
    price: "Rs-1299/-",
    description:
      " for the TPM Advanced (Total 400 one liners Criminal- 200 one liners Civil- 200 one liners with Legal glossary of 1500+ words)",
    buy: "Buy Now" 
  },
];

const MpcjproductCard = () => {
  return (
    <>
      <div className="flex flex-col justify-items-center items-center p-5 md:p-20 ">
        <div className="flex flex-col justify-items-start self-start md:ms-16">
          <Headings heading={"h2"} style={"text-shadow"}> <span className="text-primary">MPCJ</span> and <span className="text-primary">CGCJ</span> 2024 (Mains)</Headings>

          <Headings heading={"h3"}>Exclusive Practice Material</Headings>

          <Headings heading={"h5"}>Starting From 2nd February 2024</Headings>
        </div>

        <div className="flex justify-center items-center flex-wrap">
          {freedata.map((items) => (
            <div className={styless.card_style}>
              <div className={styless.content}>
                <div className={styless.icons_div}>
                  <img src={items.img} className={styless.icons} />
                </div>
                <div className={styless.title}>{items.title}</div>
                <div className={styless.price}>{items.price}</div>
                <div className={styless.description}>{items.description}</div>
                <div className={styless.buy}>{items.buy}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MpcjproductCard;
