import React from 'react';
import { privacyPolicyData } from './data/privacyPolicy';
import Headings from './utiliti/heading/Heading';

const PrivacyPolicy = () => {
    return (
        <div className="px-5 md:px-20 py-8">
            <Headings heading={'h2'} style="pb-10 text-shadow">
                <span className="text-primary">Privacy Policy</span> for TLT Judicial <span className="text-primary">Academy</span> Website
            </Headings>
            {privacyPolicyData.map((section, index) => (
                        <section key={index}>
                            <h2 className="text-2xl font-semibold mb-2 text-shadow">{section.title}</h2>
                            {section.details && (
                                <ul className="list-disc pl-6">
                                    {section.details.map((detail, idx) => (
                                        <li key={idx} className="mb-2">{detail}</li>
                                    ))}
                                </ul>
                            )}
                            {section.items && section.items.map((item, idx) => (
                                <div key={idx} className="mb-4">
                                    {item.subtitle && <h3 className="text-lg font-medium mb-2">{item.subtitle}</h3>}
                                    {item.details && (
                                        <ul className="list-disc pl-6">
                                            {item.details.map((detail, detailIdx) => (
                                                <li key={detailIdx} className="mb-2">{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                      
                </section>
            ))}
        </div>
    );
};

export default PrivacyPolicy;
