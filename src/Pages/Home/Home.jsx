import React from "react";
import Navbar from "../../Common/Navbar";
import Partners from "../../Common/Partners";
import Build from "./Components/Build";
import Hero from "./Components/Hero";
import ScheduleCall from "../../Common/ScheduleCall";
import Footer from "../../Common/Footer";
import LetsTalk from "../../Common/LetsTalk";
const Home = () => {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-screen-2xl">
        <Navbar />
        <Hero />
        <div className="w-3/4 mx-auto">
          <Partners />
          <Build />
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

export default Home;
