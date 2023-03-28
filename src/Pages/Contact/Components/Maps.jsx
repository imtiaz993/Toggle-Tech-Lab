import React from "react";

const Maps = () => {
  return (
    <div className="w-3/4 mx-auto mb-24">
      <h1 className="text-white text-2xl mb-10">Office Locations</h1>
      <div className="mt-8">
        <p className="text-white text-xl mb-8">Canada</p>
        <div className="h-64">
          <img src="/images/Contact/Map1.png" alt=""/>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-white pt-10 text-xl mb-8">India Branch</p>
        <div className="h-64">
        <img src="/images/Contact/Map2.png" alt=""/>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-white pt-10 text-xl mb-8">Qatar Branch</p>
        <div className="h-64">
        <img src="/images/Contact/Map1.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Maps;