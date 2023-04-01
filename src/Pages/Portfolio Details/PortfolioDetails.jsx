import React from "react";
import LetsTalk from "../../Common/LetsTalk";
import { useLocation } from "react-router-dom";
import MedicalSimulations from "./Individual Portfolio Details/Medical Simulations/MedicalSimulations";

const PortfolioDetails = () => {
  const projectDetailDirectory = [
    { name: "RN Training", component: MedicalSimulations },
  ];
  const location = useLocation();
  const paths = location.pathname.split("/");
  const currentPath = paths[paths.length - 1].replace(/-/g, " ");
  let CurrentComponent;
  projectDetailDirectory.map((component) => {
    if (component.name === currentPath) {
      CurrentComponent = component.component;
    }
    return null
  });
  return (
    <>
      {CurrentComponent && <CurrentComponent />}
      <LetsTalk />
    </>
  );
};

export default PortfolioDetails;
