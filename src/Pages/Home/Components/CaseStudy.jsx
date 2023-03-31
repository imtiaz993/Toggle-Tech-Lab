import React from "react";
import ProjectsList from "../../../Common/ProjectsList";
import { Link } from 'react-router-dom'
const projects = [
  {
    type: "Virtual Reality",
    img: "/images/Portfolio/vr.png",
  },
  {
    type: "Augmented Reality",
    img: "/images/Portfolio/ar.png",
  },
  {
    name: "Medical Simulations",
    img: "/images/Portfolio/medical.png",
  },
  {
    name: "Training Simulations",
    img: "/images/Portfolio/training.png",
  },

  {
    type: "AI Metaverse",
    img: "/images/Portfolio/metaverse.png",
  },

  {
    type: "Games",
    name: "3D and 2D Games",
    img: "/images/Portfolio/games.png",
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
