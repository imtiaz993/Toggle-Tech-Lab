import React from "react";

const Contact = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        <img src="/images/Contact/Hero.png" alt="" />
        <h1 className="absolute top-1/3 left-28 text-7xl text-white">
          Contact Us
        </h1>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="flex justify-between mt-20 border-b border-white pb-4 mb-16">
          <div className="w-1/4">
            <div className="mb-8">
              <h1 className="text-white text-xl mb-3">Canada</h1>
              <div className="flex items-start">
                <img className="mr-2" src="/icons/location.svg" alt="" />
                <p className="text-white">
                  810 Quayside Dr #205, New Westminster, BC V3M 6B9
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-white text-2xl mb-3">India</h1>
              <div className="flex items-start">
                <img className="mr-2" src="/icons/location.svg" alt="" />
                <p className="text-white">
                  National Car Bazar, Johal Market, Zira, Punjab 142047
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-white text-2xl mb-3">Qatar</h1>
              <div className="flex items-start">
                <img className="mr-2" src="/icons/location.svg" alt="" />
                <p className="text-white">
                  Al Mana Business Centre 02, Doha, Qatar
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-white text-2xl mb-3">Social Media</h1>
              <div className="flex">
                <div className="rounded-full border border-white mr-3 w-12 h-12 flex items-center justify-center">
                  <img className="w-1/2" src="/icons/twitter.svg" alt="" />
                </div>
                <div className="rounded-full border border-white mr-3 w-12 h-12 flex items-center justify-center">
                  <img className="w-1/2" src="/icons/insta.svg" alt="" />
                </div>
                <div className="rounded-full border border-white mr-3 w-12 h-12 flex items-center justify-center">
                  <img className="w-1/2" src="/icons/linkedIn.svg" alt="" />
                </div>
                <div className="rounded-full border border-white mr-3 w-12 h-12 flex items-center justify-center">
                  <img className="w-1/2" src="/icons/whatsapp.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/6">
            <h1 className="text-white text-4xl mb-8">Send Us a Message</h1>
            <div className="flex justify-between mb-5">
              <input
                className="w-1/2 mr-8 text-white bg-transparent border border-white rounded-lg p-3"
                type="text"
                placeholder="Name *"
                required
              />
              <input
                className="w-1/2 text-white bg-transparent border border-white rounded-lg p-3"
                type="tel"
                placeholder="Phone"
              />
            </div>
            <div className="flex justify-between mb-5">
              <input
                className="w-1/2 mr-8 text-white bg-transparent border border-white rounded-lg p-3"
                type="email"
                placeholder="Email *"
                required
              />
              <input
                className="w-1/2 text-white bg-transparent border border-white rounded-lg p-3"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="mb-5">
              <textarea
                rows={6}
                className="w-full resize-none text-white bg-transparent border border-white rounded-lg p-3"
                type="email"
                placeholder="Message *"
                required
              />
            </div>
            <button className="text-white border-2 border-white rounded-3xl py-2 px-5">
              Send Message
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-white text-4xl mb-10">Office Locations</h1>
          <div className="mt-8">
            <p className="text-white text-xl mb-8">Canada</p>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Westminste &t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://2yu.co">2yu</a>
                 <br/>
                {/* < style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style> */}
                <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
                {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style> */}
                </div>
              </div>
          </div>
          <div className="mt-8">
            <p className="text-white text-xl mb-8">India Branch</p>
          </div>
          <div className="mt-8">
            <p className="text-white text-xl mb-8">Qatar Branch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
