import React from 'react';
import attentive from '../assets/image/attentive.png';
import bigcommerce from '../assets/image/bigcommerce.png';
import shopify from '../assets/image/shopify.png';
import opensend from '../assets/image/opensend.png';
import klaviyo from '../assets/image/klaviyo.png';

const WhatWeDo = () => {
  return (
    <div id="whatwedo" className="flex flex-col w-full h-auto mt-16 mb-36">
      <div className="justify-center items-center flex mb-6">
        <p className="text-[#4528B6] text-center font-bold sm:text-3xl text-4xl">OUR TECH PARTNERS</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto sm:mx-4 sm:gap-3 md:mx-20 md:gap-3 xl:mx-52 2xl:mx-64">
        <img
          src={attentive}
          alt="attentive"
          title="attentive"
          loading="lazy"
          className="w-36 mx-auto sm:w-auto md:w-auto"
        />
        <img
          src={bigcommerce}
          alt="bigcommerce"
          title="bigcommerce"
          loading="lazy"
          className="w-36 mx-auto sm:w-auto md:w-auto"
        />
        <img
          src={shopify}
          alt="shopify"
          title="shopify"
          loading="lazy"
          className="w-36 mx-auto sm:w-auto md:w-auto"
        />
        <img
          src={opensend}
          alt="opensend"
          title="opensend"
          loading="lazy"
          className="w-36 mx-auto sm:w-auto md:w-auto"
        />

        <div className="sm:col-span-2 md:col-span-2 lg:col-span-1 flex justify-center">
          <img
            src={klaviyo}
            alt="klaviyo"
            title="klaviyo"
            loading="lazy"
            className="w-36 mx-auto sm:w-1/2 md:w-1/2 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
