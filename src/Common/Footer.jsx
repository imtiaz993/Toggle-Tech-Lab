import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-3/4 mx-auto lg:flex justify-between text-grey text-sm py-8 border-t border-dark-grey">
      <div className="flex flex-wrap md:w-3/4 xl:w-auto">
        <Link to='/about' className="mr-4">About Us</Link>
        <Link to='/contact' className="mr-4">Contact</Link>
        <Link to='/service' className="mr-4">Services</Link>
        {/* <Link to='/' className="mr-4">Privacy Policy</Link>
        <Link to='/' className="mr-4">Terms & Conditions</Link> */}
      </div>
      <div>
        <p className="mt-2 lg:mt-0">
          Copyright 2017-2023 Toggle Tech Lab Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
