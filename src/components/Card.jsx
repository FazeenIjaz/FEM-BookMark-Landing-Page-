import React from "react";

const Card = ({ img, title, version, className }) => {
  return (
    <div className={`w-[300px] h-[300px] p-[30px]  flex gap-7 flex-col shadow-xl bg-gray-100 hover:shadow-2xl text-center ${className}`}>
      {/* img and desc */}
      <div className="">
        <div className="mx-auto text-center w-[80px] h-[100px]">
          <img src={img} alt="" />
        </div>
        <h3 className="text-[30px] font-semibold">{title}</h3>
        <p className="text-grayish-blue ">{version}</p>
      </div>
      {/* btn */}
      <button className="w-[220px] h-[55px] text-[18px] text-white shadow-md hover:shadow-2xl transition-all duration-500 bg-soft-blue hover:shadow-soft-blue rounded-lg hover:bg-transparent hover:text-soft-blue hover:border-soft-blue hover:border-2 mx-auto">
        Add & install Extension
      </button>
    </div>
  );
};

export default Card;
