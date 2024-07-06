import React from 'react';
import 'tailwindcss/tailwind.css';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="form-container ">
      <div className="form-box flex justify-center items-center min-h-screen">
        <div className="container-main shadow p-6 rounded-lg max-w-lg mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-center mb-6">Contact Us</h2>
          <form action="#">
            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
                <input
                  type="text"
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Your Name</label>
                <div className="underline"></div>
              </div>
              <div className="input-data w-full relative">
                <input
                  type="tel"
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Contact No.</label>
                <div className="underline"></div>
              </div>
            </div>
            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
                <input
                  type="email"
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Email ID</label>
                <div className="underline"></div>
              </div>
            </div>
            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative textarea">
                <textarea
                  className="block w-full focus:border-red-500 outline-none"
                  required
                ></textarea>
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Message</label>
                <div className="underline"></div>
              </div>
            </div>
            <div className="form-row submit-btn flex justify-center">
              <button
                type="submit"
                className="relative inline-block text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 font-semibold py-2 px-4 rounded-full transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
