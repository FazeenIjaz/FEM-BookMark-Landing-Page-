import React from "react";
import logo from "../assets/logo-bookmark.svg";
import { Links } from "../data";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-[30px] flex md:flex-row items-center justify-between md:gap-0 gap-5 flex-col bg-dark-blue">
      {/* logo + links */}
      <div className="flex items-center justify-between md:gap-20 gap-5 md:flex-row  flex-col">
        <img src={logo} alt="" className="invert" />
        <div className="text-white flex gap-8 ">
          {Links.map((link) => (
            <p className="cursor-pointer hover:text-soft-red" key={link.id}>
              {link.title}
            </p>
          ))}
        </div>
      </div>
      {/* social links */}
      <div className="text-white flex text-[22px] gap-4">
        <FaFacebook className="hover:text-soft-red cursor-pointer" />
        <FaTwitter className="hover:text-soft-red cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
