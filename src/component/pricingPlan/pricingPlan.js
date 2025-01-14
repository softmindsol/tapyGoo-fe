import React from "react";
import CustomHeading from "../common/customHeading";
import { FaCheck } from "react-icons/fa6";
import pricing from "../../../public/assets/images/pricing.png";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
const PricingPlan = () => {
  const pricingPlan = [
    {
      title: "Basic Plan",
      price: "$9.99",
      features: [
        {
          feature: "Access to Employers Hotline",
        },
        {
          feature: "Medical Specialties",
        },
        {
          feature: "Binding arbitration and class",
        },
        {
          feature: "24/7 Customer Support",
        },
        {
          feature: "Free equipment use",
        },
        {
          feature: "Safety training topics",
        },
      ],
      btnText: "Start Now +",
    },
    {
      title: "Professional Plan",
      price: "$19.99",
      features: [
        {
          feature: "Access to Employers Hotline",
        },
        {
          feature: "Medical Specialties",
        },
        {
          feature: "Binding arbitration and class",
        },
        {
          feature: "24/7 Customer Support",
        },
        {
          feature: "Free equipment use",
        },
        {
          feature: "Safety training topics",
        },
      ],
      btnText: "Start Now +",
    },
    {
      title: "Custom Plan",
      price: "$29.99",
      features: [
        {
          feature: "Access to Employers Hotline",
        },
        {
          feature: "Medical Specialties",
        },
        {
          feature: "Binding arbitration and class",
        },
        {
          feature: "24/7 Customer Support",
        },
        {
          feature: "Free equipment use",
        },
        {
          feature: "Safety training topics",
        },
      ],
      btnText: "Start Now +",
    },
  ];

  return (
    <>
      <div className="container mx-auto lg:px-0 px-4 py-6">
        <CustomHeading
          headingText="Pricing Plan"
          fontSize={"lg:text-[42px] text-[22px]"}
          textAlign={"text-center"}
          fontWeight={"font-semibold"}
        />
        <div className="grid lg:grid-cols-3 gap-3 mt-6">
          {pricingPlan.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-xl bg-white">
              <div
                className={`py-8 h-[168px] ${
                  index === 1 || index === 3
                    ? "bg-customOrange"
                    : "bg-customDarkGreen"
                } rounded-lg`}
              >
                <h2 className="text-white font-fontOutfit text-[28px] text-center font-semibold">
                  {item.title}
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <div className=" -mt-20 bg-white shadow-xl rounded-full p-6">
                  <Image src={pricing} alt="pricing" />
                </div>
              </div>
              <div className="px-10 lg:mt-8 mt-5 border-b-2 pb-14 ">
                <h2 className="text-[48px] font-fontOutfit font-semibold">
                  {item.price}
                  <span className="text-base text-[#696969]">/Monthly</span>
                </h2>
                {item?.features.map((subitem, subindex) => (
                  <div key={subindex} className="flex items-center gap-3 my-2">
                    {subindex === 1 ? <RxCross2 color="red" /> : <FaCheck />}
                    <p className="text-lg text-[#696969] font-fontOutfit font-medium">
                      {subitem.feature}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center lg:my-10 py-5">
                <button
                  className={`text-white font-fontOutfit text-lg px-10 py-2 rounded-md font-medium ${
                    index === 1 || index === 3
                      ? "bg-customDarkGreen"
                      : "bg-customOrange"
                  }`}
                >
                  {item.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-customBgGray py-16">
        <CustomHeading
          headingText="Ready to Transform Your Restaurant? "
          fontSize={"lg:text-[32px] text-[22px]"}
          textAlign={"text-center"}
          fontWeight={"font-semibold"}
        />
        <CustomHeading
          headingText="Try TapyGoo for Free "
          fontSize={"lg:text-[32px] text-[22px]"}
          textAlign={"text-center"}
          fontWeight={"font-semibold"}
        />
        <div className="flex items-center justify-center gap-4 mt-4 lg:px-0 px-6">
            <button
              className={`text-white font-fontOutfit text-lg px-10 py-2 rounded-md font-medium bg-customDarkGreen`}
            >
              Try Now, No Commitment
            </button>
            <button
              className={`text-white lg:block hidden font-fontOutfit text-lg px-10 py-2 rounded-md font-medium bg-customDarkGreen`}
            >
              Create Schedule
            </button>
            

        </div>
      </div>
    </>
  );
};

export default PricingPlan;
