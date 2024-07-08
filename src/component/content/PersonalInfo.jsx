import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [category, setcategory] = useState("");
  const [address, setaddress] = useState("");
  const [dob, setDOB] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [numberAlert, setNumberAlert] = useState(false);
  const [categoryAlert, setCategoryAlert] = useState(false);
  const [addressAlert, setAddressAlert] = useState(false);
  const [dobAlert, setdobAlert] = useState(false);
  const [StateAlert, setstateAlert] = useState(false);
  const [cityAlert, setcityAlert] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();

    if (name === "") {
      setNameAlert(true);
    } else {
      setNameAlert(false);
    }
    if (category === "") {
      setCategoryAlert(true);
    } else {
      setCategoryAlert(false);
    }
    if (address === "") {
      setAddressAlert(true);
    } else {
      setAddressAlert(false);
    }

    if (email === "") {
      setEmailAlert(true);
    } else {
      setEmailAlert(false);
    }
    if (dob === "") {
      setdobAlert(true);
    } else {
      setdobAlert(false);
    }

    if (number === "") {
      setNumberAlert(true);
    } else {
      setNumberAlert(false);
    }

    if (state === "") {
      setstateAlert(true);
    } else {
      setstateAlert(false);
    }
    if (city === "") {
      setcityAlert(true);
    } else {
      setcityAlert(false);
    }

    if (
      name !== "" &&
      email !== "" &&
      number !== "" &&
      category !== "" &&
      address !== "" &&
      state !== "" &&
      city !== "" &&
      dob !== ""
    ) {
      navigate("/Guardiandetails");
    }
  };

  return (
    <div className="flex row w-full h-full sm:pl-[120px]">
      <div className="w-full sm:w-[60%] p-4  pl-[0px]">
        <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
          Personal info
        </h1>
        <form onSubmit={handleSumbit} className="flex flex-col">
          <div className="form-wrapper flex flex-wrap flex-col relative">
            <div className="flex flex-wrap sm:flex-nowrap">
              {/* --------- Name --------- */}
              <div className="flex  flex-wrap sm:flex-nowrap  w-[100%] sm:w-[50%] flex-col">
                <label className="flex text-primary-marineBlue font-[500] mb-1">
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className={`${
                    nameAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-3 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  type="text"
                  placeholder="e.g.Stephen King"
                />
                <span
                  className={`${
                    nameAlert ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute right-[10px]`}
                >
                  This field is required
                </span>
              </div>
              {/* ------------ gender ------------ */}
              <div className="flex w-[50%] ">
                <label className="flex justify-center items-center text-primary-marineBlue font-[500] mb-2">
                  Male
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className={`mx-2 ${
                      nameAlert
                        ? "focus:outline-primary-strawberryRed"
                        : "focus:outline-primary-marineBlue"
                    } `}
                    type="checkbox"
                    placeholder="e.g.Stephen King"
                  />{" "}
                </label>

                <span
                  className={`${
                    nameAlert ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute right-[10px]`}
                >
                  This field is required
                </span>

                {/* --- female--- */}
                <label className="flex justify-center items-center text-primary-marineBlue font-[500] mb-2">
                  Female
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className={`mx-2 ${
                      nameAlert
                        ? "focus:outline-primary-strawberryRed"
                        : "focus:outline-primary-marineBlue"
                    } `}
                    type="checkbox"
                    placeholder="e.g.Stephen King"
                  />{" "}
                </label>

                <span
                  className={`${
                    nameAlert ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute right-[10px]`}
                >
                  This field is required
                </span>
                {/* --- Other--- */}
                <label className="flex justify-center items-center text-primary-marineBlue font-[500] mb-2">
                  Other
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className={` mx-2 ${
                      nameAlert
                        ? "focus:outline-primary-strawberryRed"
                        : "focus:outline-primary-marineBlue"
                    }`}
                    type="checkbox"
                    placeholder="e.g.Stephen King"
                  />
                </label>

                <span
                  className={`${
                    nameAlert ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute right-[10px]`}
                >
                  This field is required
                </span>
              </div>
            </div>
            {/*-------------- category-------------- */}
            <div className="flex flex-wrap">
              <div className="flex flex-col  w-[100%] sm:w-[50%]">
                <label className="text-primary-marineBlue font-[500] mb-0 sm:mb-2">
                  category
                </label>
                <input
                  onChange={(e) => setcategory(e.target.value)}
                  className={`${
                    categoryAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-3 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  type="text"
                  placeholder="e.g.General"
                />
                <span
                  className={`${
                    categoryAlert ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute right-[10px]`}
                >
                  This field is required
                </span>
              </div>
              {/* -----------  DOB ------------ */}
              <div className="flex flex-col w-[100%] sm:w-[50%]">
                <label className="text-primary-marineBlue font-[500]  mb-0 sm:mb-2">
                  DOB
                </label>
                <input
                  onChange={(e) => setDOB(e.target.value)}
                  className={`${
                    dobAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-3 outline outline-1 outline-neutral-lightGray rounded-[4px] `}
                  type="date"
                />
                <span
                  className={`${
                    dob ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute right-[10px]`}
                >
                  This field is required
                </span>
              </div>
            </div>

            {/*-------------- Email-------------- */}
            <div className="flex">
              <div className="flex flex-col w-[50%]">
                <label className="text-primary-marineBlue font-[500] mb-2">
                  Email Adress
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${
                    email
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-3 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  type="email"
                  placeholder="e.g.stephenking@lorem.com"
                />
                <span
                  className={`${
                    emailAlert ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute top-[100px] right-[10px]`}
                >
                  This field is required
                </span>
              </div>
              {/*--------------Number-------------- */}
              <div className="flex flex-col w-[50%]">
                <label className="text-primary-marineBlue font-[500] mb-2">
                  Phone Number
                </label>
                <input
                  onChange={(e) => setNumber(e.target.value)}
                  className={`${
                    numberAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-3 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  type="text"
                  placeholder="e.g. +1 234 567 890"
                />
                <span
                  className={`${
                    numberAlert ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute top-[200px] right-[10px]`}
                >
                  This field is required
                </span>
              </div>
            </div>
            {/* ----------- Address ------------- */}
            <div className="flex flex-col w-[100%]">
              <label className="text-primary-marineBlue font-[500] mb-1">
                Address
              </label>
              <input
                onChange={(e) => setaddress(e.target.value)}
                className={` ${
                  addressAlert
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } mb-3 outline outline-1 outline-neutral-lightGray rounded-[4px] w-[95%] p-7 `}
                type="text"
                placeholder="e.g.Address"
              />
              <span
                className={`${
                  name ? "inline" : "hidden"
                } text-primary-strawberryRed font-[500] top-[600px]  absolute right-[10px]`}
              >
                This field is required
              </span>
            </div>

            {/*-------------- State-------------- */}
            <div className="flex flex-wrap sm:flex-nowrap">
              <div className="flex flex-col w-[50%] ">
                <label className="text-primary-marineBlue font-[500] mb-2">
                  State
                </label>
                <input
                  onChange={(e) => setState(e.target.value)}
                  className={`${
                    StateAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-3 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  type="email"
                  placeholder="State"
                />
                <span
                  className={`${
                    StateAlert ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute top-[100px] right-[10px]`}
                >
                  This field is required
                </span>
              </div>
              {/*--------------City-------------- */}
              <div className="flex flex-col w-[50%]">
                <label className="text-primary-marineBlue font-[500] mb-2">
                  City
                </label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  className={`${
                    cityAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } mb-3 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
                  type="text"
                  placeholder="city"
                />
                <span
                  className={`${
                    cityAlert ? "inline" : "hidden"
                  } text-primary-strawberryRed font-[500] absolute top-[200px] right-[10px]`}
                >
                  This field is required
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end mt-[0px] sm:mt-[0px]">
            <button
              className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
              type="sumbit"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
