import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-100 bg-opacity-50 mx-14 my-3 hidden md:block rounded-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 ps-20 gap-8">
          <a className="text-red-500 font-semibold hover:text-red-500" href="#">Home</a>
          <a className="textWhite hover:text-red-500" href="/about">About</a>
          <a className="textWhite hover:text-red-500" href="#">Study Essentials</a>
          <a className="textWhite hover:text-red-500" href="#">Gallery</a>
        </div>
        <div className="relative flex space-x-4 items-center p-0 m-0">
          <div className="group relative">
            <button
              className="bg-primary text-white uppercase font-bold text-sm py-7 px-4 inline-block transition duration-300 ease-in-out hover:bg-[#e43f5d] m-0 rounded-e-md"
            >
              Registeration In
            </button>
            <div className="absolute top-full mt-2  bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <a className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md" href="#">Empowerment Batch</a>
              <a className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md" href="#">Fast Track Batch</a>
              <a className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md" href="#">JET</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
