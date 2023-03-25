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
            <p className="text-[#999999] text-lg mt-3">
              Increased Brand Awareness
            </p>
          </div>
          <div>
            <h1 className="text-white text-6xl">61%</h1>
            <p className="text-[#999999] text-lg mt-3">
              More Engaging Consumer Experience
            </p>
          </div>
          <div>
            <h1 className="text-white text-6xl">56%</h1>
            <p className="text-[#999999] text-lg mt-3">
              More Trust in The Brand
            </p>
          </div>
          <div>
            <h1 className="text-white text-6xl">25%</h1>
            <p className="text-[#999999] text-lg mt-3">
              Decrease in Product Returns
            </p>
          </div>
        </div>
        <div className="my-28 border-t border-white pt-20">
          <p className="text-white mb-5 text-lg text-center">
            Our Beloved Partners
          </p>
          <div className="flex justify-between items-center flex-wrap">
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/1.png" alt="" />
            </div>
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/2.png" alt="" />
            </div>
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/3.png" alt="" />
            </div>
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/4.png" alt="" />
            </div>
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/5.png" alt="" />
            </div>
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/6.png" alt="" />
            </div>
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/7.png" alt="" />
            </div>
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/8.png" alt="" />
            </div>
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/9.png" alt="" />
            </div>
            <div className="w-1/5 px-8 my-6">
              <img src="/images/Partners/10.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-Quick-Contact py-28">
        <div className="flex justify-between items-center w-3/4 mx-auto">
          <div className="w-1/2">
            <p className="text-white text-lg">Quick Contact</p>
            <h1 className="ml-2 text-white text-5xl mt-4 mb-8">Got An Idea?</h1>
            <p className="ml-2 text-white text-lg">
              Simply schedule an online meeting or call us directly if you
              prefer. We will get back to you within 24 hours.{" "}
            </p>
          </div>
          <div className="w-2/5 flex items-center justify-end">
            <h1 className="text-4xl text-white mr-4">Schedule a Call</h1>
            <img src="/icons/arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="flex justify-between py-28 border-b border-white">
          <div className="w-2/5">
            <p className="text-white text-lg uppercase">Contact Us</p>
            <h1 className="text-white text-5xl mt-2">Let’s Talk</h1>
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-12 text-white mt-8">
            <div>
              <h1 className="text-2xl mb-3 ">Office (Canada)</h1>
              <div className="flex items-start">
                <img className="mr-2" src="/icons/location.svg" alt="" />
                <p>810 Quayside Dr #205, New Westminster, BC V3M 6B9</p>
              </div>
            </div>

            <div>
              <h1 className="text-2xl mb-3 ">India Branch</h1>
              <div className="flex items-start">
                <img className="mr-2" src="/icons/location.svg" alt="" />
                <p>National Car Bazar, Johal Market, Zira, Punjab 142047</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl mb-3 ">Qatar Branch</h1>
              <div className="flex items-start">
                <img className="mr-2" src="/icons/location.svg" alt="" />
                <p>Al Mana Business Centre 02, Doha, Qatar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl mb-3 ">Social Media</h1>
              <div className="flex">
                <div className="rounded-full border border-white mr-3 w-14 h-14 flex items-center justify-center">
                  <img src="/icons/twitter.svg" alt="" />
                </div>
                <div className="rounded-full border border-white mr-3 w-14 h-14 flex items-center justify-center">
                  <img src="/icons/insta.svg" alt="" />
                </div>
                <div className="rounded-full border border-white mr-3 w-14 h-14 flex items-center justify-center">
                  <img src="/icons/linkedIn.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-white text-sm py-8">
          <div className="flex">
            <p className="mr-4">About Us</p>
            <p className="mr-4">Contact</p>
            <p className="mr-4">Contact</p>
            <p className="mr-4">Privacy Policy</p>
            <p className="mr-4">Terms & Conditions</p>
          </div>
          <div>
            <p>
              Copyright 2017-2023 Toggle Tech Lab subsidiary of Let’s
              JavaScript! Corp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
