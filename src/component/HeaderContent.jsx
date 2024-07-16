import React from 'react';
import Headings from './utiliti/heading/Heading';
import Button from './utiliti/buttons/Button';
import { Link } from 'react-router-dom';
import NotificationBox from './content/NotificationBox';

export const HeaderContent = ({ isHome }) => {


  return (
    <div>
      {isHome ? (
        <div className="my-20">
          <div className="mx-5 md:mx-20">
            <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <div className="uppercase font-semibold text-xs inline-block tracking-wider">
                  <Headings heading={'h6'} style={'text-shadow'}>
                    WELCOME TO TLT JUDICIAL ACADEMY
                  </Headings>
                </div>
                <Headings heading={'h1'} style={'tracking-wider text-shadow'}>
                  Best <br /> <span className="text-primary">Education</span> Expertise
                </Headings>
                <p className="tracking-wider py-3">
                  Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="w-full md:w-1/2">
              <NotificationBox/>
              </div>
            </div>
            {/* <div className="flex gap-2 py-3">
              <Link to="/contact-support"><Button color="red">
                get started now <i className="fa-solid fa-arrow-right"></i>
              </Button></Link>
              <Link to="study-Essentials"><Button  color="white">
                view course <i className="fa-solid fa-arrow-right"></i>
              </Button></Link>
            </div> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
