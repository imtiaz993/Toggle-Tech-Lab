import React from "react";
import Navbar from "../../Common/Navbar";
import Hero from "./Components/Hero";
import ScheduleCall from "../../Common/ScheduleCall";
import Footer from "../../Common/Footer";
import LetsTalk from "../../Common/LetsTalk";
import Sidebar from "./Components/Sidebar";
import Detail from "./Components/Detail";
import PrevNext from "../../Common/PrevNext";
const PortfolioDetails = () => {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-screen-2xl">
        <Navbar />
        <Hero />
        <div className="w-3/4 mx-auto flex justify-between mt-16">
          <Sidebar />
          <div className="w-4/6">
            <Detail />
            <PrevNext />
          </div>
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

export default PortfolioDetails;
