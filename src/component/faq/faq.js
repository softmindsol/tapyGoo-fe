"use client";

import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Is it compatible with my current POS?",
      answer:
        "Our system is designed to integrate with most modern POS systems. We support major platforms including Square, Shopify POS, Lightspeed, and many others. Contact our support team for specific compatibility information.",
    },
    {
      question: "What do I need to install it?",
      answer:
        "Installation requirements include a modern web browser, stable internet connection, and your existing POS credentials. Some features may require additional hardware depending on your setup.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "The basic setup typically takes 15-30 minutes. This includes software installation, initial configuration, and basic training. Full integration and staff training may take 1-2 hours depending on your needs.",
    },
  ];
  return (
    <div className="container mx-auto lg:px-0 px-4 lg:py-14 py-7">
      <div className="lg:px-56">
        <h2 className="font-fontOutfit lg:text-[26px] text-lg text-textHeading font-semibold">
          FAQs
        </h2>
        <p className="text-[#696969] lg:text-lg text-xs">
          Have Questions? We've Got Answers.
        </p>

        <div className=" mt-8 bg-white rounded-lg shadow">
          <div className="">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 mb-4">
                <button
                  className="w-full py-4 px-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-left lg:text-[16px] text-xs font-medium text-gray-900">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <FiMinus className="h-5 w-5 text-gray-500" />
                  ) : (
                    <GoPlus className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 lg:text-[16px] text-xs ">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
