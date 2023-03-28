import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-navbar-gredient absolute z-10  mx-auto">
      <div className="w-11/12 mx-auto flex justify-between items-center pt-6 pb-4 ">
        <img src="/icons/Logo.svg" alt="" />
        <div className="flex items-center text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "mr-6 pb-2 text-white border-b border-white"
                : "mr-6 pb-2 text-grey"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "mr-6 pb-2 text-white border-b border-white"
                : "mr-6 pb-2 text-grey"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "mr-6 pb-2 text-white border-b border-white"
                : "mr-6 pb-2 text-grey"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "mr-6 pb-2 text-white border-b border-white"
                : "mr-6 pb-2 text-grey"
            }
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/contact"
            className="mb-2 text-white border-2 border-gray-400 rounded-3xl py-1 px-6"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
