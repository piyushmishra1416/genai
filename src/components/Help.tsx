'use client'
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

interface FAQ {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "What is GenAI?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "What is GenAI?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center mx-auto">
        <h1 className="font-semibold text-4xl">Need Help?</h1>
        <p className="mt-[5%] text-xl text-[22, 28, 45, 0.7]">
          Don&apos;t worry, we got you. Here are some answers for <br></br> your question.
        </p>
      </div>
      <div className="w-[45%] mt-[8%]">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col mb-[2%] justify-between">
            <div
              className="flex justify-between items-center mb-[3%]"
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              {expandedIndex === index ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </div>
            {expandedIndex === index && (
              <div className="mb-[2%] text-[#808080] border-t border-gray-300 py-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
