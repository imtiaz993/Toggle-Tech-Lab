import React from "react";
import Sidebar from "./Sidebar";
import PrevNext from "../../../Common/PrevNext";
import Detail from "./Detail";

const SidebarDetailWrapper = () => {
  return (
    <div className="w-3/4 mx-auto lg:flex justify-between mt-16">
      <Sidebar />
      <div className="lg:w-4/6">
        <Detail />
        {/* <PrevNext /> */}
      </div>
    </div>
  );
};

export default SidebarDetailWrapper;
