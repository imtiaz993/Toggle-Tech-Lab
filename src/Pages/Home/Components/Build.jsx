import React from "react";

const Build = () => {
  return (
    <div className="mt-20 pt-16 border-t border-dark-grey">
      <p className="text-base uppercase text-gold">About Us</p>
      <h1 className="text-white text-3xl mt-4 mb-8">We build for</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gradient rounded-xl flex flex-col items-center mb-8">
          <div className="relative bottom-8 left-4">
            <img className="w-3/4" src="/images/Home/We Build-1.png" alt="" />
            <p className="text-xl text-white mt-4 ">Meta Quest</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl flex flex-col items-center mb-8">
          <div className="relative bottom-16 left-8">
            <img className="w-3/4" src="/images/Home/We Build-2.png" alt="" />
            <p className="text-xl text-white mt-4 ">Pico</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl flex flex-col items-center mb-8">
          <div className="relative bottom-16 left-8">
            <img className="w-3/4" src="/images/Home/We Build-3.png" alt="" />
            <p className="text-xl text-white mt-4 ">HTC Vive</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl flex flex-col items-center mb-8">
          <div className="relative bottom-16 left-8">
            <img className="w-3/4" src="/images/Home/We Build-4.png" alt="" />
            <p className="text-xl text-white mt-4 ">Varjo</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl flex flex-col items-center mb-8">
          <div className="relative bottom-14 left-8">
            <img className="w-3/4" src="/images/Home/We Build-5.png" alt="" />
            <p className="text-xl text-white mt-4 ">Computers</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl flex flex-col items-center mb-8">
          <div className="relative bottom-16 left-8">
            <img className="w-3/4" src="/images/Home/We Build-6.png" alt="" />
            <p className="text-xl text-white mt-4 ">Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
