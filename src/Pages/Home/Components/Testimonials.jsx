import React from "react";

const Testimonials = () => {
  return (
    <div className="w-3/4 mx-auto my-20">
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
      {/* slider */}
    </div>
  );
};

export default Testimonials;
