import React from "react";
import Headings from "../utiliti/heading/Heading";
import phoneImg from "../../assets/gif/phone-call.png";
import emailImg from "../../assets/gif/mail.png";
import locationImg from "../../assets/gif/location.png";
import whtsapImg from "../../assets/gif/whatsapp.png";

const ContactDetails = () => {
  // Array of contact details objects
  const contactDetails = [
    {
      heading: "Contact :",
      icon: phoneImg,
      info: "9238176156",
    },
    {
      heading: "Location :",
      icon: locationImg,
      info:
        "2nd floor, Jyoti Talkies Shopping Complex, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462023",
    },
    {
        heading: "Email :",
        icon: emailImg,
        info: "support@thelawtales.com",
      },
  ];

  return (
    <section>
      <div className="bg-primary flex flex-wrap justify-center items-center mt-10">
        <div className="flex flex-wrap p-5">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className={`w-full md:w-[400px] text-white p-5 ${
                index === 1 ? "border-l-2 border-r-2 border-white" : ""
              }`}
            >
              <div className="flex flex-col items-center">
                <span>
                  <img src={detail.icon} alt="" className="w-10 h-10" />
                </span>
                <Headings style={"h4"}>{detail.heading}</Headings>
                <p className="text-white text-justify">{detail.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
