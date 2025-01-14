import React from "react";
import heroBg from "../../../public/assets/images/heroBg.png";
import heroBgmob from "../../../public/assets/images/heroBgmob.png";

import CustomHeading from "../common/customHeading";
import { CiMenuFries } from "react-icons/ci";
const HeroSection = () => {
  const pages = [
    { name: "Home" },
    { name: "About us" },
    { name: "Product Feature" },
    { name: "Pricing" },
    { name: "FAQ" },
    { name: "Contact Us" },
  ];

  return (
    <div
      className="bg-cover 2xl:bg-center bg-top bg-no-repeat h-screen "
      style={{
        backgroundImage: `url(${heroBg.src})`,
      }}
    >
      <div className="container mx-auto ">
        <div className="lg:bg-transparent bg-white flex items-start justify-between lg:pt-6 lg:px-0 px-2 lg:py-0 py-3">
          <h2 className="font-fontOutfit lg:text-[26px] text-xl font-bold text-textHeading">
            TapyGoo
          </h2>
          <div className="lg:flex hidden items-center gap-10 ">
            {pages?.map((item, index) => (
              <div key={index}>
                <h2 className="text-base font-fontOutfit text-textHeading hover:text-customOrange font-medium">
                  {item.name}
                </h2>
              </div>
            ))}
          </div>
          <CiMenuFries size={25} className="lg:hidden block font-extrabold" />
        </div>
        <div className="2xl:pt-24 pt-10">
          <CustomHeading
            fontWeight={"font-semibold"}
            textAlign={"text-center"}
            fontSize={"lg:text-[42px] text-[24px] leading-[32px]"}
            headingText="Turn WhatsApp into"
          />
          <CustomHeading
            fontWeight={"font-bold"}
            textAlign={"text-center"}
            fontSize={"lg:text-[48px] text-[24px]"}
            headingText="Your Restaurant's Best Ally"
          />
          <p className="lg:text-lg text-xs font-fontOutfit text-[#696969] font-medium text-center">
            With TapyGoo, connect your WhatsApp orders directly to your POS.
            Simple, <br></br>
            fast, and hassle-free.
          </p>
          <div className="flex items-center justify-center mt-3">
            <button className="bg-customDarkGreen rounded-[48px] lg:text-base text-sm text-white font-fontOutfit py-2 px-4">
              Request a free demo +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
