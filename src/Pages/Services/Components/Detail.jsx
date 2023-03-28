import React from "react";
import { Link } from 'react-router-dom'
const Detail = () => {
  return (
    <div className="grid grid-cols-3 gap-8 my-28 text-xl text-white">
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="/images/Services/Virtual Reality.png" alt="" />
        <p className="mt-6">Virtual Reality</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="images/Services/Augmented Reality.png" alt="" />
        <p className="mt-6">Augmented Reality</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="images/Services/Immersive Training.png" alt="" />
        <p className="mt-6">Immersive Training</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="images/Services/XR Marketing.png" alt="" />
        <p className="mt-6">XR Marketing</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="images/Services/3D Modeling.png" alt="" />
        <p className="mt-6">3D Modeling</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div>
        <img src="images/Services/Retail Store Virtualization.png" alt="" />
        <p className="mt-6">Retail Store Virtualization</p>
      </div>
      </Link>
    </div>
  );
};

export default Detail;
