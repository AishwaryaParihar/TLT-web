import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-100 bg-opacity-50  mx-14 my-8">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 ps-20 gap-8">
          <a className="textWhite font-semibold" href="#">Home</a>
          <a className="textWhite" href="#">All Courses</a>
          <a className="textWhite" href="#">About</a>
          <a className="textWhite" href="#">Team</a>
        </div>
        <div className="flex space-x-4 items-center p-0 m-o">
          <a href="#" className="bg-primary text-white  uppercase font-bold text-sm py-7 px-4  inline-block transition duration-300 ease-in-out hover:bg-[#e43f5d] m-0">Get Certificate</a>
    
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
