import React, { useState, useEffect } from 'react';
import logo from '../assets/image/logo.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    if (isScrolling) return;

    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(true);
      setIsDropdownOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full h-24 p-5 sm:h-32 md:h-20 lg:h-16 lg:px-5 xl:h-auto xl:px-28 2xl:px-60 flex flex-col sm:flex-row sm:justify-between sm:items-start md:px-5 items-center z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-lg opacity-90' : 'bg-transparent opacity-100'
      }`}
    >
      {/* Logo */}
      <div id="logo" className="flex flex-col items-center sm:w-full md:items-start">
        <img
          src={logo}
          alt="logo"
          title="logo"
          loading="lazy"
          className={`transition-all duration-300 ease-in-out ${
            isScrolled ? 'w-20 sm:w-24 md:w-24 lg:w-24 xl:w-28' : 'w-28 sm:w-32 md:w-32 lg:w-32 xl:w-36'
          }`}
        />
      </div>

      {/* Hamburger icon */}
      <div
        id="hamburgerMenu"
        className="right-0 bottom-0 top-0 left-0 md:top-0 sm:absolute sm:left-5 sm:top-8 md:relative md:mx-4 lg:relative xl:hidden flex items-center z-30"
      >
        <button
          onClick={toggleDropdown}
          className="relative text-black px-3 py-2 flex flex-col justify-center items-center"
        >
          <svg
            className={`h-8 w-8 sm:w-6 sm:h-6 text-[#4528B6] transform transition-all duration-300 ease-in-out ${
              isDropdownOpen ? 'rotate-45' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
              className={`transition-all duration-300 ease-in-out ${
                isDropdownOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
              className={`transition-all duration-300 ease-in-out ${
                isDropdownOpen ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        className={`${
          isDropdownOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'
        } absolute top-full right-0 mt-2 bg-[#4528B6] rounded-md shadow-lg w-full sm:w-4/5 sm:mr-32 md:w-4/5 md:mr-12 lg:w-4/5 lg:mr-16 transform transition-all duration-300 ease-in-out`}
      >
        <a onClick={() => scrollToSection('casestudies')} className="block px-4 py-2 text-sm text-white cursor-pointer">
          Case Studies
        </a>
        <a onClick={() => scrollToSection('whatwedo')} className="block px-4 py-2 text-sm text-white cursor-pointer">
          What We Do
        </a>
        <a onClick={() => scrollToSection('ourprocess')} className="block px-4 py-2 text-sm text-white cursor-pointer">
          Our Process
        </a>
        <a onClick={() => scrollToSection('FAQ')} className="block px-4 py-2 text-sm text-white cursor-pointer">
          FAQ
        </a>
      </div>

      {/* Navbar */}
      <div className="hidden xl:flex xl:w-[1000px]">
        <a onClick={() => scrollToSection('casestudies')} className="px-3 py-2 text-sm font-medium text-black cursor-pointer">
          Case Studies
        </a>
        <a onClick={() => scrollToSection('whatwedo')} className="px-3 py-2 text-sm font-medium text-black cursor-pointer">
          What We Do
        </a>
        <a onClick={() => scrollToSection('ourprocess')} className="px-3 py-2 text-sm font-medium text-black cursor-pointer">
          Our Process
        </a>
        <a onClick={() => scrollToSection('FAQ')} className="px-3 py-2 text-sm font-medium text-black cursor-pointer">
          FAQ
        </a>
      </div>

      {/* button */}
      <div className="right-0 bottom-0 top-0 left-0 md:top-0 sm:absolute sm:right-5 sm:top-8 sm:justify-end md:relative xl:relative md:w-[350px] lg:w-[320px] xl:w-[575px] flex items-center justify-center">
        <button
          onClick={() => scrollToSection('webpage')}
          className="px-4 py-1 sm:py-1.5 bg-[#4528B6] text-white border-2 border-transparent hover:border-[#4528B6] hover:bg-transparent hover:text-[#4528B6] text-sm rounded-full shadow-md"
        >
          INCREASE MY REVENUE
        </button>
      </div>
    </header>
  );
};

export default Header;
