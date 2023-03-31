import React from "react";

const Achievements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 border-t border-b border-dark-grey py-20">
      <div>
        <h1 className="text-white text-4xl">70%</h1>
        <p className="text-grey text-lg mt-3">Increased Brand Awareness</p>
      </div>
      <div>
        <h1 className="text-white text-4xl">87%</h1>
        <p className="text-grey text-lg mt-3">
          Pre-seed funding acquired
        </p>
      </div>
      <div>
        <h1 className="text-white text-4xl">90%</h1>
        <p className="text-grey text-lg mt-3">Clients refer us </p>
      </div>
      <div>
        <h1 className="text-white text-4xl">25%</h1>
        <p className="text-grey text-lg mt-3">Decrease in traditonal prototyping costs</p>
      </div>
    </div>
  );
};

export default Achievements;
