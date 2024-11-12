import React from 'react';
import waterImage from '../assets/image/water.png';
import plantImage from '../assets/image/plant.png';
import blurImage from '../assets/image/blur.png';
import bgImage from '../assets/image/bg.jpeg';

const MainPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='webpage' className="relative overflow-hidden w-full h-auto">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        title="Background"
        loading="lazy"
        className="absolute inset-0 opacity-50 w-full h-full object-cover"
      />
      
      <div className="w-full h-auto flex flex-col items-center justify-center relative z-10 space-y-5">
        {/* Main Content */}
        <div id='content' className="w-full h-auto items-center justify-center flex flex-col px-5 mt-40 relative sm:space-y-2  flex-shrink-0 md:space-y-3 lg:space-y-3 xl:space-y-4 2xl:px-60 2xl:space-y-3">
          <h3 className="text-[#4528B6] sm:text-2xl font-philadelphian md:text-3xl xl:text-4xl 2xl:text-4xl">EMAIL & SMS EXPERTS FOR</h3>
          <h1 className="sm:text-4xl md:leading-[48px] md:text-[44px] xl:text-6xl 2xl:text-6xl font-philadelphian">CANNABIS BRANDS</h1>
            <p className="leading-5 text-xs font-light px-5 text-center my-4 sm:mx-0 md:text-sm md:leading-6 xl:px-48 2xl:px-28">
              We specialize in crafting compliant, results-driven email and SMS campaigns specifically for cannabis brands.
              We help you overcome social media restrictions, banned substance regulations, and email provider limitations.
              Boost your brand's revenue, engage your customers, and turn your email subscribers into loyal customers.
            </p>
          <div className="relative z-30 flex flex-row justify-center md:flex-row space-x-4 sm:flex-col md:space-x-4 md:space-y-0 sm:space-x-0 sm:space-y-4 sm:w-full 2xl:mb-3 2xl:space-x-5">
            <button
                onClick={() => scrollToSection('webpage')}
                className="px-5 py-3 md:py-2 md:px-2 lg:py-3 lg:px-4 xl:py-3 xl:px-5 2xl:py-3 2xl:px-2 bg-[#4528B6] text-white border-2 border-transparent hover:border-[#4528B6] hover:bg-transparent hover:text-[#4528B6] text-base rounded-lg shadow-md 2xl:text-sm"
            >
                INCREASE MY REVENUE
            </button>
            <button
                onClick={() => scrollToSection('webpage')}
                className="px-5 py-3 md:py-2 md:px-2 lg:py-3 lg:px-4 xl:py-3 xl:px-5 2xl:py-3 2xl:px-2 text-black text-base rounded-lg border-2 border-black hover:bg-black hover:text-white 2xl:text-sm"
            >
                HOW IT WORKS
            </button>
        </div>
        </div>
          <div id='image' className="flex w-full h-[250px] md:h-[400px] 2xl:h-[400px] items-end justify-center overflow-hidden">
                    <img
                      src={waterImage}
                      alt="design"
                      title="water"
                      loading="lazy"
                      className="relative inset-0 w-full h-full object-cover z-10"
                    />
                    <img
                      src={plantImage}
                      alt="plant"
                      title="plant"
                      loading="lazy"
                      className="h-auto w-[50%] md:w-[78%] lg:w-[58%] xl:w-[46%] 2xl:w-[38%] z-20 absolute"
                    />
                    <img
                      src={blurImage}
                      alt="blur"
                      title="blur"
                      loading="lazy"
                      className="h-auto w-full absolute z-30"
                    />
            </div>
      </div>
    </div>
  );
};

export default MainPage;
