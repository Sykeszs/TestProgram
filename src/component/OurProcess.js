import React from 'react';
import cloudsImg from '../assets/image/clouds.png';
import ourProcessImg from '../assets/image/ourprocess.png';
import botCloudsImg from '../assets/image/botclouds.png';
import process1Img from '../assets/image/process/process1.png';
import process2Img from '../assets/image/process/process2.png';
import process3Img from '../assets/image/process/process3.png';
import process4Img from '../assets/image/process/process4.png';
import process5Img from '../assets/image/process/process5.png';
import process6Img from '../assets/image/process/process6.png';

const OurProcess = () => {
  return (
    <div
      id="ourprocess"
      className="relative overflow-hidden w-full h-auto bg-cover bg-center"
      style={{
        background: 'linear-gradient(to bottom, #4528B6, #1E1250)',
      }}
    >
      {/* Top Cloud Image */}
      <img
        src={cloudsImg}
        alt="Top Clouds"
        title="Top Clouds"
        loading="lazy"
        className="absolute sm:top-[-90px] md:top-[-110px] lg:top-[-160px] xl:top-[-200px] 2xl:top-[-200px] w-full z-10"
      /> 

      {/* Bottom Cloud Image */}
      <img
        src={botCloudsImg}
        alt="Bottom Clouds"
        title="Bottom Clouds"
        loading="lazy"
        className="absolute sm:bottom-[-20px] md:bottom-[-20px] xl:bottom-[-70px] 2xl:bottom-[-70px] w-full z-10"
      />

      {/* Our Process Content */}
      <div className="relative flex flex-col items-center justify-center w-full h-full z-20 text-center sm:py-12 sm:px-0 md:py-20 lg:px-16 xl:py-40 xl:px-44 2xl:py-40 2xl:px-80 space-y-5">
        <p className="text-2xl sm:text-2xl md:text-4xl text-white xl:text-4xl 2xl:text-4xl font-philadelphian">
          OUR PROCESS
        </p>
        <p className="text-white max-w-xs sm:max-w-md sm:text-sm md:text-md text-base xl:px-10 2xl:px-10">
          Ready to grow your cannabis brand? Here's how we work together:
        </p>

        {/* Process Cards */}
        <div className="grid gap-5 px-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          {processItems.map((item, index) => (
            <ProcessCard key={index} item={item} />
          ))}
        </div>

        {/* Button */}
        <button className="mt-8 sm:text-sm sm:p-3 xl:text-sm xl:p-4 2xl:p-4 bg-white text-[#4528B6] text-base rounded-lg shadow-md focus:outline-none">
          GET STARTED NOW
        </button>

        {/* Our Process Image */}
        <img
          src={ourProcessImg}
          alt="Our Process"
          title="Our Process"
          loading="lazy"
          className="hidden xl:block absolute z-20 w-[50%] xl:w-[55%] 2xl:w-[55%] opacity-80 sm:scale-100 md:scale-110 xl:ml-48 xl:top-72 2xl:ml-60 2xl:top-96"
        />
      </div>
    </div>
  );
};

const ProcessCard = ({ item }) => (
  <div
    className="flex flex-col rounded-2xl items-center justify-between w-full sm:py-5 sm:px-2 sm:space-y-3 md:space-y-3 md:py-10 md:px-2 lg:space-y-2 lg:px-4 lg:py-9 xl:mt-20 xl:space-y-2 xl:px-5 xl:py-9 2xl:mt-40 2xl:space-y-2 2xl:px-5 2xl:py-8 h-auto"
    style={{ backgroundColor: '#29147B' }}
  >
    <img
      src={item.image}
      alt={item.alt}
      title={item.title}
      loading="lazy"
      className="w-16 2xl:w-[75px]"
    />
    <p className="text-white text-base my-1">{item.title}</p>
    <p className="text-white font-extralight text-xs">{item.description}</p>
  </div>
);


const processItems = [
  {
    image: process1Img,
    alt: 'process1',
    title: 'Email Marketing Audit',
    description:
      'Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit.',
  },
  {
    image: process2Img,
    alt: 'process2',
    title: 'Consultation & Strategy Call',
    description:
      'We craft a customized strategy plan on how to best market your brand. Learn about our expertise, services offered, and how we can help scale your business.',
  },
  {
    image: process3Img,
    alt: 'process3',
    title: 'Onboarding & Kickoff Call',
    description:
      'Once you are ready to partner with us, we get you onboarded and get the party started. We get your sales and customer engagement high as a kite.',
  },
  {
    image: process4Img,
    alt: 'process4',
    title: 'Split test, Analyze, and Improve Performance',
    description:
      'We review performance data, make improvements, and constantly split-test to achieve better metrics over time.',
  },
  {
    image: process5Img,
    alt: 'process5',
    title: 'Launch Campaigns & Flows',
    description:
      'We get your campaigns and automations live and generating revenue, engagement, and customers.',
  },
  {
    image: process6Img,
    alt: 'process6',
    title: 'Produce First Designs',
    description:
      'Within the first few days, we deliver the initial email design drafts. You provide feedback, and we revise as needed.',
  },
];

export default OurProcess;
