import React from "react";
import Hero from "./Components/Hero";
import Partners from "../../Common/Partners";
import Build from "./Components/Build";
import ProptypeProduct from "./Components/ProptypeProduct";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import CaseStudy from "./Components/CaseStudy";
import Testimonials from "./Components/Testimonials";
import ScheduleCall from "../../Common/ScheduleCall";
import LetsTalk from "../../Common/LetsTalk";

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Build />
      <ProptypeProduct />
      <Services />
      <Contact />
      <CaseStudy />
      <Testimonials />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default Home;
