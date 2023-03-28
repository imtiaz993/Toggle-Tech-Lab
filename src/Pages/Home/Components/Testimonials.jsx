import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="w-3/4 mx-auto mt-20">
        <h1 className="text-gold text-base uppercase mb-4">In The News</h1>
        <div className="flex justify-between items-center  mb-8">
          <h1 className="text-white text-2xl">
            Client’s
            <br /> Testimonials
          </h1>
          <div className="flex">
            <div className="rounded-full border border-dark-grey w-14 h-14 flex justify-center items-center mr-4">
              <img src="/icons/Chevron Left.svg" alt="" />
            </div>
            <div className="rounded-full border border-dark-grey w-14 h-14 flex justify-center items-center">
              <img src="/icons/Chevron Right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="w-10/12 ml-auto flex justify-start flex-nowrap mt-10 mb-20 overflow-x-auto">
        <div className="">
          <div className="w-96 border border-dark-grey rounded-xl py-6 px-8 mr-8 mb-3">
            <img className="w-12 h-10" src="/icons/quote.svg" alt="" />
            <p className="text-grey text-lg mt-8">
              At our XR agency, we’re passionate about innovation and
              creativity, and we’re dedicated to helping startups bring their
              ideas to life.
            </p>
            <h1 className="text-white text-xl mt-8">John Smith</h1>
            <p className="text-grey text-sm">Chamber Studios</p>
          </div>
        </div>
        <div className="">
          <div className="w-96 border border-dark-grey rounded-xl py-6 px-8 mr-8 mb-3">
            <img className="w-12 h-10" src="/icons/quote.svg" alt="" />
            <p className="text-grey text-lg mt-8">
              At our XR agency, we’re passionate about innovation and
              creativity, and we’re dedicated to helping startups bring their
              ideas to life.
            </p>
            <h1 className="text-white text-xl mt-8">Sandra Wilson</h1>
            <p className="text-grey text-sm">Chamber Studios</p>
          </div>
        </div>
        <div className="">
          <div className="w-96 border border-dark-grey rounded-xl py-6 px-8 mr-8 mb-3">
            <img className="w-12 h-10" src="/icons/quote.svg" alt="" />
            <p className="text-grey text-lg mt-8">
              At our XR agency, we’re passionate about innovation and
              creativity, and we’re dedicated to helping startups bring their
              ideas to life.
            </p>
            <h1 className="text-white text-xl mt-8">Cathy Johnson</h1>
            <p className="text-grey text-sm">Chamber Studios</p>
          </div>
        </div>
        <div className="">
          <div className="w-96 border border-dark-grey rounded-xl py-6 px-8 mr-8 mb-3">
            <img className="w-12 h-10" src="/icons/quote.svg" alt="" />
            <p className="text-grey text-lg mt-8">
              At our XR agency, we’re passionate about innovation and
              creativity, and we’re dedicated to helping startups bring their
              ideas to life.
            </p>
            <h1 className="text-white text-xl mt-8">John Smith</h1>
            <p className="text-grey text-sm">Chamber Studios</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
