import React from "react";
import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>
      <div className="flex items-center justify-between max-w-7xl mx-auto my-4">
        <div className="flex flex-col justify-center gap-15">
          <h1 className="text-[60px] font-extrabold leading-tight">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-[18px] font-normal text-[#475569FF]">
            Explore frontend, backend, database, and tooling options, <br />{" "}
            compare them side by side, and put together the stack that fits your{" "}
            <br /> next project.
          </p>
          <div className="flex items-center gap-2">
            <button className="btn btn-success bg-linear-to-r from-[#ff5722] to-[#d81b7e] border-0 text-white rounded-lg shadow-none">
              Explore Technologies
            </button>
            <button className="btn rounded-lg text-[#334155]">Learn More</button>
          </div>
        </div>

        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
