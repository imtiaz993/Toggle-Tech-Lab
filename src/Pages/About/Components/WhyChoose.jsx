import React from "react";

const WhyChoose = () => {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-white text-2xl mb-8">Why Choose Us</h1>
      <div className="grid grid-cols-3 gap-8">
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-96 "
          style={{ backgroundImage: "url('/images/About/Why Choose BG.png')" }}
        >
          <div className="rounded-2xl pt-14 px-16">
            <img className="w-14 h-14" src="/icons/Why Choose-1.svg" alt="" />
            <h1 className="text-white text-xl my-4">
              Strategic Consulting, and Development for XR Technologies
            </h1>
            <p className="text-grey text-lg">
              AR (Augmented Reality), VR (Virtual Reality) and XR (Extended
              Reality)
            </p>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-96"
          style={{ backgroundImage: "url('/images/About/Why Choose BG.png')" }}
        >
          <div className="rounded-2xl pt-14 px-16">
            <img className="w-14 h-14" src="/icons/Why Choose-2.svg" alt="" />
            <h1 className="text-white text-xl my-4">
              Application Development for VR HMD Platforms
            </h1>
            <p className="text-grey text-lg">
              Meta Quest, HTC Vive, Pico and others
            </p>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-96"
          style={{ backgroundImage: "url('/images/About/Why Choose BG.png')" }}
        >
          <div className="rounded-2xl pt-14 px-16">
            <img className="w-14 h-14" src="/icons/Why Choose-3.svg" alt="" />
            <h1 className="text-white text-xl my-4">
              Camera AR Lens and Photo Filters
            </h1>
            <p className="text-grey text-lg">Facebook, Snapchat, Instagram</p>
            <ul className="list-disc ml-6 text-lg">
              <li className="mt-2 text-gold">
                <div className="text-grey">
                  Web AR SDKs (DeepAR, and 8th Wall)
                </div>
              </li>
              <li className="mt-2 text-gold">
                <div className="text-grey">3D Design and Animation</div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-60 "
          style={{
            backgroundImage: "url('/images/About/Why Choose BG 2.png')",
          }}
        >
          <div className="rounded-2xl px-16 pt-14 ">
            <img className="w-14 h-14" src="/icons/Why Choose-4.svg" alt="" />
            <h1 className="text-white text-xl my-4">Mobile AR</h1>
            <p className="text-grey text-lg">iOS ARKit and Android ARCore</p>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-60"
          style={{
            backgroundImage: "url('/images/About/Why Choose BG 2.png')",
          }}
        >
          <div className="rounded-2xl pt-14 px-16">
            <img className="w-14 h-14" src="/icons/Why Choose-5.svg" alt="" />
            <h1 className="text-white text-xl my-4">
              360º Content Creation Videos
            </h1>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-60"
          style={{
            backgroundImage: "url('/images/About/Why Choose BG 2.png')",
          }}
        >
          <div className="rounded-2xl pt-14 px-16">
            <img className="w-14 h-14" src="/icons/Why Choose-6.svg" alt="" />
            <h1 className="text-white text-xl my-4">Motion Capture</h1>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover -m-6 h-52"
          style={{
            backgroundImage: "url('/images/About/Why Choose BG 3.png')",
          }}
        >
          <div className="rounded-2xl pt-14 px-16">
            <img className="w-14 h-14" src="/icons/Why Choose-7.svg" alt="" />
            <h1 className="text-white text-xl my-4">3D Design and Modelling</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
