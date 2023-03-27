import React from "react";
import Detail from "./Detail";
import Achievements from "./Achievements";
import Partners from "../../../Common/Partners";

const ComponentsWrapper = () => {
  return (
    <div className="w-3/4 mx-auto">
      <Detail />
      <Achievements />
      <Partners />
    </div>
  );
};

export default ComponentsWrapper;
