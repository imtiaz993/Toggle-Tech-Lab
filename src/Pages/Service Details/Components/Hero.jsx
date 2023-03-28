import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img className="w-full" src="/images/Service Details/Hero.png" alt="" />
      <div className="absolute top-1/3 mt-8 w-full">
        <h1 className="w-3/4 mx-auto text-4xl text-white">Virtual Reality</h1>
      </div>
    </div>
  );
};

export default Hero;