import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4">
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          Application Development
        </h1>
        <div>
          <ul className="text-grey text-lg list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
                Social Camera Effects, Filters & Lenses for Facebook, Instagram
                and Snapchat
              </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">Web AR </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">Mobile AR Apps </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">
                IoT / HMD AR and AR Glasses Development for Magic Leap and
                HoloLens
              </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">
                AR for Print - Murals, Posters and Packaging{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          VR (Virtual Reality)
        </h1>
        <div>
          <ul className="text-grey text-lg marker:text-red-800 list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
                VR Content Creation - Live Action 360 Video Production Services
              </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">
                VR Content Creation - CGI and VFX{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          From The Experts
        </h1>
        <div>
          <ul className="text-grey text-lg marker:text-red-800 list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
                An Insider’s Guide to Social Augmented Reality{" "}
              </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">
                Facebook, Instagram AR Filters and Snapchat AR Lenses{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          Questions?
        </h1>
        <div>
          <ul className="text-grey text-lg marker:text-red-800 list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
                Feel free to reach out.
                <br />{" "}
                <span className="font-medium text-white"> Contact Us</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
