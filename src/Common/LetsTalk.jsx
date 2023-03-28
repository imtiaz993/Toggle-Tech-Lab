import React from "react";

const LetsTalk = () => {
  return (
    <div className="w-3/4 mx-auto block lg:flex justify-between py-28">
      <div className="lg:w-2/5">
        <p className="text-gold text-base uppercase">Contact Us</p>
        <h1 className="text-white text-3xl mt-2">Let’s Talk</h1>
      </div>
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12 text-white mt-8">
        <div>
          <h1 className="text-xl mb-3 ">Office (Canada)</h1>
          <div className="flex items-start">
            <img className="mr-2" src="/icons/location.svg" alt="" />
            <p className="text-grey text-lg">
              810 Quayside Dr #205, New Westminster, BC V3M 6B9
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-xl mb-3 ">India Branch</h1>
          <div className="flex items-start">
            <img className="mr-2" src="/icons/location.svg" alt="" />
            <p className="text-grey text-lg">
              National Car Bazar, Johal Market, Zira, Punjab 142047
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-3 ">Qatar Branch</h1>
          <div className="flex items-start">
            <img className="mr-2" src="/icons/location.svg" alt="" />
            <p className="text-grey text-lg">
              Al Mana Business Centre 02, Doha, Qatar
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-3 ">Social Media</h1>
          <div className="flex">
            <div>
              <div className="rounded-full border border-dark-grey mr-3 w-14 h-14 flex items-center justify-center">
                <img src="/icons/twitter.svg" alt="" />
              </div>
            </div>
            <div>
              <div className="rounded-full border border-dark-grey mr-3 w-14 h-14 flex items-center justify-center">
                <img src="/icons/insta.svg" alt="" />
              </div>
            </div>
            <div>
              <div className="rounded-full border border-dark-grey mr-3 w-14 h-14 flex items-center justify-center">
                <img src="/icons/linkedIn.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
