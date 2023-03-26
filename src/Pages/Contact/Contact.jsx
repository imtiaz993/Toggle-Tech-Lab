import React from "react";
import Navbar from "../../Common/Navbar";
import Hero from "./Components/Hero";
import Form from "./Components/Form";
import Locations from "./Components/Locations";
import Maps from "./Components/Maps";
import Footer from "../../Common/Footer";
const Contact = () => {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-screen-2xl">
        <Navbar />
        <Hero/>
        <div className="w-3/4 mx-auto">
          <div className="flex justify-between mt-20 border-b border-dark-grey pb-4 mb-16">
            <Locations />
            <Form />
          </div>
          <Maps />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
