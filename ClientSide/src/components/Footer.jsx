import React from "react";
import Container from "./Container";
import footerlogo from "../images/navbarlogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-600">
      <Container>
        <div className="pt-12 pb-6 px-6 font-[sans-serif] tracking-wide">
          <div className="mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="lg:flex lg:items-center">
                <a href="javascript:void(0)">
                  <img src={footerlogo} alt="logo" className="w-48" />
                </a>
              </div>
              <div className="lg:flex lg:items-center">
                <ul className="flex space-x-6">
                  <li>
                    <a href="javascript:void(0)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-white hover:fill-white w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-white hover:fill-white w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg mb-6 text-white">Services</h4>
                <ul className="space-y-4 pl-2">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Accounting
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Basic Computer
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Career Guildline
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Corporate Professional
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg mb-6 text-white">Company</h4>
                <ul className="space-y-4 pl-2">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg mb-6 text-white">Additional</h4>
                <ul className="space-y-4 pl-2">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      News
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-10">
              © Coder24 - 2025. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
