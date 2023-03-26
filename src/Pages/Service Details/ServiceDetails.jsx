import React from "react";
import Navbar from "../../Common/Navbar";
import Detail from "./Components/Detail";
import PrevNext from "../../Common/PrevNext";
import ScheduleCall from "../../Common/ScheduleCall";
import Footer from "../../Common/Footer";
import LetsTalk from "../../Common/LetsTalk";
import Hero from "./Components/Hero";
const ServiceDetails = () => {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-screen-2xl">
        <Navbar />
        <Hero/>
        <div className="w-3/4 mx-auto">
          <Detail />
          <PrevNext />
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

export default ServiceDetails;
