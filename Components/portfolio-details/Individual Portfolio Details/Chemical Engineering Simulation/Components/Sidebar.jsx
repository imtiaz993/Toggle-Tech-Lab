import React from "react";

const Sidebar = () => {
  return (
    <div className="lg:w-1/4">
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          Application Development
        </h1>
        <div>
          <ul className="text-grey text-base md:text-lg list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
               Unity Game Engine
              </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">WebGL</div>
            </li>
            <li className="text-gold">
              <div className="text-grey">3DS Max</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
PC 3D Game Training Simulation</h1>
        <div>
          <ul className="text-grey text-base md:text-lg marker:text-red-800 list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
               Windows, Mac
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
          <ul className="text-grey text-base md:text-lg marker:text-red-800 list-disc ml-4">
          <li className="text-gold">
              <div className="text-grey">
              <a href=" https://axonpark.com/how-effective-is-vr-training-13-case-studies-and-examples/"target="_blank">
              Effectiveness of learning in VR</a> 
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
          <ul className="text-grey text-base md:text-lg marker:text-red-800 list-disc ml-4">
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
