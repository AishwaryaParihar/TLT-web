import React from "react";
import { useState } from "react";

export const PYpaperform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const handleSumbit = (event) => {
    event.preventDefault();
    if (name === "") {
      setNameAlert(true);
    } else {
      setNameAlert(false);
    }
    if (email === "") {
      setEmailAlert(true);
    } else {
      setEmailAlert(false);
    }
    const dw = () => {
      if (name !== "" && email !== "") {
      }
    };
  };
  return (
    <>
      <div className="flex justify-center flex-wrap gap-12 my-8 ">
        <form onSubmit={handleSumbit} className="flex flex-col">
          <div className="flex flex-col justify-center">
            <div className="flex  flex-wrap sm:flex-nowrap  w-[100%] flex-col">
              <label className="flex text-primary-marineBlue font-[500] mb-2">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className={`jinput ${
                  nameAlert
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                type="text"
                placeholder="e.g.Stephen King"
              />
              <span
                className={`${
                  nameAlert ? "inline" : "hidden"
                } text-primary-strawberryRed font-[500] text-sm `}
              >
                This field is required
              </span>
            </div>

            {/*----------- Email  --------- */}
            <div className="flex flex-col w-[100%] mb-2">
              <label className="text-primary-marineBlue font-[500] mb-2 mt-5">
                Email Adress
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={` jinput ${
                  email
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                type="email"
                placeholder="e.g.stephenking@lorem.com"
              />
              <span
                className={`${
                  emailAlert ? "inline" : "hidden"
                } text-primary-strawberryRed font-[500] text-sm `}
              >
                This field is required
              </span>
            </div>
            <button className="text-sm font-bold text-white bg-primary px-1 w-[190px] py-1 mt-2 rounded-sm ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
