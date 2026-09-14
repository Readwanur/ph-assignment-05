import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="flex items-center justify-between py-4 px-4 md:px-8 max-w-7xl mx-auto relative">
        <div className="flex items-center md:hidden">
          <img src={hamburger} alt="Menu" className="w-6 h-6 cursor-pointer" />
        </div>

        <div className="flex md:flex-1 justify-center md:justify-start absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src={logo} alt="Logo" className="h-6 md:h-8" />
        </div>

        <ul className="hidden md:flex justify-center items-center gap-7 cursor-pointer">
          <li className="text-[#b91b7e]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center md:flex-1 justify-end gap-2">
          <button className="btn btn-sm md:btn-md text-[#334155] shadow-none rounded-3xl bg-white border-0 hidden sm:flex">
            Sign In
          </button>
          <button className="btn btn-sm md:btn-md shadow-none bg-[#d91b7e] border-0 rounded-3xl text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
