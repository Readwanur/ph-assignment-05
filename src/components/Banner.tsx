import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto my-6 lg:my-10 px-4 md:px-8 gap-8">
        <div className="flex flex-col justify-center gap-6 lg:gap-15 text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-[60px] font-extrabold leading-tight">
            Build Your Ideal <br className="hidden lg:block" />
            <span className="bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-base lg:text-[18px] font-normal text-[#475569FF]">
            Explore frontend, backend, database, and tooling options, <br className="hidden lg:block" />{" "}
            compare them side by side, and put together the stack that fits your{" "}
            <br className="hidden lg:block" /> next project.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2">
            <button className="btn btn-success bg-linear-to-r from-[#ff5722] to-[#d81b7e] border-0 text-white rounded-lg shadow-none">
              Explore Technologies
            </button>
            <button className="btn rounded-lg text-[#334155]">Learn More</button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
          <img src={banner} alt="" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
