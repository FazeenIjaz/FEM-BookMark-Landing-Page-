import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-soft-blue py-[50px] flex flex-col gap-6">
      <div className="text-center">
        <small className="text-white uppercase tracking-[4px]">35,000+ already joined</small>
      </div>
      <div className="text-center">
        <h2 className="md:text-[44px] text-[39px] text-white max-w-[480px] mx-auto font-semibold">Stay up-to-date with what we’re doing</h2>
      </div>
      <div className="text-center flex md:flex-row flex-col gap-4 items-center justify-center">
        <input type="email" required placeholder="example@gmail.com" className="h-[45px] w-[270px] px-[20px] rounded-md" />
        <button className="md:w-[120px] w-[220px] md:h-[45px] h-[50px] text-[18px] text-white shadow-md hover:shadow-2xl transition-all duration-500 bg-soft-red hover:shadow-soft-red rounded-lg hover:bg-white hover:text-soft-red hover:border-soft-red hover:border-2">Contact Us</button>
      </div>
    </section>
  );
};

export default NewsLetter;
