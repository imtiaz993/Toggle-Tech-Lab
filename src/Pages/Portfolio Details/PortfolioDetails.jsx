import React from "react";
import Hero from "./Components/Hero";
import SidebarDetailWrapper from "./Components/SidebarDetailWrapper";
import ScheduleCall from "../../Common/ScheduleCall";
import LetsTalk from "../../Common/LetsTalk";

const PortfolioDetails = () => {
  return (
    <>
      <Hero />
      <SidebarDetailWrapper />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default PortfolioDetails;
