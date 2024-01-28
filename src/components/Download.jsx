import React from "react";
import Card from "./Card";
import img1 from "../assets/logo-chrome.svg";
import img2 from "../assets/logo-firefox.svg";
import img3 from "../assets/logo-opera.svg";

const Download = () => {
  return (
    <section className="flex flex-col md:px-[40px] md:py-[50px] py-[20px] px-[10px] items-center lg:text-left text-center relative gap-10 ">
      <div className="text-center">
        <h2 className="text-[44px] font-semibold mb-[20px]">
          Download the extension
        </h2>
        <p className="text-grayish-blue text-[18px] lg:max-w-[560px] text-center">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      {/* cards */}
      <div className="flex gap-8 flex-wrap items-center justify-center">
        <Card
          className={"mt-[10px]"}
          img={img1}
          title={"Add to Chrome"}
          version={"Minimum version 62"}
        />
        <Card
          className={"md:mt-[100px]"}
          img={img2}
          title={"Add to FireFox"}
          version={"Minimum version 55"}
        />
        <Card
          className={"md:mt-[180px]"}
          img={img3}
          title={"Add to Opera"}
          version={"Minimum version 46"}
        />
      </div>
    </section>
  );
};

export default Download;
