import React from "react";
import { Link } from 'react-router-dom'
const ProptypeProduct = () => {
  return (
    <div className="bg-light-grey">
      <div className="w-3/4 mx-auto grid grid-cols-2 gap-12 items-center py-20">
        <div className="">
          <img src="/images/Services/2nd Section.png" alt="" />
        </div>
        <div className="w-11/12">
          <h1 className="text-gold text-base uppercase mb-2">About Us</h1>
          <h1 className="text-white text-2xl mb-8">
            Prototypes And Products That Get It
          </h1>
          <p className="text-grey text-lg mb-4">
            We specialize in creating virtual and augmented reality prototypes
            that allow startups to visualize their concepts in a fully immersive
            environment.
          </p>
          <Link to="/about">
          <button className="text-gold text-lg border-2 border-gray-400 rounded-3xl py-2 px-5 mt-4">
            Read More
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProptypeProduct;
