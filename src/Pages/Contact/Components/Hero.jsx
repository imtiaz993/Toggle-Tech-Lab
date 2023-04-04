import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img className="w-full" src="/images/Contact/Hero.png" alt="" />
      <div className="absolute top-1/3 mt-8 w-full">
        <h1 className="w-11/12  md:w-3/4 mx-auto text-4xl text-white">Contact Us</h1>
      </div>
    </div>
  );
};

export default Hero;
