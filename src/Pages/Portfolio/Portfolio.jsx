import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        <img src="/images/Portfolio/Hero.png" alt="" />
        <h1 className="absolute top-1/3 left-28 text-7xl text-white">
          Case Studies
        </h1>
      </div>
      <div className="w-3/4 mx-auto">
        <div>
          <h1 className="text-white text-4xl mt-12">
            Prototypes And Products <br /> That Get It
          </h1>
          <p className="text-white my-4 uppercase">Sort Projects</p>
          <div className="text-white flex">
            <div className="rounded-3xl border border-white py-1 px-3 mr-2">
              All Projects
            </div>
            <div className="rounded-3xl border border-white py-1 px-3 mr-2">
              Immersive Enrionments
            </div>
            <div className="rounded-3xl border border-white py-1 px-3 mr-2">
              Brand Activations
            </div>
            <div className="rounded-3xl border border-white py-1 px-3 mr-2">
              Emerging Technologies
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8 mb-12">
          <div className="mb-4">
            <div className="relative">
              <img src="/images/Portfolio/Porfolio-1.png" alt="" />
              <div className="absolute bottom-3 right-3 p-3 bg-white rounded-lg">
                <img
                  className="w-10 h-11 "
                  src="/images/Portfolio/vr-1.svg"
                  alt=""
                />
              </div>
            </div>
            <p className="text-white text-xl mt-4">Medical VR</p>
            <p className="text-white text-xl">Intubation Simulation</p>
          </div>
          <div className="mb-4">
            <div className="relative">
              <img src="/images/Portfolio/Porfolio-2.png" alt="" />
              <div className="absolute bottom-3 right-3 p-3 bg-white rounded-lg">
                <img
                  className="w-10 h-11 "
                  src="/images/Portfolio/vr-1.svg"
                  alt=""
                />
              </div>
            </div>
            <p className="text-white text-xl mt-4">Medical VR</p>
            <p className="text-white text-xl">Intubation Simulation</p>
          </div>
          <div className="mb-4">
            <div className="relative">
              <img src="/images/Portfolio/Porfolio-3.png" alt="" />
              <div className="absolute bottom-3 right-3 p-3 bg-white rounded-lg">
                <img className="w-10 h-11 " src="/images/Portfolio/vr-2.svg" alt="" />
              </div>
            </div>
            <p className="text-white text-xl mt-4">Medical VR</p>
            <p className="text-white text-xl">Intubation Simulation</p>
          </div>
          <div className="mb-4">
            <div className="relative">
              <img src="/images/Portfolio/Porfolio-4.png" alt="" />
              <div className="absolute bottom-3 right-3 p-3 bg-white rounded-lg">
                <img className="w-10 h-11 " src="/images/Portfolio/vr-2.svg" alt="" />
              </div>
            </div>
            <p className="text-white text-xl mt-4">Medical VR</p>
            <p className="text-white text-xl">Intubation Simulation</p>
          </div>
          <div className="mb-4">
            <div className="relative">
              <img src="/images/Portfolio/Porfolio-5.png" alt="" />
              <div className="absolute bottom-3 right-3 p-3 bg-white rounded-lg">
                <img className="w-10 h-11 " src="/images/Portfolio/vr-2.svg" alt="" />
              </div>
            </div>
            <p className="text-white text-xl mt-4">Medical VR</p>
            <p className="text-white text-xl">Intubation Simulation</p>
          </div>
          <div className="mb-6">
            <div className="relative">
              <img src="/images/Portfolio/Porfolio-6.png" alt="" />
              <div className="absolute bottom-3 right-3 p-3 bg-white rounded-lg">
                <img
                  className="w-10 h-11 "
                  src="/images/Portfolio/vr-1.svg"
                  alt=""
                />
              </div>
            </div>
            <p className="text-white text-xl mt-4">Medical VR</p>
            <p className="text-white text-xl">Intubation Simulation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
