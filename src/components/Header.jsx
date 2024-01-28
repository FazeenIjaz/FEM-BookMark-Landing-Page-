import React, { useState } from "react";
import logo from "../assets/logo-bookmark.svg";
import { Links } from "../data";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="flex items-center md:p-[30px] justify-between p-[20px] pt-[30px]">
      {/* logo */}
      <div className="">
        <img src={logo} alt="Logo" />
      </div>
      {/* links */}
      <div className="md:flex gap-6 items-center hidden">
        {Links.map((link) => (
          <p className="cursor-pointer hover:text-soft-red" key={link.id}>
            {link.title}
          </p>
        ))}
        <Button
          title={"LogIn"}
          className="bg-soft-red hover:text-soft-red hover:border-soft-red lg:block  hidden"
        />
      </div>
      {/* mobile nav */}
      <div className="md:hidden flex items-center justify-center">
        <div className="md:hidden block text-[24px]" onClick={handleMenuOpen}>
          {menuOpen ? <IoClose /> : <IoMdMenu />}
        </div>
        {menuOpen && (
          <div className="fixed z-[10000] top-[15%] right-0  w-full h-full text-center text-[20px]">
            <div className="flex gap-[50px] flex-col items-center md:hidden bg-dark-blue opacity-[0.9] z-[10000] text-white p-[30px]">
              {Links.map((link) => (
                <p
                  className="cursor-pointer  border-b border-grayish-blue w-full uppercase tracking-widest"
                  key={link.id}
                  onClick={handleMenuOpen}
                >
                  {link.title}
                </p>
              ))}
              <Button
                title={"LogIn"}
                className="bg-transparent text-white border-[2px] border-white w-full  block  md:hidden"
                onClick={handleMenuOpen}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
