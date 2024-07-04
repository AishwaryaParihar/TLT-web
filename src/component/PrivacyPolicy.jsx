import React from 'react';
import { privacyPolicy } from './data/privacyPolicy';
import Headings from './utiliti/heading/Heading';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Headings heading={'h2'} style={"text-2xl font-bold mb-6"}>Privacy Policy for <span className="text-primary">TLT Judicial Academy </span> Website</Headings>
            {privacyPolicy.map((data, index) => (
                <section className="mb-6" key={index}>
                   <Headings heading={'h5'} >{data.title}</Headings>
                   <Headings heading={'h6'}>{data.subtitle}</Headings>
                   <ul>
                    <li>{data.details}</li>
                    <li>{data.details2}</li>
                    <li>{data.details3}</li>
                    <li>{data.details4}</li>
                   </ul>
                </section>
            ))}
        </div>
    );
};

export default PrivacyPolicy;
