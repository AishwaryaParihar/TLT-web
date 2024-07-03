import React from "react";

const freedata = [
  { img: "image", title: "titles", price: "200rs", description: "lorem" },
  { img: "image", title: "titles", price: "200rs", description: "lorem" },
  { img: "image", title: "titles", price: "200rs", description: "lorem" },
  { img: "image", title: "titles", price: "200rs", description: "lorem" },
];

const Fee = () => {
  return (
    <>
      <div className="flex justify-items-center flex-wrap">
        {freedata.map((items) => (
          <div className="flex justify-items-center">
            <div>{items.img}</div>
            <div>{items.title}</div>
            <div>{items.price}</div>
            <div>{items.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fee;
