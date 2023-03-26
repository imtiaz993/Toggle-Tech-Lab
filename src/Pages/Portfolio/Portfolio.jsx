import React from "react";
import Navbar from "../../Common/Navbar";
import ScheduleCall from "../../Common/ScheduleCall";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "../../Common/Footer";
import LetsTalk from "../../Common/LetsTalk";
const Portfolio = () => {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-screen-2xl">
        <Navbar />
        <Hero />
        <Projects />
      </div>
      <ScheduleCall/>
      <div className="w-3/4 mx-auto">
          <LetsTalk />
          <Footer />
        </div>
    </div>
  );
};

export default Portfolio;
