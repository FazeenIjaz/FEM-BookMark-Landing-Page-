import React, { useState } from "react";
import { questions } from "../data";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Button from "./Button";

export const SingleQuestion = ({ question, answer }) => {
  const [answers, setAnswers] = useState(false);

  return (
    <div className="px-[1rem]  md:w-[700px] sm:w-[400px] w-[300px]">
      <div
        className="flex justify-between items-center cursor-pointer text-[16px] hover:text-soft-red border-y"
        onClick={() => setAnswers(!answers)}
      >
        <h4 className="text-[20px] hover:text-soft-red p-[20px]">{question}</h4>
        <button
          className={`w-[2rem] h-[2rem] ${
            answers ? "text-soft-red" : "text-soft-blue"
          }`}
        >
          {answers ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {answers && (
        <p className="p-[20px] text-[18px] text-dark-blue">{answer}</p>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="flex flex-col md:px-[40px] md:py-[50px] py-[20px] px-[10px] items-center lg:text-left  relative gap-10 ">
      <div className="text-center">
        <h2 className="text-[44px] font-semibold mb-[20px]">
          Frequently Asked Questions
        </h2>
        <p className="text-grayish-blue text-[18px] lg:max-w-[560px] sm:max-w-[460px] max-w-[300px] mx-auto text-center">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="">
        {questions.map((question) => (
          <div className="" key={question.id}>
            <SingleQuestion
              question={question.question}
              answer={question.ans}
            />
          </div>
        ))}
      </div>
      <Button title={"More Info"} className="md:block hidden lg:mx-0 mx-auto" />
    </section>
  );
};

export default FAQ;
