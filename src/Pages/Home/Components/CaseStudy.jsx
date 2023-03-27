import React from "react";
import ProjectsList from "../../../Common/ProjectsList";

const CaseStudy = () => {
  return (
    <div className="w-3/4 mx-auto my-20">
      <h1 className="text-gold text-base uppercase mb-4">Case Study</h1>
      <div className="flex justify-between items-center  mb-8">
        <h1 className="text-white text-2xl">
          Our Works
          <br /> Speaks For Itself
        </h1>
        <button className="text-gold text-lg border-2 border-gray-400 rounded-3xl py-2 px-5 mt-4">
          View All Services
        </button>
      </div>
      <ProjectsList />
    </div>
  );
};

export default CaseStudy;
