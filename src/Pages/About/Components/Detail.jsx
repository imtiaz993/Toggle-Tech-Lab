import React from "react";

const Detail = () => {
  return (
    <div className="w-3/4 mx-auto">
      {" "}
      <div className="grid grid-cols-2 gap-12 items-center mt-20">
        <div className="">
          <img src="/images/Services/2nd Section.png" alt="" />
        </div>
        <div className="w-11/12">
          <h1 className="text-white text-2xl mb-8">
            Prototypes And Products That Get It
          </h1>
          <p className="text-grey text-lg mb-4">
            Welcome to our Toggle Tech Lab, where we help startups and
            enterprises. turn their ideas into reality.
          </p>
          <p className="text-grey text-lg">
            We specialize in creating virtual and augmented reality prototypes
            that allow startups to visualize their concepts in a fully immersive
            environment. Our team of experienced developers and designers use
            the latest technology to bring your vision to life.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-12 items-center my-20">
        <div>
          <img src="/images/About/Upwork.png" alt="" />
        </div>
        <div>
          <img src="/images/About/XR Today.png" alt="" />
        </div>
        <div>
          <img src="/images/About/Rising Star.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="/images/About/Venture Labs.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
