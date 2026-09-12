import React from "react";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-1">
            <img src={logo} alt="DevStack Logo" className="mb-6 h-8" />
            <p className="text-gray-500 text-sm mb-6 max-w-[280px] leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-4 text-sm text-gray-500 font-medium">
              <a
                href="https://github.com/Readwanur"
                className="hover:text-gray-800 transition-colors"
              >
                GitHub
              </a>
              <a href="#Twitter" className="hover:text-gray-800 transition-colors">
                Twitter
              </a>
              <a href="#Linkedin" className="hover:text-gray-800 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:ml-auto">
            <h3 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-wider">
              PRODUCT
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="md:ml-auto">
            <h3 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-wider">
              COMPANY
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="md:ml-auto">
            <h3 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-wider">
              LEGAL
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 pt-7">
          <p>&copy; 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
