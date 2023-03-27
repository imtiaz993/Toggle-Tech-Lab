import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img src="/images/Home/Hero.png" alt="" />
      <div className="absolute top-48 left-28 w-1/2">
        <p className="text-gold uppercase text-base  mb-2">
          Immersive Prototyping for Startups
        </p>
        <h1 className="font-sans text-4xl text-white">
          Transforming Ideas into Reality with{" "}
          <span className="text-gold">XR</span> Technology
        </h1>
        <p className="text-grey text-lg mt-12 font-montserrat">
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
  );
};

export default Hero;
