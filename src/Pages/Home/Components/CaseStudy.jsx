import React from "react";
import ProjectsList from "../../../Common/ProjectsList";
import { Link } from 'react-router-dom'
const projects = [
  {
    type: "Immersive Enrionments",
    name: "Medical VR",
    img: "/images/Portfolio/Porfolio-1.png",
  },
  {
    type: "Training",
    name: "Medical VR",
    img: "/images/Portfolio/Porfolio-2.png",
  },
  {
    type: "Immersive Enrionments",
    name: "Medical VR",
    img: "/images/Portfolio/Porfolio-3.png",
  },
  {
    type: "Brand Activations",
    name: "Medical VR",
    subType: "Brand Activations",
    img: "/images/Portfolio/Porfolio-4.png",
  },
  {
    type: "Brand Activations",
    name: "Medical VR",
    img: "/images/Portfolio/Porfolio-5.png",
  },
  {
    type: "Training",
    name: "Medical VR",
    img: "/images/Portfolio/Porfolio-6.png",
  },
];
const CaseStudy = () => {
  return (
    <div className="w-3/4 mx-auto my-20">
      <h1 className="text-gold text-base uppercase mb-4">Case Study</h1>
      <div className="flex justify-between items-center  mb-8">
        <h1 className="text-white text-2xl">
          Our Works
          <br /> Speaks For Itself
        </h1>
        <Link to="/service">
        <button className="text-gold text-lg border-2 border-gray-400 rounded-3xl py-2 px-5 mt-4">
          View All Services
        </button>
        </Link>
      </div>
      <ProjectsList sorted={projects} />
    </div>
  );
};

export default CaseStudy;
