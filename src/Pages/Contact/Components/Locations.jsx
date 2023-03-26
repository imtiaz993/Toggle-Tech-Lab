import React from "react";

const Locations = () => {
  return (
    <div className="w-1/4">
      <div className="mb-8">
        <h1 className="text-white text-xl mb-3">Canada</h1>
        <div className="flex items-start">
          <img className="mr-2" src="/icons/location.svg" alt="" />
          <p className="text-grey text-lg">
            810 Quayside Dr #205, New Westminster, BC V3M 6B9
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-white text-xl mb-3">India</h1>
        <div className="flex items-start">
          <img className="mr-2" src="/icons/location.svg" alt="" />
          <p className="text-grey text-lg">
            National Car Bazar, Johal Market, Zira, Punjab 142047
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-white text-xl mb-3">Qatar</h1>
        <div className="flex items-start">
          <img className="mr-2" src="/icons/location.svg" alt="" />
          <p className="text-grey text-lg">
            Al Mana Business Centre 02, Doha, Qatar
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-white text-xl mb-3">Social Media</h1>
        <div className="flex">
          <div className="rounded-full border border-dark-grey mr-3 w-12 h-12 flex items-center justify-center">
            <img className="w-1/2" src="/icons/twitter.svg" alt="" />
          </div>
          <div className="rounded-full border border-dark-grey mr-3 w-12 h-12 flex items-center justify-center">
            <img className="w-1/2" src="/icons/insta.svg" alt="" />
          </div>
          <div className="rounded-full border border-dark-grey mr-3 w-12 h-12 flex items-center justify-center">
            <img className="w-1/2" src="/icons/linkedIn.svg" alt="" />
          </div>
          <div className="rounded-full border border-dark-grey mr-3 w-12 h-12 flex items-center justify-center">
            <img className="w-1/2" src="/icons/whatsapp.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
