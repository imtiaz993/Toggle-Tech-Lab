import React, { useMemo } from "react";
import Link from "next/link";

const BlogList = ({ AllBlogs }) => {
  const bogs = useMemo(
    () => [
      {
        id: "1",
        name: "EcoPod",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ecopod6.jpeg",
      },
      {
        id: "1",
        name: "360 degree music video",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/360degvideo/360degmusicvideo.jpg",
      },

      {
        id: "1",
        name: "Learn the Sign Language in VR",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/signlang1.PNG",
      },
      {
        id: "1",
        name: "Teaching Solar Energy Systems Design using Game-Based Virtual Reality",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/SolarPanel/solar2.PNG",
      },

      {
        id: "1",
        name: "Chemical Engineering Simulation",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ChemicalEngineeringSimulation/cover_chemengg.PNG",
      },

      {
        id: "1",
        name: "Providing Comprehensive Therapy For Children With Autism Spectrum Disorder",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ASU/ASU1.PNG",
      },
      {
        id: "1",
        name: "Body walkthrough in VR",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/BodyWalkThrough/bodywalkthrough3.PNG",
      },
      {
        id: "1",
        name: "Noble Pharma App",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/noble_pharma_cover.PNG",
      },
      {
        id: "1",
        name: "RN Training",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/VRRN/vrrn2.jpg",
      },

      {
        id: "1",
        name: "The ART Room - Ukraine",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ArtStudio/art2.PNG",
      },
      {
        id: "1",
        name: "Chester Cheetos",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/CarnivalChester/cover-min.PNG",
      },
      {
        id: "1",
        name: "Police Simulator",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/PoliceSimulator+/pcover-min.PNG",
      },
      {
        id: "1",
        name: "Chemical Engineering Simulation",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ChemicalEngineeringSimulation/cover_chemengg.PNG",
      },

      {
        id: "1",
        name: "Customer service in the Metaverse",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/CustomerServiceMetaverse/decentraland_metaverse_thumbnail.PNG",
      },
      /*
            {
                id:"1",
              name: "Waajoo Africa Metaverse Prototype",
              img: "",
            },
        */
      {
        id: "1",
        name: "Sprint AR",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/SprintAR/sprint_AR_cover.jpg",
      },
      {
        id: "1",
        name: "Noble Pharma App",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/noble_pharma_cover.PNG",
      },
      {
        id: "1",
        name: "The ART Room - Ukraine",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ArtStudio/art2.PNG",
      },
      {
        id: "1",
        name: "Inverse Surveillance",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/InverseSurveillance+/is_cover-min.PNG",
      },
      {
        id: "1",
        name: "Immersive Mind",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ImmersiveMind/immersivemind-min.png",
      },
    ],
    []
  );
  return (
    <div className="w-11/12  md:w-3/4 mx-auto">
      <div
        className="w-11/12 md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
  gap-8 mt-8 mb-12 max-w-screen-xxl mx-auto"
      >
        {bogs.map((item, index) => (
          <Link key={index} href={`/blogs/${item.id}`}>
            <div className="mb-4 cursor-pointer">
              <div className="relative">
                <img
                  className="object-fill
    xxl:h-74
    xl:h-74  
    lg:h-64  
    md:w-full md:h-80
    w-full h-full"
                  src={item.img}
                  alt=""
                />
              </div>

              <p className="text-white text-lg md:text-md mt-4">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
