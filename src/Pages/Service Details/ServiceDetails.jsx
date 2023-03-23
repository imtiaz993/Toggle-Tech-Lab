import React from "react";

const ServiceDetails = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        <img src="/images/Service Details/Hero.png" alt="" />
        <h1 className="absolute top-1/3 left-28 text-7xl text-white">
          Virtual Reality
        </h1>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="pt-10 pb-8">
          <div className="flex justify-between my-14 items-center">
            <div className="w-1/2">
              <img src="/images/Service Details/service-1.png" alt="" />
            </div>
            <div className="w-2/5">
              <h1 className="text-white text-4xl">Prototypes And Products That Get It</h1>
              <p className="text-white my-8">
                We specialize in creating virtual and augmented reality
                prototypes that allow startups to visualize their concepts in a
                fully immersive environment.
              </p>
              <button className="text-white border-2 border-white rounded-3xl py-2 px-5">Watch Video</button>
            </div>
          </div>
          <div className="flex justify-between my-14 flex-row-reverse items-center">
            <div className="w-1/2">
              <img src="/images/Service Details/service-2.png" alt="" />
            </div>
            <div className="w-2/5 ">
              <h1 className="text-white text-4xl">Prototypes And Products That Get It</h1>
              <p className="text-white my-8">
                We specialize in creating virtual and augmented reality
                prototypes that allow startups to visualize their concepts in a
                fully immersive environment.
              </p>
              
            </div>
          </div>
          <div className="flex justify-between my-14  items-center">
            <div className="w-1/2">
              <img src="/images/Service Details/service-3.png" alt="" />
            </div>
            <div className="w-2/5">
              <h1 className="text-white text-4xl">Prototypes And Products That Get It</h1>
              <p className="text-white my-8">
                We specialize in creating virtual and augmented reality
                prototypes that allow startups to visualize their concepts in a
                fully immersive environment.
              </p>
             
            </div>
          </div>
          <div className="flex justify-between my-14 flex-row-reverse items-center">
            <div className="w-1/2">
              <img src="/images/Service Details/service-4.png" alt="" />
            </div>
            <div className="w-2/5 ">
              <h1 className="text-white text-4xl">Prototypes And Products That Get It</h1>
              <p className="text-white my-8">
                We specialize in creating virtual and augmented reality
                prototypes that allow startups to visualize their concepts in a
                fully immersive environment.
              </p>
             
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-white py-16">
          <div>
            <p className="text-white text-lg">Prev</p>
            <h2 className="text-white text-2xl">Augmented Reality</h2>
          </div>
          <div>
            <p className="text-white text-right text-lg">Next</p>
            <h2 className="text-white text-2xl">Immersive Training</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
