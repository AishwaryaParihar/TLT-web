import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(2); // Set initial active tab (0: Foundation, 1: Fast-Track, 2: Crash Course)

  const tabContent = [
    {
      title: "Foundation Batch",
      content: (
        <div className="leading-loose">
          <span>• Comprehensive batch covering foundation subjects for all state judicial services examination</span><br />
          <span>• Especially designed to build a concrete conceptual clarity</span><br />
          <span>• Exhaustive dictation and note making</span><br />
          <span>• Aid in semester exam preparation</span><br />
          <span>• Validity: 12+3 Months</span><br />
        </div>
      ),
    },
    {
      title: "Fast-Track Batch",
      content: (
        <div className="leading-loose">
          <span>• Especially curated for short and rapid preparation</span><br />
          <span>• Subject coverage through rigorous practice and regular tests</span><br />
          <span>• Target-based revision</span><br />
          <span>• Validity: 6 Months</span><br />
          <span>• Validity: 3 Months (From the date of notification)</span><br />
        </div>
      ),
    },
    {
      title: "Crash Course Batch",
      content: (
        <div className="leading-loose">
          <span>• Rapid revision batches targeting prelims exams</span><br />
          <span>• Tips and tricks to master a variety of MCQs</span><br />
          <span>• Skeleton notes for last-minute revision</span><br />
          <span>• Rigorous MCQ practice</span><br />
          <span>• Validity: 3 Months (From the date of notification)</span><br />
        </div>
      ),
    },
  ];

  return (
    <section className="about-us" id="about">
      <div className="container mx-auto py-16">
        <div className="flex flex-col items-center">
          <div className="text-center mb-12">
            <h6 className="text-lg text-gray-600">About Us</h6>
            <h4 className="text-3xl font-semibold">Know Us Better</h4>
          </div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3">
              <div className="tabs">
                <div className="flex justify-center mb-6">
                  <div className="menu flex space-x-4">
                    {tabContent.map((tab, index) => (
                      <div
                        key={index}
                        className={`gradient-border cursor-pointer py-2 px-4 rounded ${activeTab === index ? 'bg-gray-200' : ''}`}
                        onClick={() => setActiveTab(index)}
                      >
                        <span>{tab.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="nacc bg-white p-6 rounded shadow-md">
                  {tabContent[activeTab].content}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-10 lg:mt-0 lg:pl-10">
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-semibold">Traditional methods to achieve great Heights/ Building a Gurukul to embrace the Judiciary Students</h4>
                <p className="mt-5">
                  At TLT Judicial Academy, we are proud to be an emerging institute dedicated to nurturing aspiring judiciary professionals. We envision our academy as a modern-day gurukul, where judiciary aspirants are embraced with innovative learning methods, unparalleled mentorship, and meticulously curated study material.
                </p>
                <div className="mt-5">
                  <a href="#" className="inline-block bg-green-500 text-white py-2 px-4 rounded">Chat with Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
