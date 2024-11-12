import React from 'react';
import logo from '../assets/image/logo.png';

const Footer = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ backgroundColor: '#dddddd' }} className="text-white sm:py-5 md:py-5 lg:py-7 xl:py-7 2xl:py-7">
      <div className="container mx-auto px-4 text-center sm:space-y-4 md:space-y-4">
        {/* Logo */}
        <div className="mb-6">
          <img src={logo} alt="Logo" className="sm:w-36 lg:w-36 xl:w-36 2xl:w-40 mx-auto" />
        </div>

        {/* Navigation Links */}
        <div className="mb-6 font-light sm:space-y-5 md:space-y-5 lg:space-y-3 2xl:space-y-5">
          <a
            href="#casestudies"
            onClick={(e) => scrollToSection(e, 'casestudies')}
            className="block text-xs lg:text-sm xl:text-sm 2xl:text-sm text-black hover:text-[#4528B6] transition-all duration-300"
          >
            Case Studies
          </a>
          <a
            href="#whatwedo"
            onClick={(e) => scrollToSection(e, 'whatwedo')}
            className="block text-xs lg:text-sm xl:text-sm 2xl:text-sm text-black hover:text-[#4528B6] transition-all duration-300"
          >
            What We Do
          </a>
          <a
            href="#ourprocess"
            onClick={(e) => scrollToSection(e, 'ourprocess')}
            className="block text-xs lg:text-sm xl:text-sm 2xl:text-sm text-black hover:text-[#4528B6] transition-all duration-300"
          >
            Our Process
          </a>
          <a
            href="#FAQ"
            onClick={(e) => scrollToSection(e, 'FAQ')}
            className="block text-xs lg:text-sm xl:text-sm 2xl:text-sm text-black hover:text-[#4528B6] transition-all duration-300"
          >
            FAQ
          </a>
        </div>

        {/* Button */}
        <div className="mb-5">
          <button
            onClick={(e) => scrollToSection(e, 'webpage')}
            className="px-5 py-2 bg-[#4528B6] text-white border-2 border-transparent hover:border-[#4528B6] hover:bg-transparent hover:text-[#4528B6] text-xs md:py-2.5 lg:py-2 lg:px-4 xl:py-2 2xl:py-2 2xl:text-sm rounded-full shadow-md hover:bg-[#4A2CB3] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            INCREASE MY REVENUE
          </button>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-500 sm:my-8 sm:mx-2 xl:mx-28 2xl:mx-60"></div>

        {/* Copyright */}
        <div className="text-xs lg:text-[10px] text-black">
          <p>&copy;BLOSSOM TREES — ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
