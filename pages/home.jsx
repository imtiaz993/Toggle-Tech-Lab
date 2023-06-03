import Hero from "../Components/home/Hero";
import Partners from "../Common/Partners";
import Build from "../Components/home/Build";
import ProptypeProduct from "../Components/home/ProptypeProduct";
import Services from "../Components/home/Services";
import Contact from "../Components/home/Contact";
import CaseStudy from "../Components/home/CaseStudy";
import ServicesCopy from "../Components/home/ServicesCopy";
import Testimonials from "../Components/home/Testimonials";
import ScheduleCall from "../Common/ScheduleCall";
import LetsTalk from "../Common/LetsTalk";
import HeaderVideo from "../Components/home/HeaderVideo";

const Home = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("build-section");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleHeaderVideo = () => {
    const videoElement = document.getElementById("headerVideo-section");
    if (videoElement) {
      // 👇 Will scroll smoothly to the top of the next section
      videoElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Hero
        handleClickScroll={handleClickScroll}
        handleHeaderVideo={handleHeaderVideo}
      />
      <Partners />
      <Build />
      <HeaderVideo />
      <ProptypeProduct />
      <Services />
      <Contact />
      <CaseStudy />
      <ServicesCopy />
      <Testimonials />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default Home;
