import React from "react";
import Navbar from "../../Common/Navbar";
import Detail from "./Components/Detail";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import Team from "./Components/Team";
import Vision from "./Components/Vision";
import WhyChoose from "./Components/WhyChoose";
import ScheduleCall from "../../Common/ScheduleCall";
import Footer from "../../Common/Footer";
import LetsTalk from "../../Common/LetsTalk";
const About = () => {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-screen-2xl">
        <Navbar />
        <Hero />
        <div className="w-3/4 mx-auto">
          <Detail />
          <div className="grid grid-cols-2 gap-12 mb-20">
            <Mission />
            <Vision />
          </div>
          <WhyChoose />
          <Team/>
        </div>
        <ScheduleCall />
        <div className="w-3/4 mx-auto">
          <LetsTalk />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
