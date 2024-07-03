import React from 'react';
import Headings from '../utiliti/heading/Heading';

export const Bestfeaturs = () => {
  const features = [
    {
      icon: <i className="fa-regular fa-handshake" />, // Correctly use JSX for Font Awesome icons
      title: 'Online Courses',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: <i className="fa-regular fa-handshake" />,
      title: 'Earn A Certificates',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: <i className="fa-regular fa-handshake" />,
      title: 'Learn with Expert',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ];

  return (
    <section className="py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 flex items-stretch">
            <div
              className="w-full bg-cover bg-center about_img"
              // Uncomment and update the URL accordingly
              // style={{ backgroundImage: 'url(../../assets/about.jpg)' }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 flex items-center ps-10">
            <div className="mt-0">
              <Headings heading={'h4'} style={'inline-block tracking-wider'}>Learn with us</Headings>
              <Headings heading={'h2'} style={'inline-block tracking-wider'}>Benefits About<span className="text-primary"> TLT Expertise</span></Headings>
              <div className="mt-4">
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex items-stretch mb-4 border p">
                    <div className="flex">
                      <div className="icon mr-4">
                        {feature.icon} {/* Render the icon directly */}
                      </div>
                      <div>
                        <h2>{feature.title}</h2>
                        <p className="mb-0">{feature.description}</p>
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
