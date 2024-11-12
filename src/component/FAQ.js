import React, { useState, useRef, useEffect } from 'react';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [height, setHeight] = useState({});
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    const newHeights = {};
    contentRefs.current.forEach((ref, index) => {
      newHeights[index + 1] = ref ? ref.scrollHeight : 0;
    });
    setHeight(newHeights);
  }, [activeAccordion]);

  const accordionData = [
    {
      question: 'What do your service plans include?',
      answer: (
        <>
          <p className="mb-2 mt-10 font-light">
            Each of our service plans includes:
          </p>
          <ul className="list-disc pl-10 font-light mb-4">
            <li>A dedicated team including an Email Marketing Specialist, Copywriter, Designer, Email Marketing Technician, and Account Manager.</li>
            <li>Customer-centered marketing strategy with Customer Lifecycle Flows and Advanced Flows.</li>
            <li>Regular account audits and ongoing adjustments.</li>
            <li>Advanced segmentation and targeting.</li>
            <li>Optimized ROI and engagement.</li>
            <li>Customizable email and SMS communication from your Email Marketing Specialist.</li>
            <li>Comprehensive monthly campaign review.</li>
            <li>Monthly reports that are in-depth with common KPIs we track and prioritize for your account.</li>
          </ul>
        </>
      ),
    },
    {
      question: 'Which ESPs & eCommerce platforms do you work with?',
      answer: (
        <p className="mb-4 mt-10 font-light">
          We specialize in Klaviyo, one of the only platforms that allows Cannabis-related marketing. We work with Shopify, Shopify Plus, Magento, WooCommerce, and other eCommerce stores. Our expertise ensures compliance with cannabis industry regulations across all platforms.
        </p>
      ),
    },
    {
      question: 'How many emails come with my plan?',
      answer: (
        <p className="mb-4 mt-10 font-light">
          We have several plan options based on the number of emails you would like us to create for your strategy each month. Depending on your company & marketing objectives, your Account Executive will help you select the plan that best fits your needs.
        </p>
      ),
    },
    {
      question: 'What does onboarding look like?',
      answer: (
        <p className="mb-4 mt-10 font-light">
          The first thing we do is have you fill out a simple onboarding document. Then, we launch your project with a kick-off call where you meet your Email Marketing Specialist.
        </p>
      ),
    },
    {
      question: 'Is there a minimum commitment required for your services?',
      answer: (
        <p className="mb-4 mt-10 font-light">
          Absolutely not. We don’t believe in tying anyone down. If you stay, it’s because of the excellent service we provide, not a binding contract.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full h-auto bg-white py-20 relative" id="FAQ">
      <div className="w-full mx-auto flex flex-col items-center justify-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#4528B6] py-4 font-philadelphian sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {/* Accordion */}
        <div className="w-full space-y-4 h-auto sm:px-4 md:px-4 lg:px-16 xl:px-44 2xl:px-80">
          {accordionData.map((item, index) => (
            <div key={index} className="border shadow-sm rounded-2xl">
              <button
                className="w-full flex items-center justify-between p-4 text-[#4528B6] sm:text-lg text-xl font-normal"
                onClick={() => toggleAccordion(index + 1)}
              >
                {item.question}
                <span
                  className={`text-[#4528B6] transition-transform duration-200 ${
                    activeAccordion === index + 1 ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  height: activeAccordion === index + 1 ? `${height[index + 1]}px` : '0px',
                }}
                className="px-4 text-[#4528B6] overflow-hidden transition-all duration-500 ease-in-out"
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
