import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import ScrollToTop from "../Common/ScrollToTop";

const Layout = ({children}) => {
  return (
    <div className="bg-dark">
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
