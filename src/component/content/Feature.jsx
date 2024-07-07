import React from "react";
import Headings from "../utiliti/heading/Heading";
import stylees from "./Feature.module.css";
import result from "../../assets/result3.jpg";
import studentf from "../../assets/students.jpg";
import doubt from "../../assets/doubt.jpg";
import OneOn from "../../assets/oneon.jpg";
import solo from "../../assets/solo.jpg";
import learning from "../../assets/interactive.jpg";
import study from "../../assets/studey.jpeg";
import mock from "../../assets/mock.jpg";

const facalitydata = [
  {
    fimg: solo,
    fname: "Solo Faculty",
    fdescription:
      "Our emerging coaching academy prides itself on offering personalized attention and expert guidance with a sole faculty member. This ensures consistency and a deep understanding of each student's progress and needs.",
  },
  {
    fimg: learning,
    fname: "Interactive Learning",
    fdescription:
      "We offer engaging sessions to enhance understanding of complex legal concepts, staying at the forefront of educational trends with innovative learning methods.Our curriculum includes interactive sessions & online resources, providing students with a dynamic learning environment.",
  },
  {
    fimg: OneOn,
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
      "Our academy fosters a supportive & inclusive environment where students feel comfortable & motivated to excel. We prioritize student satisfaction & strive to create a nurturing ecosystem conducive to learning & growth.",
  },
  {
    fimg: doubt,
    fname: "Doubt Clearing Sessions ",
    fdescription:
      "We understand the importance of addressing students' doubts promptly.That's why we offer dedicated doubt-clearing sessions with swift resolution, ensuring that no question goes unanswered & students can progress with confidence.",
  },
  {
    fimg: study,
    fname: "Updated & Hand-Picked Study Material",
    fdescription:
      "We understand the significance of quality study material in shaping a student's success.Therefore, we hand-pick study resources tailored to meet the demands of judiciary examinations.",
  },
  {
    fimg: mock,
    fname: "Mock Tests and Performance Analysis",
    fdescription:
      "Practice is key to success in judiciary exams. At TLT Judicial Academy, we emphasize regular mock tests and performance evaluations so students can assess progress, identify improvement areas, and refine their preparation.",
  },
];
const Feature = () => {
  return (
    <>
      <div className="flex justify-center items-center  flex-wrap gap-5 pb-16">
        {facalitydata.map((items, index) => (
          <div key={index} className={stylees.card}>
            <img className={stylees.imgbox} src={items.fimg} />
            <div className={stylees.content}>
              <div className={stylees.description}>
                <Headings heading={"h5"}>{items.fname}</Headings>
              </div>

              <div className={stylees.info}>{items.fdescription}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feature;
