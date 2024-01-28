import React from "react";
import heroImg from "../assets/illustration-hero.svg";
import Button from "./Button";

const Intro = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row md:px-[40px] md:py-[50px] py-[20px] px-[10px] relative items-center lg:text-left text-center lg:gap-0 gap-10">
      {/* left */}
      <div className="lg:max-w-[50%]">
        <h2 className="lg:text-[50px] md:text-[40px] text-[33px] sm:font-bold font-semibold mb-[17px]">
          A simple Bookmark Manager
        </h2>
        <p className="text-[18px] text-grayish-blue leading-[1.7] lg:max-w-[480px] mb-[30px]">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        {/* btn wrapper */}
        <div className="flex gap-4 sm:flex-row flex-col md:items-start items-center lg:justify-normal justify-center">
         
          <button className="w-[220px] h-[55px] text-[18px] text-white shadow-md hover:shadow-2xl transition-all duration-500 bg-soft-blue hover:shadow-soft-blue rounded-lg hover:bg-transparent hover:text-soft-blue hover:border-soft-blue hover:border-2">
            Get it on Firefox
          </button>
          <button className="w-[220px] h-[55px] bg-grayish-blue/50 text-black transition-all duration-500  hover:text-gray-500 hover:border-2 hover:border-grayish-blue text-[18px] shadow-md hover:shadow-2xl hover:bg-transparent hover:shadow-grayish-blue rounded-lg">
            Get it on Firefox
          </button>
        </div>
      </div>
      {/* right img */}
      <div className="lg:max-w-[50%] -z-[1]">
        <img src={heroImg} alt="HeroImg" />
      </div>
      <div className="bg-soft-blue lg:w-[700px] sm:h-[370px] md:w-[650px] sm:w-[500px] w-[300px] h-[200px] absolute md:top-[20%] sm:top-[10%] top-[7%] right-0 -z-10 rounded-l-full" />
    </section>
  );
};

export default Intro;
