import React from "react";

const About = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        <img src="/images/About/Hero.png" alt="" />
        <h1 className="absolute top-1/3 left-28 text-7xl text-white">
          About US
        </h1>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center mt-20">
          <div className="">
            <img src="/images/Services/2nd Section.png" alt="" />
          </div>
          <div className="w-11/12">
            <h1 className="text-white text-4xl mb-8">
              Prototypes And Products That Get It
            </h1>
            <p className="text-white mb-4">
              Welcome to our Toggle Tech Lab, where we help startups and
              enterprises. turn their ideas into reality.
            </p>
            <p className="text-white">
              We specialize in creating virtual and augmented reality prototypes
              that allow startups to visualize their concepts in a fully
              immersive environment. Our team of experienced developers and
              designers use the latest technology to bring your vision to life.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-12 items-center my-20">
          <div>
            <img src="/images/About/Upwork.png" alt="" />
          </div>
          <div>
            <img src="/images/About/XR Today.png" alt="" />
          </div>
          <div>
            <img src="/images/About/Rising Star.png" alt="" />
          </div>
          <div>
            {" "}
            <img src="/images/About/Venture Labs.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 mb-20">
          <div>
            <h1 className="text-4xl text-white mb-8">Our mission</h1>
            <p className="text-white mb-4">
              Our mission is to empower startups to take their ideas to the next
              level by providing them with the tools and expertise to create
              amazing XR prototypes. We believe that XR technology has the power
              to transform the way we interact with the world, and we are
              committed to helping our clients leverage its full potential.
            </p>
            <p className="text-white">
              Whether you’re looking to create a virtual showroom for your
              product, a gamified educational experience, or a fully immersive
              training simulation, we’ve got you covered.
            </p>
          </div>
          <div>
            <h1 className="text-4xl text-white mb-8">Our Vision</h1>
            <p className="text-white mb-4">
              Our team will work closely with you to understand your goals and
              create a tailored XR prototype that meets your needs and exceeds
              your expectations.
            </p>
            <p className="text-white">
              At our XR agency, we’re passionate about innovation and
              creativity, and we’re dedicated to helping startups bring their
              ideas to life. If you’re ready to take your startup to the next
              level, contact us today to learn more about our services and how
              we can help you succeed.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-white text-4xl mb-8">Why Choose Us</h1>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl p-6 h-80">
              <img className="w-14 h-14" src="/icons/Why Choose-1.svg" alt="" />
              <h1 className="text-white text-2xl my-4">
                Strategic Consulting, and Development for XR Technologies
              </h1>
              <p className="text-white">
                AR (Augmented Reality), VR (Virtual Reality) and XR (Extended
                Reality)
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 h-80">
              <img className="w-14 h-14" src="/icons/Why Choose-2.svg" alt="" />
              <h1 className="text-white text-2xl my-4">
                Application Development for VR HMD Platforms
              </h1>
              <p className="text-white">
                Meta Quest, HTC Vive, Pico and others
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 h-80">
              <img className="w-14 h-14" src="/icons/Why Choose-3.svg" alt="" />
              <h1 className="text-white text-2xl my-4">
                Camera AR Lens and Photo Filters
              </h1>
              <p className="text-white">Facebook, Snapchat, Instagram</p>
              <ul className="text-white marker:text-red-800 list-disc ml-6">
                <li className="mt-2">Web AR SDKs (DeepAR, and 8th Wall)</li>
                <li className="mt-2">3D Design and Animation</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 h-48">
              <img className="w-14 h-14" src="/icons/Why Choose-4.svg" alt="" />
              <h1 className="text-white text-2xl my-4">Mobile AR</h1>
              <p className="text-white">iOS ARKit and Android ARCore</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 h-48">
              <img className="w-14 h-14" src="/icons/Why Choose-5.svg" alt="" />
              <h1 className="text-white text-2xl my-4">
                360º Content Creation Videos
              </h1>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 h-48">
              <img className="w-14 h-14" src="/icons/Why Choose-6.svg" alt="" />
              <h1 className="text-white text-2xl my-4">Motion Capture</h1>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 h-44">
              <img className="w-14 h-14" src="/icons/Why Choose-7.svg" alt="" />
              <h1 className="text-white text-2xl my-4">
                3D Design and Modelling
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-20">
         <h1 className="text-white text-4xl mb-8">Awesome Team Members</h1>
         <div className="grid grid-cols-4">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-52 h-52 rounded-full overflow-hidden">
              <img src="/images/Team/Team-1.png" alt=""/>
            </div>
            <h1 className="text-white text-2xl mt-4 mb-1">John Smith</h1>
            <p className="text-white">Founder / CEO</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-52 h-52 rounded-full overflow-hidden">
              <img src="/images/Team/Team-2.png" alt=""/>
            </div>
            <h1 className="text-white text-2xl mt-4 mb-1">Sandra Johnson</h1>
            <p className="text-white">Co-Founder</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-52 h-52 rounded-full overflow-hidden">
              <img src="/images/Team/Team-3.png" alt=""/>
            </div>
            <h1 className="text-white text-2xl mt-4 mb-1">Mahesh Mishra</h1>
            <p className="text-white">VR Developer</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-52 h-52 rounded-full overflow-hidden">
              <img src="/images/Team/Team-4.png" alt=""/>
            </div>
            <h1 className="text-white text-2xl mt-4 mb-1">Mahesh Mishra</h1>
            <p className="text-white">VR Developer</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-52 h-52 rounded-full overflow-hidden">
              <img src="/images/Team/Team-5.png" alt=""/>
            </div>
            <h1 className="text-white text-2xl mt-4 mb-1">Sandra Johnson</h1>
            <p className="text-white">Co-Founder</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-52 h-52 rounded-full overflow-hidden">
              <img src="/images/Team/Team-6.png" alt=""/>
            </div>
            <h1 className="text-white text-2xl mt-4 mb-1">Mahesh Mishra</h1>
            <p className="text-white">VR Developer</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-52 h-52 rounded-full overflow-hidden flex justify-center items-center bg-gray-900">
              <img className="w-10 h-10" src="/icons/Plus.svg" alt=""/>
            </div>
            <h1 className="text-white text-2xl mt-4 mb-1">Join Our Team</h1>
            <p className="text-white">Contact Us</p>
          </div>
          
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
