import React from 'react';
import jeeterImage from '../assets/image/jeeter.png';
import cannaImage from '../assets/image/canna.png';
import destimoImage from '../assets/image/destimo.png';
import mrcImage from '../assets/image/mrc.png';
import arcImage from '../assets/image/arc.png';
import gedImage from '../assets/image/ged.png';
import icrImage from '../assets/image/icr.png';

const Trusted = () => {
  return (
    <div className="w-full h-auto bg-white justify-center items-center relative mb-7 flex md:mx-0">
      <div className="items-center justify-center w-full mx-52 md:mx-0 sm:mx-0 sm:px-5 md:px-5 lg:px-28 xl:px-60 2xl:px-[370px] h-auto flex flex-col p-10 space-y-4">
        {/* Top */}
        <div className="flex bg-white w-full">
          <div className="border-2 rounded-2xl shadow-xl flex flex-row sm:flex-col sm:space-y-5 md:space-y-0 justify-between md:flex-row items-center w-full p-5">
            <p className="text-sm w-[160px] text-[#4528B6] sm:w-auto md:w-1/4 md:h-auto">
              TRUSTED BY LEADING CANNABIS BRANDS
            </p>
            <div className="flex flex-row w-3/4 m-0 items-center md:justify-between sm:space-x-3 sm:w-auto sm:ml-0 md:space-x-24 lg:space-x-28">
              <img
                src={jeeterImage}
                alt="jeeter"
                loading="lazy"
                title="jeeter"
                className="w-[115px]"
              />
              <img
                src={cannaImage}
                alt="canna"
                loading="lazy"
                title="canna"
                className="w-[58px]"
              />
              <img
                src={destimoImage}
                alt="destimo"
                loading="lazy"
                title="destimo"
                className="w-[110px]"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div id="trustedService" className="flex justify-center items-center bg-white w-full md:px-7 lg:px-7 xl:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Market & Regulations Compliant */}
            <div className="border-2 rounded-2xl shadow-xl flex flex-col items-center justify-between py-3 px-3">
              <div className="p-2 flex flex-col items-center justify-between">
                <img
                  src={mrcImage}
                  alt="mcr"
                  loading="lazy"
                  title="mcr"
                  className="w-11"
                />
              </div>
              <p className="text-xs text-center text-[#4528B6]">
                MARKET & REGULATIONS COMPLIANT
              </p>
            </div>

            {/* Attorney Reviewed Content */}
            <div className="border-2 rounded-2xl shadow-xl flex flex-col items-center justify-between py-3 px-3">
              <div className="p-2 flex flex-col items-center justify-between">
                <img
                  src={arcImage}
                  alt="arc"
                  loading="lazy"
                  title="arc"
                  className="w-12"
                />
              </div>
              <p className="text-xs text-center text-[#4528B6]">
                ATTORNEY REVIEWED CONTENT
              </p>
            </div>

            {/* Guaranteed Email Deliverability */}
            <div className="border-2 rounded-2xl shadow-xl flex flex-col items-center justify-between py-3 px-3">
              <div className="p-2 flex flex-col items-center justify-between">
                <img
                  src={gedImage}
                  alt="ged"
                  loading="lazy"
                  title="ged"
                  className="w-14"
                />
              </div>
              <p className="text-xs text-center text-[#4528B6]">
                GUARANTEED EMAIL DELIVERABILITY
              </p>
            </div>

            {/* Increase Customers & Revenue */}
            <div className="border-2 rounded-2xl shadow-xl flex flex-col items-center justify-between py-3 px-3">
              <div className="p-2 flex flex-col items-center justify-between">
                <img
                  src={icrImage}
                  alt="icr"
                  loading="lazy"
                  title="icr"
                  className="w-12"
                />
              </div>
              <p className="text-xs text-center text-[#4528B6]">
                INCREASE CUSTOMERS & REVENUE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
