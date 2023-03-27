import React from "react";
import ProjectsList from "../../../Common/ProjectsList";

const Projects = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div>
        <h1 className="text-white text-2xl mt-12">
          Prototypes And Products <br /> That Get It
        </h1>
        <p className="text-gold text-base my-4 uppercase">Sort Projects</p>
        <div className="flex">
          <div className="rounded-3xl text-base text-white border border-white py-1 px-3 mr-2">
            All Projects
          </div>
          <div className="rounded-3xl text-base text-grey border border-grey py-1 px-3 mr-2">
            Immersive Enrionments
          </div>
          <div className="rounded-3xl text-base text-grey border border-grey py-1 px-3 mr-2">
            Brand Activations
          </div>
          <div className="rounded-3xl text-base text-grey border border-grey py-1 px-3 mr-2">
            Emerging Technologies
          </div>
        </div>
      </div>
      <ProjectsList />
    </div>
  );
};

export default Projects;
