import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Layout = ({children}) => {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-screen-2xl">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
