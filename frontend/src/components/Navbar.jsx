import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useauth } from "../contextproviders/authcontext";
import { Context } from "../App";
const Navbar = () => {
 
    const [signedin, setsignedin] = useContext(Context)
    
    
  return (
      

    <div className="flex items-center fixed w-full justify-between px-8 py-4  bg-white shadow-sm">
      {/* Logo */}
      
      <div className="flex items-center justify-around">
      <div className="text-2xl font-bold">
        <span className="text-black">Healhty</span>
        <span className="text-blue-600">Carely</span>
      </div>

      {/* Menu Links */}
      <ul className="flex pl-6 space-x-8 text-gray-700 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Doctor
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Review
          </NavLink>
        </li>
      </ul>
            </div>
      {/* Buttons */}
      <div className="flex items-center space-x-6 ">
        <NavLink
          to="/login"
          className={
          signedin ? "hidden":"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"}
        >
          Sign In
        </NavLink>
        <NavLink
          to="/signup"
          
          className={signedin ? "hidden":"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          }>
          Sign Up
        </NavLink>
        <NavLink
          to="/logut"
          className={
          signedin ? "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition":"hidden"}
        >
          Log-out
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
