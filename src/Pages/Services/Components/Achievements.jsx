import React from "react";

const Achievements = () => {
  return (
    <div className="grid grid-cols-4 gap-6 border-t border-b border-dark-grey py-20">
      <div>
        <h1 className="text-white text-4xl">70%</h1>
        <p className="text-grey text-lg mt-3">Increased Brand Awareness</p>
      </div>
      <div>
        <h1 className="text-white text-4xl">61%</h1>
        <p className="text-grey text-lg mt-3">
          More Engaging Consumer Experience
        </p>
      </div>
      <div>
        <h1 className="text-white text-4xl">56%</h1>
        <p className="text-grey text-lg mt-3">More Trust in The Brand</p>
      </div>
      <div>
        <h1 className="text-white text-4xl">25%</h1>
        <p className="text-grey text-lg mt-3">Decrease in Product Returns</p>
      </div>
    </div>
  );
};

export default Achievements;
