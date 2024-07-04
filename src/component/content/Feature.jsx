import React from "react";
import Headings from "../utiliti/heading/Heading";
import stylees from "./Feature.module.css";
import result from "../../assets/result3.jpg";
import studentf from "../../assets/students.jpg";
import doubt from "../../assets/doubt.jpg";

const facalitydata = [
  {
    fimg: "",
    fname: "Sole Faculty",
    fdescription:
      "Our emerging coaching academy prides itself on offering personalized attention and expert guidance with a sole faculty member. This ensures consistency and a deep understanding of each student's progress and needs.",
  },
  {
    fimg: "",
    fname: "Interactive Learning",
    fdescription:
      "Engaging sessions to enhance understanding of complex legal concepts.We are committed to staying at the forefront of educational trends by incorporating innovative learning methods into our curriculum. From interactive sessions to online resources, we provide students with a dynamic learning environment.",
  },
  {
    fimg: "",
    fname: "One-on-One Mentoring",
    fdescription:
      "Each student at TLT Judicial Academy receives personalized attention through one-on-one mentoring sessions. This individualized approach ensures that every student's unique needs and challenges are addressed effectively.",
  },
  {
    fimg: result,
    fname: "Result Centric Preparation",
    fdescription:
      "We prioritize practical success by focusing on strategies and techniques that lead to favorable outcomes in judiciary examinations. Our tailored approach ensures that students are well-prepared to achieve their desired results.",
  },
  {
    fimg: studentf,
    fname: "Student Friendly Ecosystem",
    fdescription:
      "Our academy fosters a supportive and inclusive environment where students feel comfortable and motivated to excel. We prioritize student satisfaction and strive to create a nurturing ecosystem conducive to learning and growth.",
  },
  {
    fimg: doubt,
    fname: "Doubt Clearing Sessions with Quick redressal",
    fdescription:
      "We understand the importance of addressing students' doubts promptly. That's why we offer dedicated doubt-clearing sessions with swift resolution, ensuring that no question goes unanswered and students can progress with confidence.",
  },
];
const Feature = () => {
  return (
    <>
      <div className="flex justify-center items-center  flex-wrap gap-5">
        {facalitydata.map((items, index) => (
          <div key={index} className={stylees.card}>
            <img className={stylees.imgbox} src={items.fimg} />
            <div className={stylees.content}>
              <div className={stylees.description}>
                <Headings heading={"h4"}>{items.fname}</Headings>
              </div>

              <div className="p-3">{items.fdescription}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feature;
