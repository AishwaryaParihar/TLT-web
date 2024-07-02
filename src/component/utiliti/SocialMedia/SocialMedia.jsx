import React from 'react';

const SocialMedia = () => {
  return (
    <>
      <a href="#" className="w-12 h-12 bg-gray-100 bg-opacity-50  border-2 border-primary rounded-full flex items-center justify-center  transform hover:scale-109 hover:bg-red-600 hover:border-primary hover:text-primary transition-colors duration-500">
        <i className="fab fa-facebook-f text-white p-6 fa-xl transition-colors duration-500   hover:text-primary"></i>
      </a>

      <a href="#" className="w-12 h-12 bg-primary border-2 border-primary rounded-full flex items-center justify-center  transform hover:scale-109 hover:bg-white hover:border-primary hover:text-primary transition-colors duration-500">
        <i className="fab fa-instagram text-white p-6 fa-xl transition-colors duration-500   hover:text-primary"></i>
      </a>

      <a href="#" className="w-12 h-12 bg-primary border-2 border-primary rounded-full flex items-center justify-center  transform hover:scale-109 hover:bg-white hover:border-primary hover:text-primary transition-colors duration-500">
        <i className="fab fa-linkedin-in text-white p-6 fa-xl transition-colors duration-500   hover:text-primary"></i>
      </a>

      <a href="#" className="w-12 h-12 bg-primary border-2 border-primary rounded-full flex items-center justify-center  transform hover:scale-109 hover:bg-white hover:border-primary hover:text-primary transition-colors duration-500">
        <i className="fab fa-twitter text-white p-6 fa-xl transition-colors duration-500   hover:text-primary"></i>
      </a>
    </>
  );
};

export default SocialMedia;
