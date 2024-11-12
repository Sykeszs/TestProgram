import React from 'react';
import topBroke from '../assets/image/topbroke.png';
import cannaBg from '../assets/image/canna-bg.png';
import botBroke from '../assets/image/botbroke.png';
import img1 from '../assets/image/img1.png';
import img2 from '../assets/image/img2.png';
import img3 from '../assets/image/img3.png';

const CaseStudies = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='casestudies' className="relative overflow-hidden w-full h-auto flex">
      {/* Background Image */}
      <img
        src={cannaBg}
        alt="Background"
        title="Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Main Content */}
      <div className="w-full h-auto flex flex-col items-center justify-center relative z-10 space-y-5 space-x-0 m-0 px-52 py-28 sm:py-12 sm:px-5 md:px-5 2xl:px-80">
        {/* Title */}
        <div id="content" className="w-full h-auto flex flex-col items-center justify-center relative sm:space-y-4 md:space-y-4 lg:space-y-4 xl:space-y-4 2xl:space-y-4">
          <h3 className="text-white sm:text-2xl font-philadelphian md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
            OUR SUCCESS STORIES
          </h3>
          <h1 className="text-white text-base">
            WILL YOU BE NEXT?
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 m-0 p-0 w-full h-[310px] sm:h-auto md:h-[710px] lg:h-[800px] xl:h-[310px] gap-4 sm:grid-cols-1 md:px-7 md:grid-cols-2 lg:px-12 lg:grid-cols-2 xl:grid-cols-3 xl:px-44 2xl:p-0">
          {/* Card 1 */}
          <div className="flex flex-col justify-center items-center bg-white rounded-xl space-y-3 p-2 sm:ml-0 sm:p-4 lg:p-4 md:ml-0 md:p-4 lg:ml-10 xl:h-[310px] xl:ml-0">
            <img
              src={img1}
              alt="img1"
              title="img1"
              loading="lazy"
              className="w-[250px] sm:w-[600px] md:w-[300px] lg:w-[365px] xl:w-[250px]"
            />
            <p className="text-[#4528B6] text-center sm:text-xl md:text-2xl lg:text-xl">Jeeter Cannabis</p>
            <button
              onClick={() => scrollToSection('webpage')}
              className="py-3 bg-[#4528B6] text-white border-2 border-transparent hover:border-[#4528B6] hover:bg-transparent hover:text-[#4528B6] text-sm rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mx-10 sm:w-full md:w-24 lg:w-24 xl:w-24 2xl:w-24"
            >
              EXPLORE
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-center bg-white rounded-xl space-y-3 p-2 sm:ml-0 sm:p-4 md:mr-0 md:p-4 lg:p-4 lg:mr-10 xl:h-[310px] xl:mr-0">
            <img
              src={img2}
              alt="img2"
              title="img2"
              loading="lazy"
              className="w-[250px] sm:w-[600px] md:w-[300px] lg:w-[365px] xl:w-[250px]" 
            />
            <p className="text-[#4528B6] text-center sm:text-xl md:text-2xl lg:text-xl">Destino Farms</p>
            <button
              onClick={() => scrollToSection('webpage')}
              className="py-3 bg-[#4528B6] text-white border-2 border-transparent hover:border-[#4528B6] hover:bg-transparent hover:text-[#4528B6] text-sm rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mx-10 sm:w-full md:w-24 lg:w-24 xl:w-24 2xl:w-24"
            >
              EXPLORE
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-center bg-white space-y-3 rounded-xl p-2 sm:ml-0 sm:p-4 md:self-end md:justify-self-center md:col-span-2 md:p-4 lg:p-4 lg:w-[395px] lg:col-span-2 xl:col-span-1 xl:h-[310px] self-center lg:self-end lg:justify-self-center xl:w-auto">
            <img
              src={img3}
              alt="img3"
              title="img3"
              loading="lazy"
              className="w-[250px] sm:w-[600px] md:w-[300px] lg:w-[365px] xl:w-[250px]"
            />
            <p className="text-[#4528B6] text-center sm:text-xl md:text-2xl lg:text-xl">CannaWholesalers</p>
            <button
              onClick={() => scrollToSection('webpage')}
              className="py-3 bg-[#4528B6] text-white border-2 border-transparent hover:border-[#4528B6] hover:bg-transparent hover:text-[#4528B6] text-sm rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mx-10 sm:w-full md:w-24 lg:w-24 xl:w-24 2xl:w-24"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>

      {/* Top Image */}
      <div className="absolute -top-10 left-0 right-0 z-10">
        <img
          src={topBroke}
          alt="topbroke"
          title="topbroke"
          loading="lazy"
          className="w-full object-cover"
        />
      </div>

      {/* Bottom Image */}
      <div className="absolute -bottom-10 left-0 right-0 z-10">
        <img
          src={botBroke}
          alt="botbroke"
          title="botbroke"
          loading="lazy"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default CaseStudies;
