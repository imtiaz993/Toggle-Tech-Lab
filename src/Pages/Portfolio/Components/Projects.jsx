import React, { useState } from "react";
import ProjectsList from "../../../Common/ProjectsList";

const Projects = () => {
  const projects = [
    //medical
    {
      type: "Medical Simulations",
      name: "RN Training",
      img: "/images/Portfolio/Medical/VRRN.png",
      icon: "vr",
    },
    {
      type: "Medical Simulations",
      name: "Providing Comprehensive Therapy For Children With Autism Spectrum Disorder",
      img: "/images/Portfolio/Medical/ASU.png",
      icon: "vr",
    },
    {
      type: "Medical Simulations",
      name: "Body walkthrough in VR",
      img: "/images/Portfolio/Medical/UE_MedicalWalkthrough.PNG",
      icon: "vr",
    },
    {
      type: "Medical Simulations",
      name: "Noble Pharma App",
      img: "/images/Portfolio/Medical/noble.png",
      icon: "vr",
    },

    {
      type: "Medical Simulations",
      name: "Doffle in and out training",
      img: "/images/Portfolio/Medical/doffle.png",
      icon: "vr",
    },
    //education
    {
      type: "Training",
      name: "Learn the Sign Language in VR",
      img: "/images/Portfolio/Training/alphabet.png",
      icon: "vr",
    },
    {
      type: "Training",
      name: "Teaching Solar Energy Systems Design using Game-Based Virtual Reality",
      img: "/images/Portfolio/Training/solar.png",
      icon: "vr",
    },
    {
      type: "Training",
      name: "Immersive Mind",
      img: "/images/Portfolio/Training/immersivemind.png",
      icon: "vr",
    },
    {
      type: "Training",
      name: "Chemical Engineering Simulation",
      img: "/images/Portfolio/Games/engineering.png",
      icon: "vr",
    },

    //immersive enviornments
    {
      type: "Immersive Enviornments",
      name: "EcoPod",
      img: "/images/Portfolio/Immersive_Env/ecopod1.png",
      icon: "vr",
    },
    {
      type: "Immersive Enviornments",
      name: "360 degree music video",
      img: "/images/Portfolio/Immersive_Env/360music.png",
      icon: "vr",
    },

    //Brand activation

    {
      type: "Brand Activations",
      name: "The ART Room - Ukraine",
      img: "/images/Portfolio/AR/ukraine_ar.jpeg",
      icon: "vr",
    },
    //games
    {
      type: "Games",
      name: "Chester Cheetos",
      img: "/images/Portfolio/Games/chester.png",
      icon: "games",
    },
    {
      type: "Games",
      name: "Police Simulator",
      img: "/images/Portfolio/Games/policesim.png",
      icon: "games",
    },
    {
      type: "Games",
      name: "Chemical Engineering Simulation",
      img: "/images/Portfolio/Games/engineering.png",
      icon: "games",
    },

    //AI
    {
      type: "AI",
      name: "Customer service in the Metaverse",
      img: "/images/Portfolio/AI/DCL_voctiv.png",
      icon: "metaverse",
    },
    {
      type: "AI",
      name: "Waajoo Africa Metaverse Prototype",
      img: "/images/Portfolio/AI/waajoo.png",
      icon: "metaverse",
    },

    // Augmented reality
    {
      type: "AR",
      name: "Sprint AR",
      img: "/images/Portfolio/AR/sprintAR.png",
      icon: "ar",
    },
    {
      type: "AR",
      name: "Noble Pharma App",
      img: "/images/Portfolio/Medical/noble.png",
      icon: "ar",
    },
    {
      type: "AR",
      name: "The ART Room - Ukraine",
      img: "/images/Portfolio/AR/ukraine_ar.jpeg",
      icon: "ar",
    },
    {
      type: "AR",
      name: "Inverse Surveillance",
      img: "/images/Portfolio/AR/inverse.png",
      icon: "ar",
    },
    {
      type: "AR",
      name: "The United Prospectors Guild",
      img: "/images/Portfolio/AR/unitedgild2.png",
      icon: "ar",
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
    <div className="w-11/12  md:w-3/4 mx-auto">
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
              handleSort("Immersive Enviornments");
            }}
            className={`rounded-3xl cursor-pointer text-base  border ${
              selected === "Immersive Enviornments"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Immersive Enviornments
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
          <div
            onClick={() => {
              handleSort("Games");
            }}
            className={`rounded-3xl cursor-pointer text-base  border ${
              selected === "Games"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            2D & 3D Games
          </div>

          <div
            onClick={() => {
              handleSort("Medical Simulations");
            }}
            className={`rounded-3xl cursor-pointer text-base  border ${
              selected === "Medical Simulations"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Medical Simulations
          </div>

          <div
            onClick={() => {
              handleSort("AI");
            }}
            className={`rounded-3xl cursor-pointer text-base  border ${
              selected === "AI"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            AI, Metaverse
          </div>

          <div
            onClick={() => {
              handleSort("AR");
            }}
            className={`rounded-3xl cursor-pointer text-base  border ${
              selected === "AR"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Augmented reality
          </div>
        </div>
      </div>
      <ProjectsList sorted={sorted} />
    </div>
  );
};

export default Projects;
