import React from "react";

const Build = () => {
  return (
    <div id="build-section" className="w-3/4 mx-auto mt-20 pt-16 border-t border-dark-grey">
      <p className="text-base uppercase text-gold">About Us</p>
      <h1 className="text-white text-3xl mt-4 mb-8">We build for</h1>
      <div className="grid grid-cols-3 gap-16 my-20">
        <div
          className="bg-top bg-no-repeat bg-cover -m-4"
          style={{ backgroundImage: "url('/images/Home/We Build BG.png')" }}
        >
          <div className="rounded-xl flex flex-col items-center mb-16">
            <div className="relative bottom-8 left-4">
              <img className="w-3/4" src="/images/Home/We_Build-1.png" alt="" />
              <p className="text-xl text-white mt-4 ">Meta Quest</p>
            </div>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-4"
          style={{ backgroundImage: "url('/images/Home/We Build BG.png')" }}
        >
          <div className=" rounded-xl flex flex-col items-center mb-16">
            <div className="relative bottom-8 left-8">
              <img className="w-3/4" src="/images/Home/We_Build-2.png" alt="" />
              <p className="text-xl text-white mt-4 ml-8">Pico</p>
            </div>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-4"
          style={{ backgroundImage: "url('/images/Home/We Build BG.png')" }}
        >
          <div className=" rounded-xl flex flex-col items-center mb-16">
            <div className="relative bottom-8 left-8">
              <img className="w-3/4" src="/images/Home/We_Build-3.png" alt="" />
              <p className="text-xl text-white mt-4 ">HTC Vive</p>
            </div>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-4"
          style={{ backgroundImage: "url('/images/Home/We Build BG.png')" }}
        >
          <div className=" rounded-xl flex flex-col items-center mb-16">
            <div className="relative bottom-8 left-8">
              <img className="w-3/4" src="/images/Home/We_Build-4.png" alt="" />
              <p className="text-xl text-white mt-4 ml-6">Varjo</p>
            </div>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-4"
          style={{ backgroundImage: "url('/images/Home/We Build BG.png')" }}
        >
          <div className=" rounded-xl flex flex-col items-center mb-16">
            <div className="relative bottom-8 left-6">
              <img className="w-3/4" src="/images/Home/We_Build-5.png" alt="" />
              <p className="text-xl text-white mt-4 ml-2">Computers</p>
            </div>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-4"
          style={{ backgroundImage: "url('/images/Home/We Build BG.png')" }}
        >
          <div className=" rounded-xl flex flex-col items-center mb-16">
            <div className="relative bottom-8 left-6">
              <img className="w-3/4" src="/images/Home/We_Build-6.png" alt="" />
              <p className="text-xl text-white mt-4 ">Mobile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;