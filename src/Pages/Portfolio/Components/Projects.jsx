import React, { useState } from "react";
import ProjectsList from "../../../Common/ProjectsList";

const Projects = () => {
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
  const [sorted, setSorted] = useState(projects);
  const [selected, setSelected] = useState("All Projects");
  const handleSort = (value) => {
    if (value === "All Projects") {
      setSorted(projects);
      setSelected("All Projects");
    } else {
      setSorted(projects.filter((item) => item.type === value));
      setSelected(value);
    }
  };
  return (
    <div className="w-3/4 mx-auto">
      <div>
        <h1 className="text-white text-2xl mt-12">
          Prototypes And Products <br /> That Get It
        </h1>
        <p className="text-gold text-base my-4 uppercase">Sort Projects</p>
        <div className="flex">
          <div
            onClick={() => {
              handleSort("All Projects");
            }}
            className={`rounded-3xl cursor-pointer text-base  border ${
              selected === "All Projects"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            All Projects
          </div>
          <div
            onClick={() => {
              handleSort("Immersive Enrionments");
            }}
            className={`rounded-3xl cursor-pointer text-base  border ${
              selected === "Immersive Enrionments"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Immersive Enrionments
          </div>
          <div
            onClick={() => {
              handleSort("Brand Activations");
            }}
            className={`rounded-3xl cursor-pointer text-base border ${
              selected === "Brand Activations"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Brand Activations
          </div>
          <div
            onClick={() => {
              handleSort("Training");
            }}
            className={`rounded-3xl cursor-pointer text-base  border ${
              selected === "Training"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Training
          </div>
        </div>
      </div>
      <ProjectsList sorted={sorted} />
    </div>
  );
};

export default Projects;
