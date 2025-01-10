import React from "react";
import CustomHeading from "../common/customHeading";
import Sections from "../../../public/assets/images/Sections.png";
import mobsection from "../../../public/assets/images/mobsection.png";

import Image from "next/image";
const HowWork = () => {
  return (
    <>
      <div className="bg-customBgGray pt-16 pb-14">
        <div className="container mx-auto ">
          <CustomHeading
            headingText="How It Works"
            textColor={"text-textHeading"}
            fontSize={"lg:text-[26px] text-lg"}
            textAlign={"text-center"}
            fontWeight={"font-semibold"}
          />
          <p className="lg:text-base text-xs text-center text-[#696969] font-fontOutfit">
            Getting Started Is Easy
          </p>
          <div className="flex items-center justify-center mt-10">
            <Image src={Sections} alt="works" className="lg:block hidden" />
            <Image src={mobsection} alt="works" className="lg:hidden block" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWork;
