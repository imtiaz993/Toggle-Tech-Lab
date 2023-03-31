import React from "react";

const Team = () => {
  return (
    <div className="w-3/4 mx-auto mt-20">
      <h1 className="text-white text-2xl mb-8">Our Team</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/sukhi.jpeg" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Sukhwinder</h1>
          <p className="text-gold text-lg">Founder / CEO</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/Team-2.png" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Gurfariyad</h1>
          <p className="text-gold text-lg">Co-Founder</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/bikram.jpg" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Bikram</h1>
          <p className="text-gold text-lg">VR & AR Developer</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/venky.jpg" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Venkatdari</h1>
          <p className="text-gold text-lg">VR & AR  Developer</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/brian.jpg" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Brian</h1>
          <p className="text-gold text-lg">Game developer</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/sonya.jpg" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Sonya</h1>
          <p className="text-gold text-lg">XR User Experience Designer</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/rohit.png" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Rohit</h1>
          <p className="text-gold text-lg">3D Designer</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden flex justify-center items-center bg-gray-900">
            <img className="w-10 h-10" src="/icons/Plus.svg" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Join Our Team</h1>
          <p className="text-gold text-lg">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
