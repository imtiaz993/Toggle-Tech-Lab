import React from "react";
import Footer from "../../Common/Footer";
import LetsTalk from "../../Common/LetsTalk";
import Navbar from "../../Common/Navbar";
import Partners from "../../Common/Partners";
import ScheduleCall from "../../Common/ScheduleCall";
import Achievements from "./Components/Achievements";
import Detail from "./Components/Detail";
import Hero from "./Components/Hero";
const Services = () => {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-screen-2xl">
        <Navbar />
        <Hero />
        <div className="w-3/4 mx-auto">
          <Detail/>
          <Achievements />
          <Partners />
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

export default Services;
