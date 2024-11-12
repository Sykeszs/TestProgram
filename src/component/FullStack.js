import React from "react";
import clouds from "../assets/image/clouds.png";
import clouds1 from "../assets/image/clouds1.png";
import bg from "../assets/image/bg.jpeg";
import left from "../assets/image/left.png";
import right from "../assets/image/right.png";
import image1 from "../assets/image/what we do/image1.png";
import image2 from "../assets/image/what we do/image2.png";
import image3 from "../assets/image/what we do/image3.png";
import image4 from "../assets/image/what we do/image4.png";
import brandStrat from "../assets/image/what we do/brandStrat.png";
import copywriting from "../assets/image/what we do/copywriting.png";
import emailDesign from "../assets/image/what we do/emailDesign.png";
import klaviyoManagement from "../assets/image/what we do/klaviyoManagement.png";

const FullStack = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
    return (
        <div className="relative overflow-hidden w-full h-auto">
            {/* Background Images */}
            <img
                src={bg}
                alt="Background"
                title="Background"
                loading="lazy"
                className="absolute inset-0 opacity-50 w-full h-full object-cover"
            />
            <img
                src={clouds}
                alt="Clouds"
                title="Clouds"
                loading="lazy"
                className="absolute z-10 top-[-200px] sm:top-[-90px] md:top-[-120px] lg:top-[-180px] xl:top-[-220px] 2xl:top-[-220px]"
            />
            <img
                src={clouds1}
                alt="Clouds 1"
                title="Clouds 1"
                loading="lazy"
                className="absolute z-10 bottom-[-200px] sm:bottom-[-90px] md:bottom-[-120px] lg:bottom-[-180px] xl:bottom-[-220px] 2xl:bottom-[-220px]"
            />
            <div className="w-full h-auto items-center justify-between flex absolute z-20 bottom-0">
                <img
                    src={left}
                    alt="Left"
                    title="Left"
                    loading="lazy"
                    className="w-72"
                />
                <img
                    src={right}
                    alt="Right"
                    title="Right"
                    loading="lazy"
                    className="w-72"
                />
            </div>

            {/* Main Content */}
            <div className="w-full h-auto flex flex-col items-center justify-center relative z-30 space-y-5 py-16 px-44 sm:px-4 md:px-4 lg:px-4">
                <h3 className="text-[#4528B6] font-philadelphian text-3xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
                    FULL STACK EMAIL & SMS
                </h3>
                <p className="text-xl font-light px-32 text-center sm:text-base sm:px-0 md:px-0 xl:px-72 2xl:px-[420px]">
                We create your strategy, craft compelling copy, design engaging emails, and constantly measure, analyze, test, and optimize
                your campaigns to keep your brand ahead of the competition.
                </p>

                {/* Service */}
                <div className="flex flex-col w-full px-5 sm:px-0 md:px-0 lg:px-14 xl:px-48 2xl:px-80">
    {[
        {
            image: image1,
            icon: brandStrat,
            title: "Brand Strategy",
            description:
                "Our team understands the cannabis industry's unique regulations and challenges. We create tailored strategies to increase your brand’s presence and revenue, while ensuring full compliance.",
        },
        {
            image: image2,
            icon: copywriting,
            title: "Copywriting",
            description:
                "We craft engaging, compliant copy that resonates with your audience and adheres to industry regulations. Overcome the limitations of social media and paid ads with our expert copy.",
        },
        {
            image: image3,
            icon: emailDesign,
            title: "Email Design",
            description:
                "Our designs stand out and drive engagement, focusing on creativity and compliance. Navigate email provider restrictions with our expertly crafted emails.",
        },
        {
            image: image4,
            icon: klaviyoManagement,
            title: "Klaviyo Management",
            description:
                "Leave the heavy lifting to us! We manage your Klaviyo account, ensuring optimal performance and compliance with cannabis industry regulations.",
        },
    ].map((service, index) => (
        <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-2xl p-5 mb-5 shadow-lg"
        >
            <img
                src={service.image}
                alt={service.title}
                title={service.title}
                loading="lazy"
                className="w-full md:w-1/3 lg:w-[34%] xl:w-[34%] 2xl:w-[35%] mb-5 md:mb-0 md:mr-10 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-center w-full md:w-2/3">
                <div className="flex flex-row items-center mb-3">
                    <img
                        src={service.icon}
                        alt={service.title}
                        title={service.title}
                        loading="lazy"
                        className="w-12 h-12 mr-4"
                    />
                    <h3 className="text-[#4528B6] text-xl md:text-xl lg:text-xl xl:text-2xl">
                        {service.title}
                    </h3>
                </div>
                <p className="text-sm text-[#4528B6]">
                    {service.description}
                </p>
            </div>
        </div>
    ))}
</div>

                {/* Button */}
                <button
                    onClick={() => scrollToSection('webpage')}
                    className="px-5 py-3 bg-[#4528B6] text-white border-2 border-transparent hover:border-[#4528B6] hover:bg-transparent hover:text-[#4528B6] text-base rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Free Consultation
                </button>
            </div>
        </div>
    );
};

export default FullStack;
