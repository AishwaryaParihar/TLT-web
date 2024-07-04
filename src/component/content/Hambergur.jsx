import React, { useState, useEffect } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsOpen(false); // Close menu when scrolled back to top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isScrolled && (
        <div className="fixed top-1/2 right-0 transform translate-y-[-50%] z-50">
          <div className="transform rotate-[-90deg]">
            <div
              className="bg-primary py-2 px-4 text-white border border-primary text-lg rounded-t-lg cursor-pointer"
              onClick={toggleMenu}
            >
              <span className="text-white">
                <i className="fas fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="fixed top-1/2 right-12 transform translate-y-[-50%] bg-white border border-gray-200 rounded shadow-lg p-4 z-40">
          <nav>
            <ul>
              <li className="mb-2">
                <a href="#home" className="text-gray-700">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-gray-700">About</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-gray-700">Services</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-gray-700">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
