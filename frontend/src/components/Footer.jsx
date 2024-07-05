import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full md:w-1/3 px-6 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              Kolkata, West Bengal, 700102
            </p>
            <p className="text-gray-400 mb-4">Email: 30mincode@gmail.com</p>
            <p className="text-gray-400">Phone: +91-8435 739 236</p>
          </div>
          <div className="w-full md:w-1/3 px-6 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-red-500">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/learn" className="hover:text-red-500">
                  Learn
                </a>
              </li>
              <li className="mb-2">
                <a href="/ide" className="hover:text-red-500">
                  Online IDE
                </a>
              </li>
              <li className="mb-2">
                <a href="/faqs" className="hover:text-red-500">
                  FAQS
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-6">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4 text-3xl">
              <FaFacebook className="cursor-pointer hover:text-red-500 duration-300" />
              <FaLinkedin className="cursor-pointer hover:text-red-500 duration-300" />
              <FaTwitter className="cursor-pointer hover:text-red-500 duration-300" />
              <FaInstagram className="cursor-pointer hover:text-red-500 duration-300" />
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-10">
          © 2024 30MinCode. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
