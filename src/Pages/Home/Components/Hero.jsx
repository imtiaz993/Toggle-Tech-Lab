import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img className="w-full" src="/images/Home/Hero.png" alt="" />
      <div className="absolute top-1/4 w-full 2xl:top-1/3">
        <div className="w-3/4 mx-auto">
          <div className="w-3/5">
        <p className="text-gold uppercase text-base  mb-2">
          Immersive Prototyping for Startups
        </p>
        <h1 className="font-sans text-4xl text-white w-11/12 leading-12">
          Transforming Ideas into Reality with{" "}
          <span className="text-gold">XR</span> Technology
        </h1>
        <p className="text-grey text-lg mt-12 font-montserrat w-4/5">
          Experience the future of your startup with immersive prototypes that
          captivate investors
        </p>
        <div className="flex mt-8">
          <button className="text-black font-medium text-lg bg-gold rounded-3xl py-2 px-5 mr-4">
            Get Started
          </button>
          <button className="text-gold text-lg border-2 border-white rounded-3xl py-2 px-5">
            Watch a Demo
          </button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
