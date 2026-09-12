import React from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="flex items-center justify-between py-4 max-w-[1280px] mx-auto">
      <img src={logo} alt="" />
      <ul className=" flex justify-center items-center gap-7 cursor-pointer">
        <li className="text-[#b91b7e]">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center">
        <button className="btn text-[#334155] shadow-none rounded-3xl bg-white border-0">
          Sign In
        </button>
        <button className="btn shadow-none bg-[#d91b7e] border-0 rounded-3xl text-white">
          Sign Up
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
