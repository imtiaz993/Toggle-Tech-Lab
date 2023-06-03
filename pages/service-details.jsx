import React from "react";
import Hero from "../Components/service-details/Hero";
import DetailPrevNextWrapper from "../Components/service-details/DetailPrevNextWrapper";
import ScheduleCall from "../Common/ScheduleCall";
import LetsTalk from "../Common/LetsTalk";

const ServiceDetails = () => {
  return (
    <>
      <Hero />
      <DetailPrevNextWrapper />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default ServiceDetails;
