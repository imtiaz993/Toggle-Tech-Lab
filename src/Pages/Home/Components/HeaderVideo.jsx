import React from "react";

const HeaderVideo = () => {
  return (
    <div>
      <video autoPlay muted loop>
        <source src="/images/Home/header_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeaderVideo;
