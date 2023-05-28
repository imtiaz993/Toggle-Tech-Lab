import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showOptions && window) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [showOptions]);

  return (
    <>
      <div className="w-full bg-navbar-gredient fixed z-10  mx-auto">
        <div className="hidden md:flex w-11/12 mx-auto justify-between items-center pt-3 pb-2 ">
          <Link href="/">
            <img
              className="w-[160px]"
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/logo/Toggle.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center text-base md:text-lg">
            <Link
              href="/"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white"
                  : "mr-4 lg:mr-6 pb-2 text-grey"
              }
            >
              Home
            </Link>
            <Link
              href="/about"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white"
                  : "mr-4 lg:mr-6 pb-2 text-grey"
              }
            >
              About
            </Link>
            <Link
              href="/service"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white"
                  : "mr-4 lg:mr-6 pb-2 text-grey"
              }
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white"
                  : "mr-4 lg:mr-6 pb-2 text-grey"
              }
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="mb-2 text-white border-2 border-gray-400 rounded-3xl py-1 px-6"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full fixed bg-dark z-10  mx-auto">
        <div className="md:hidden  w-11/12 mx-auto">
          <div className="flex justify-between pt-4 pb-2">
            <Link href="/">
              <img className="w-36" src="/icons/Logo.svg" alt="" />
            </Link>
            {!showOptions && (
              <img
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
                className=""
                src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Navbar+Toggle.svg"
                alt=""
              />
            )}
            {showOptions && (
              <img
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
                className=""
                src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Navbar+Close.svg"
                alt=""
              />
            )}
          </div>
          <div
            className={`${showOptions ? "h-screen" : "h-0 overflow-hidden"}`}
          >
            <ul className="inline-flex flex-col mt-6">
              <Link
                href="/"
                className={({ isActive }) =>
                  isActive ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={({ isActive }) =>
                  isActive ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                About
              </Link>
              <Link
                href="/service"
                className={({ isActive }) =>
                  isActive ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className={({ isActive }) =>
                  isActive ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="inline-block mt-4 text-white border-2 border-gray-400 rounded-3xl py-1 px-6"
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
