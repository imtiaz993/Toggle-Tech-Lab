import React from "react";

const Team = () => {
  return (
    <div className="w-3/4 mx-auto mt-20">
      <h1 className="text-white text-2xl mb-8">Awesome Team Members</h1>
      <div className="grid grid-cols-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/Team-1.png" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">John Smith</h1>
          <p className="text-gold text-lg">Founder / CEO</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/Team-2.png" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Sandra Johnson</h1>
          <p className="text-gold text-lg">Co-Founder</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/Team-3.png" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Mahesh Mishra</h1>
          <p className="text-gold text-lg">VR Developer</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/Team-4.png" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Mahesh Mishra</h1>
          <p className="text-gold text-lg">VR Developer</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/Team-5.png" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Sandra Johnson</h1>
          <p className="text-gold text-lg">Co-Founder</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-52 h-52 rounded-full overflow-hidden">
            <img src="/images/Team/Team-6.png" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1">Mahesh Mishra</h1>
          <p className="text-gold text-lg">VR Developer</p>
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
