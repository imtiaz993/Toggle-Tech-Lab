import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between text-grey text-sm py-8 border-t border-dark-grey">
      <div className="flex">
        <p className="mr-4">About Us</p>
        <p className="mr-4">Contact</p>
        <p className="mr-4">Contact</p>
        <p className="mr-4">Privacy Policy</p>
        <p className="mr-4">Terms & Conditions</p>
      </div>
      <div>
        <p>
          Copyright 2017-2023 Toggle Tech Lab subsidiary of Let’s JavaScript!
          Corp.
        </p>
      </div>
    </div>
  );
};

export default Footer;
