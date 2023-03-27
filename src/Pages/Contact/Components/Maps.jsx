import React from "react";

const Maps = () => {
  return (
    <div className="w-3/4 mx-auto mb-24">
      <h1 className="text-white text-2xl mb-10">Office Locations</h1>
      <div className="mt-8">
        <p className="text-white text-xl mb-8">Canada</p>
        <div className="h-64">
          <iframe
            title="Canada"
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Westminste &t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-white text-xl mb-8">India Branch</p>
        <div className="h-64">
          <iframe
            title="India"
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Westminste &t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-white text-xl mb-8">Qatar Branch</p>
        <div className="h-64">
          <iframe
            title="Qatar"
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Westminste &t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Maps;
