import React from "react";
import { Link } from "react-router-dom";

const ScheduleCall = () => {
  return (
    <div
      className="bg-top bg-no-repeat bg-cover py-28"
      style={{ backgroundImage: "url('/images/Quick/background.png')" }}
    >
      <div className="lg:flex justify-between items-center w-3/4 mx-auto">
        <div className="lg:w-1/2">
          <p className="text-gold uppercase text-base">Quick Contact</p>
          <h1 className="ml-2 text-white text-3xl mt-4 mb-8">Got An Idea?</h1>
          <p className="ml-2 text-grey text-lg">
            Send us a message through the contact form or message us on
            Whatsapp. We will get back to you within 24 hours.{" "}
          </p>
        </div>
        <div className="mt-4 lg:mt-0 lg:w-2/5 flex items-center lg:justify-end">
          <Link to="/contact" className="flex items-center lg:justify-end">
            <h1 className="text-2xl text-gold mr-4 underline">
              Schedule a Call
            </h1>
            <img src="/icons/arrow.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
