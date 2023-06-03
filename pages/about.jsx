import React from "react";
import Hero from "../Components/about/Hero";
import Detail from "../Components/about/Detail";
import MissionVision from "../Components/about/MissionVision";
import WhyChoose from "../Components/about/WhyChoose";
import ServicesCopy from "../Components/about/ServicesCopy";
import Team from "../Components/about/Team";
import ScheduleCall from "../Common/ScheduleCall";
import LetsTalk from "../Common/LetsTalk";

const About = () => {
  return (
    <>
      <Hero />
      <Detail />
      <MissionVision />
      <ServicesCopy />
      <WhyChoose />
      <Team />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default About;
