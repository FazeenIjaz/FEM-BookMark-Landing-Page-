import React from "react";

const Button = ({ className, title, onClick }) => {
  return (
    <button
      className={`${className} bg-soft-blue text-white border border-transparent hover:border hover:border-soft-blue hover:text-soft-blue hover:bg-transparent w-[90px] h-[40px] rounded-md transition-all duration-500 ease-in-out`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
