import React from "react";
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div
      className="bg-top bg-no-repeat bg-cover py-28"
      style={{ backgroundImage: "url('/images/Home/About BG.png')" }}
    >
      <div className="flex justify-between items-center w-3/4 mx-auto">
        <div className="w-3/5">
          <p className="text-gold uppercase text-base">
            Bringing your vision to life
          </p>
          <h1 className="ml-2 text-white text-2xl mt-4 mb-8">
            Experience the future of your startup with immersive prototypes that
            captivate investors.
          </h1>
        </div>
        <div className="w-2/5 flex justify-end">
        <Link to="/contact">
          <button className="text-black font-medium text-lg bg-gold rounded-3xl py-2 px-5 mr-4">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
