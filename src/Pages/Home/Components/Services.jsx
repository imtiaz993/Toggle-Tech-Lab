import React from "react";
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="w-3/4 mx-auto my-20">
      <h1 className="text-gold text-base uppercase mb-4">Services</h1>
      <div className="flex justify-between items-center  mb-8">
        <h1 className="text-white text-2xl">What We Do</h1>
        <Link to="/service">
        <button className="text-gold text-lg border-2 border-gray-400 rounded-3xl py-2 px-5 mt-4">
          View All Services
        </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-12">
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-96 "
          style={{ backgroundImage: "url('/images/About/Why Choose BG.png')" }}
        >
          <div className="rounded-2xl pt-14 px-16">
            <img className="w-14 h-14" src="/icons/Why Choose-1.svg" alt="" />
            <h1 className="text-white text-xl my-4">XR Prototyping</h1>
            <p className="text-grey text-lg">
              We specialize in creating virtual and augmented reality prototypes
              that allow startups
            </p>
            <Link to="/about">
            <p className="text-gold text-lg mt-4">Read More</p>
            </Link>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-96"
          style={{ backgroundImage: "url('/images/About/Why Choose BG.png')" }}
        >
          <div className="rounded-2xl pt-14 px-16">
            <img className="w-14 h-14" src="/icons/Why Choose-2.svg" alt="" />
            <h1 className="text-white text-xl my-4">XR Experiences</h1>
            <p className="text-grey text-lg">
              We specialize in creating virtual and augmented reality prototypes
              that allow startups
            </p>
            <Link to="/about">
            <p className="text-gold text-lg mt-4">Read More</p>
            </Link>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-96"
          style={{ backgroundImage: "url('/images/About/Why Choose BG.png')" }}
        >
          <div className="rounded-2xl pt-14 px-16">
            <img className="w-14 h-14" src="/icons/Why Choose-3.svg" alt="" />
            <h1 className="text-white text-xl my-4">XR Training</h1>
            <p className="text-grey text-lg">
              We specialize in creating virtual and augmented reality prototypes
              that allow startups
            </p>
            <Link to="/about">
            <p className="text-gold text-lg mt-4">Read More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
