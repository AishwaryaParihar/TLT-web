import React from 'react';
import Headings from '../utiliti/heading/Heading';

export const Bestfeaturs = () => {
  const features = [
    {
      icon: <i className="fa-regular fa-handshake" />, // Correctly use JSX for Font Awesome icons
      title: 'One-on-One Mentoring',
      description: "Each student at TLT Judicial Academy receives personalized attention through one-on-one mentoring sessions. This individualized approach ensures that every student's unique needs and challenges are addressed effectively.",
    },
    {
      icon: <i className="fa-regular fa-handshake" />,
      title: 'Result Centric Preparation',
      description: "We prioritize practical success by focusing on strategies and techniques that lead to favorable outcomes in judiciary examinations. Our tailored approach ensures that students are well-prepared to achieve their desired results.",
    },
    {
      icon: <i className="fa-regular fa-handshake" />,
      title: "Doubt Clearing Sessions with Quick redressal",
      description: "We understand the importance of addressing students' doubts promptly. That's why we offer dedicated doubt-clearing sessions with swift resolution, ensuring that no question goes unanswered and students can progress with confidence.",
    },
  ];

  return (
    <section className="py-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 flex items-stretch">
            <div
              className="w-full bg-cover bg-center about_img"
              // Uncomment and update the URL accordingly
              // style={{ backgroundImage: 'url(../../assets/about.jpg)' }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 flex items-center ps-0 md:ps-10">
            <div className="mt-0">
              <Headings heading={'h4'} style={'inline-block tracking-wider'}>Learn with us</Headings>
              <Headings heading={'h2'} style={'inline-block tracking-wider'}>Benefits About<span className="text-primary"> TLT Expertise</span></Headings>
              <div className="mt-4">
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex items-stretch mb-4 border p-4 hover:bg-red-400 hover:text-white hover:shadow-xl">
                    <div className="flex">
                      <div className="icon p-5 text-5xl">
                        {feature.icon} {/* Render the icon directly */}
                      </div>
                      <div>
                        <Headings heading={'h5'}>{feature.title}</Headings>
                        <p className="mb-0 text-gray">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestfeaturs;
