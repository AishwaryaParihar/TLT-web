import React from 'react';
import logo from '../assets/TLTlogo.png';
import Headings from './utiliti/heading/Heading';
import SocialMedia from './utiliti/SocialMedia/SocialMedia';

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="md:col-span-1 flex items-center justify-center">
                        <img src={logo} alt="Company Logo" className="h-12 md:h-20" />
                        <Headings heading={'h6'} style={'uppercase pl-4'}>  <span className="text-red-500">tlt </span> judicial <br /> academy</Headings>
                    </div>
                    {/* Links Sections */}
                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Help Center */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-2">
                                   <span className="text-red-500 text-xs"><i class="fa-solid fa-arrow-right-long"></i></span> <a href="#" className="hover:text-red-500">Discord Server</a>
                                </li>
                                <li className="mb-2">
                                <span className="text-red-500 text-xs"><i class="fa-solid fa-arrow-right-long"></i></span>  <a href="#" className="hover:text-red-500">Twitter</a>
                                </li>
                                <li className="mb-2">
                                <span className="text-red-500 text-xs"><i class="fa-solid fa-arrow-right-long"></i></span>    <a href="#" className="hover:text-red-500">Facebook</a>
                                </li>
                                <li className="mb-2">
                                <span className="text-red-500 text-xs"><i class="fa-solid fa-arrow-right-long"></i></span>   <a href="#" className="hover:text-red-500">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        {/* Legal */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-2">
                                <span className="text-red-500 text-xs"><i class="fa-solid fa-arrow-right-long"></i></span>   <a href="#" className="hover:text-red-500">Privacy Policy</a>
                                </li>
                                <li className="mb-2">
                                <span className="text-red-500 text-xs"><i class="fa-solid fa-arrow-right-long"></i></span>   <a href="#" className="hover:text-red-500">Licensing</a>
                                </li>
                                <li className="mb-2">
                                <span className="text-red-500 text-xs"><i class="fa-solid fa-arrow-right-long"></i></span>   <a href="#" className="hover:text-red-500">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                        {/* Download */}
                        <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social Media</h2>
                          <div className="flex flex-wrap gap-2"> <SocialMedia/></div>
                        </div>
                    </div>
                </div>
                {/* Divider and Copyright */}
                <hr className="my-6 border-red-200 sm:mx-auto dark:border-red-700" />
                <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                Copyright   &copy; {new Date().getFullYear()} <a href="https://flowbite.com/" className="hover:underline">TLT </a>. All Rights Reserved  | This website is made with ❤ by SSS Techies
                </p>
            </div>
        </footer>
    );
};

export default Footer;
