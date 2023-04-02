import React from "react";
import LetsTalk from "../../Common/LetsTalk";
import { useLocation } from "react-router-dom";
import RNTraining from "./Individual Portfolio Details/RN Training/RNTraining";
import DegreeMusicvVideo from "./Individual Portfolio Details/360 degree music video/DegreeMusicvVideo";
import BodywalkthroughinVR from "./Individual Portfolio Details/Body walkthrough in VR/BodywalkthroughinVR";
import ChemicalEngineeringSimulation from "./Individual Portfolio Details/Chemical Engineering Simulation/ChemicalEngineeringSimulation";
import ChesterCheetos from "./Individual Portfolio Details/Chester Cheetos/ChesterCheetos";
import ComprehensiveTherapyForChildren from "./Individual Portfolio Details/Comprehensive Therapy For Children/ComprehensiveTherapyForChildren";
import CustomerserviceintheMetaverse from "./Individual Portfolio Details/Customer service in the Metaverse/CustomerserviceintheMetaverse";
import Doffleinandouttraining from "./Individual Portfolio Details/Doffle in and out training/Doffleinandouttraining";
import EcoPod from "./Individual Portfolio Details/EcoPod/EcoPod";
import InverseSurveillance from "./Individual Portfolio Details/Inverse Surveillance/InverseSurveillance";
import ImmersiveMind from "./Individual Portfolio Details/Immersive Mind/ImmersiveMind";
import LearntheSignLanguageinVR from "./Individual Portfolio Details/Learn the Sign Language in VR/LearntheSignLanguageinVR";
import NoblePharmaApp from "./Individual Portfolio Details/Noble Pharm aApp/NoblePharmaApp";
import PoliceSimulator from "./Individual Portfolio Details/Police Simulator/PoliceSimulator";
import SprintAR from "./Individual Portfolio Details/Sprint AR/SprintAR";
import TeachingSolarEnergySystemsDesign from "./Individual Portfolio Details/Teaching Solar Energy Systems Design/TeachingSolarEnergySystemsDesign";
import TheARTRoomUkraine from "./Individual Portfolio Details/The ART Room - Ukraine/TheARTRoomUkraine";
import TheUnitedProspectorsGuild from "./Individual Portfolio Details/The United Prospectors Guild/TheUnitedProspectorsGuild";
import WaajooAfricaMetaversePrototype from "./Individual Portfolio Details/Waajoo Africa Metaverse Prototype/WaajooAfricaMetaversePrototype";

const PortfolioDetails = () => {
  const projectDetailDirectory = [
    {
      name: "RNTraining",
      component: RNTraining,
    },
    {
      name: "DegreeMusicvVideo",
      component: DegreeMusicvVideo,
    },
    {
      name: "BodywalkthroughinVR",
      component: BodywalkthroughinVR,
    },
    {
      name: "ChemicalEngineeringSimulation",
      component: ChemicalEngineeringSimulation,
    },
    {
      name: "ChesterCheetos",
      component: ChesterCheetos,
    },
    {
      name: "ComprehensiveTherapyForChildren",
      component: ComprehensiveTherapyForChildren,
    },
    {
      name: "CustomerserviceintheMetaverse",
      component: CustomerserviceintheMetaverse,
    },
    {
      name: "Doffleinandouttraining",
      component: Doffleinandouttraining,
    },
    {
      name: "EcoPod",
      component: EcoPod,
    },
    {
      name: "InverseSurveillance",
      component: InverseSurveillance,
    },
    {
      name: "ImmersiveMind",
      component: ImmersiveMind,
    },
    {
      name: "LearntheSignLanguageinVR",
      component: LearntheSignLanguageinVR,
    },
    {
      name: "NoblePharmaApp",
      component: NoblePharmaApp,
    },
    {
      name: "PoliceSimulator",
      component: PoliceSimulator,
    },
    {
      name: "SprintAR",
      component: SprintAR,
    },
    {
      name: "TeachingSolarEnergySystemsDesign",
      component: TeachingSolarEnergySystemsDesign,
    },
    {
      name: "TheARTRoomUkraine",
      component: TheARTRoomUkraine,
    },
    {
      name: "TheUnitedProspectorsGuild",
      component: TheUnitedProspectorsGuild,
    },
    {
      name: "WaajooAfricaMetaversePrototype",
      component: WaajooAfricaMetaversePrototype,
    },
  ];
  const location = useLocation();
  const paths = location.pathname.split("/");
  const currentPath = paths[paths.length - 1].replace(/-/g, " ");
  let CurrentComponent;
  projectDetailDirectory.map((component) => {
    if (component.name === currentPath) {
      CurrentComponent = component.component;
    }
    return null;
  });
  return (
    <>
      {CurrentComponent && <CurrentComponent />}
      <LetsTalk />
    </>
  );
};

export default PortfolioDetails;
