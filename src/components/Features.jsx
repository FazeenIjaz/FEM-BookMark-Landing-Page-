import React, { useState } from "react";
import { tabs } from "../data";
import Button from "./Button";

const Features = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const setTab = (index) => {
    setSelectedTab(index);
  };

  const active = (title) =>
    selectedTab.title === title
      ? "border-b-2 border-soft-red text-soft-red "
      : "";

  return (
    <section className="flex flex-col md:px-[0px] md:py-[50px] py-[20px] px-[10px] items-center lg:text-left text-center relative gap-10 ">
      {/* sec. header */}
      <div className="text-center">
        <h2 className="text-[44px] font-semibold mb-[20px]">Features</h2>
        <p className="text-grayish-blue text-[18px] lg:max-w-[560px] text-center">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      {/* tabs sec. */}
      <div className=" relative">
        <div className="sm:border-grayish-blue sm:border-b md:mx-auto lg:w-[700px]">
          <ul className=" sm:gap-10 gap-6 lg:mx-0 mx-auto mb-20px justify-center my-4 sm:flex-row flex-col flex">
            {tabs.map((tab) => (
              <>
                <li
                  className={`cursor-pointer inline-flex items-center justify-center text-[19px]  tracking-[2.7px] hover:border-b-2 hover:border-soft-red hover:border-solid ${active(
                    tab.title
                  )}`}
                  key={tab.id}
                >
                  <button className="" onClick={() => setTab(tab)}>
                    {tab.header}
                  </button>
                </li>
                <hr className="w-[100vw] sm:hidden inline-block" />
              </>
            ))}
          </ul>
        </div>
        <div className="flex  justify-between lg:flex-row flex-col lg:items-start items-center mt-10 gap-20 px-[10px]">
          <div className="">
            <img src={selectedTab.img} alt="" className="" />
          </div>
          <div className=" flex flex-col gap-[30px]">
            <h3 className="text-[40px] font-semibold">{selectedTab.title}</h3>
            <p className="lg:max-w-[400px] text-grayish-blue leading-[1.7] tracking-wider">
              {selectedTab.desc}
            </p>
            <Button
              title={"More Info"}
              className="md:block hidden lg:mx-0 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-soft-blue lg:w-[700px] sm:h-[370px] md:w-[650px] sm:w-[550px] w-[300px] h-[290px] absolute lg:bottom-[0%] md:bottom-[30%] bottom-[24%]  left-0 -z-10 rounded-r-full" />
    </section>
  );
};

export default Features;
