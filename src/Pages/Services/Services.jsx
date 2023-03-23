import React from "react";

const Services = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        <img src="/images/Services/Hero.png" alt="" />
        <h1 className="absolute top-1/3 left-28 text-7xl text-white">
          Services
        </h1>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="grid grid-cols-3 gap-8 my-28 text-xl text-white">
          <div className="mb-9">
            <img src="/images/Services/Virtual Reality.png" alt="" />
            <p className="mt-6">Virtual Reality</p>
          </div>
          <div className="mb-9">
            <img src="images/Services/Augmented Reality.png" alt="" />
            <p className="mt-6">Augmented Reality</p>
          </div>
          <div className="mb-9">
            <img src="images/Services/Immersive Training.png" alt="" />
            <p className="mt-6">Immersive Training</p>
          </div>
          <div className="mb-9">
            <img src="images/Services/XR Marketing.png" alt="" />
            <p className="mt-6">XR Marketing</p>
          </div>
          <div className="mb-9">
            <img src="images/Services/3D Modeling.png" alt="" />
            <p className="mt-6">3D Modeling</p>
          </div>
          <div>
            <img src="images/Services/Retail Store Virtualization.png" alt="" />
            <p className="mt-6">Retail Store Virtualization</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 border-y-2 border-y-[#3C3C3C] py-24 bg-gray-900">
          <div>
            <h1 className="text-white text-6xl">70%</h1>
            <p className="text-[#999999] text-lg mt-3">Increased Brand Awareness</p>
          </div>
          <div>
            <h1 className="text-white text-6xl">61%</h1>
            <p className="text-[#999999] text-lg mt-3">More Engaging Consumer Experience</p>
          </div>
          <div>
            <h1 className="text-white text-6xl">56%</h1>
            <p className="text-[#999999] text-lg mt-3">More Trust in The Brand</p>
          </div>
          <div>
            <h1 className="text-white text-6xl">25%</h1>
            <p className="text-[#999999] text-lg mt-3">Decrease in Product Returns</p>
          </div>
        </div>
        <div className="my-28">
         <p className="text-white mb-5 text-lg text-center">Our Beloved Partners</p>
         <div className="flex justify-between items-center flex-wrap">
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/1.png" alt=""/></div>
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/2.png" alt=""/></div>
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/3.png" alt=""/></div>
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/4.png" alt=""/></div>
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/5.png" alt=""/></div>
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/6.png" alt=""/></div>
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/7.png" alt=""/></div>
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/8.png" alt=""/></div>
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/9.png" alt=""/></div>
           <div className="w-1/5 px-8 my-6"><img src="/images/Partners/10.png" alt=""/></div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
