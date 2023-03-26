import React from "react";

const ScheduleCall = () => {
  return (
    <div
      className="bg-top bg-no-repeat bg-cover py-28"
      style={{ backgroundImage: "url('/images/Quick/background.png')" }}
    >
      <div className="flex justify-between items-center w-3/4 mx-auto">
        <div className="w-1/2">
          <p className="text-gold uppercase text-base">Quick Contact</p>
          <h1 className="ml-2 text-white text-3xl mt-4 mb-8">Got An Idea?</h1>
          <p className="ml-2 text-grey text-lg">
            Simply schedule an online meeting or call us directly if you prefer.
            We will get back to you within 24 hours.{" "}
          </p>
        </div>
        <div className="w-2/5 flex items-center justify-end">
          <h1 className="text-2xl text-gold mr-4">Schedule a Call</h1>
          <img src="/icons/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
